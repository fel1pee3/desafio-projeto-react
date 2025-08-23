import { useState } from 'react';
import { customInstance } from '../api/mutator/custom-instance';
import type { 
  Chamado, 
  ChamadoListagemRequest, 
  ChamadoListagemResponse, 
  ChamadoDTO, 
  SelectOption 
} from '../types/chamado';

export const useChamados = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Listar chamados
  const listarChamados = async (filtros: ChamadoListagemRequest): Promise<ChamadoListagemResponse> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await customInstance({
        url: '/api/Chamado/listagem',
        method: 'POST',
        data: filtros,
      }) as any;

      if (response && response.sucesso && response.dados) {
        return {
          ...response,
          dados: {
            ...response.dados,
            items: response.dados.dados || [],
            totalCount: response.dados.totalRegisters || 0
          }
        };
      } else {
        throw new Error(response?.mensagem || 'Estrutura de resposta inválida');
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.mensagem || err.message || 'Erro ao listar chamados';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Buscar chamado por ID
  const buscarChamadoPorId = async (id: string): Promise<Chamado> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await customInstance({
        url: `/api/Chamado/${id}`,
        method: 'GET',
      }) as { dados: Chamado };

      return response.dados;
    } catch (err: any) {
      const errorMessage = err.response?.data?.mensagem || err.message || 'Erro ao buscar chamado';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Criar chamado (CORRIGIDO)
  const criarChamado = async (chamadoDTO: ChamadoDTO): Promise<{ sucesso: boolean; mensagem: string }> => {
  setIsLoading(true);
  setError(null);

  try {
    console.log('Enviando chamadoDTO:', chamadoDTO);
    
    // USANDO A FUNÇÃO QUE VOCÊ MOSTROU (ajustada)
    const response = await customInstance<null>(
      {
        url: '/api/Chamado',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: chamadoDTO
      }
    ) as any;

    console.log('Resposta da API:', response);

    // A API pode retornar diferentes estruturas de resposta
    if (response && response.sucesso) {
      return { 
        sucesso: true, 
        mensagem: response.mensagem || 'Chamado criado com sucesso' 
      };
    } else if (response && response.dados) {
      // Outro formato possível de resposta
      return { 
        sucesso: true, 
        mensagem: 'Chamado criado com sucesso' 
      };
    } else {
      throw new Error(response?.mensagem || 'Resposta inválida da API');
    }
  } catch (err: any) {
    console.error('Erro detalhado:', err);
    
    let errorMessage = 'Erro ao criar chamado';
    
    if (err.response?.data) {
      // Tenta extrair a mensagem de erro do backend
      const errorData = err.response.data;
      
      if (errorData.mensagem) {
        errorMessage = errorData.mensagem;
      } else if (errorData.errors) {
        // Erros de validação
        errorMessage = Object.entries(errorData.errors)
          .map(([field, messages]) => `${field}: ${(messages as string[]).join(', ')}`)
          .join('; ');
      } else if (typeof errorData === 'string') {
        errorMessage = errorData;
      } else if (errorData.title) {
        errorMessage = errorData.title;
      }
    } else if (err.message) {
      errorMessage = err.message;
    }

    setError(errorMessage);
    throw new Error(errorMessage);
  } finally {
    setIsLoading(false);
  }
};

  // Buscar bairros
  const buscarBairros = async (pesquisa: string): Promise<SelectOption[]> => {
    try {
      const response = await customInstance({
        url: '/api/Chamado/select/bairro',
        method: 'POST',
        data: { pesquisa },
        headers: {
          'Content-Type': 'application/json',
        },
      }) as { dados?: any[] };

      if (response && response.dados && Array.isArray(response.dados)) {
        return response.dados.map((item: any) => ({
          value: item.value || item.id || item.codigo || '',
          label: item.label || item.nome || item.text || item.descricao || '',
        }));
      }
      
      return [];
    } catch (err: any) {
      console.error('Erro ao buscar bairros:', err);
      return [];
    }
  };

  // Buscar pessoas assistidas
  const buscarPessoasAssistidas = async (pesquisa: string): Promise<SelectOption[]> => {
    try {
      const response = await customInstance({
        url: '/api/PessoaAssistida/Select',
        method: 'POST',
        data: { pesquisa },
        headers: {
          'Content-Type': 'application/json',
        },
      }) as { dados?: any[] };

      if (response && response.dados && Array.isArray(response.dados)) {
        return response.dados.map((item: any) => ({
          value: item.value || item.id || item.codigo || '',
          label: item.label || item.nome || item.text || item.descricao || '',
        }));
      }
      
      return [];
    } catch (err: any) {
      console.error('Erro ao buscar pessoas assistidas:', err);
      return [];
    }
  };

  return {
    isLoading,
    error,
    listarChamados,
    buscarChamadoPorId,
    criarChamado,
    buscarBairros,
    buscarPessoasAssistidas,
  };
};