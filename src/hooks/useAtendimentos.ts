import { useState } from 'react';
import { customInstance } from '../api/mutator/custom-instance';
import type { Atendimento, AtendimentoListagemRequest, AtendimentoListagemResponse, AtendimentoDTO, SelectOption } from '../types/atendimento';

export const useAtendimentos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const listarAtendimentos = async (filtros: AtendimentoListagemRequest): Promise<AtendimentoListagemResponse> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await customInstance({
        url: '/api/Atendimento/listagem',
        method: 'POST',
        data: filtros,
      });

      //console.log('Resposta atendimentos:', response);
      return response as AtendimentoListagemResponse;
    } catch (err: any) {
      const errorMessage = err.response?.data?.mensagem || err.message || 'Erro ao listar atendimentos';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const buscarAtendimentoPorId = async (id: string): Promise<Atendimento> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await customInstance({
        url: `/api/Atendimento/${id}`,
        method: 'GET',
      }) as { dados: Atendimento };

      return response.dados;
    } catch (err: any) {
      const errorMessage = err.response?.data?.mensagem || err.message || 'Erro ao buscar atendimento';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const criarAtendimento = async (atendimento: AtendimentoDTO): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      await customInstance({
        url: '/api/Atendimento',
        method: 'POST',
        data: atendimento,
      });
    } catch (err: any) {
      const errorMessage = err.response?.data?.mensagem || err.message || 'Erro ao criar atendimento';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const finalizarAtendimento = async (atendimentoId: string): Promise<any> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await customInstance({
        url: `/api/Atendimento/Finalizar`,
        method: 'GET',
        params: {
          AtendimentoId: atendimentoId
        }
      });

      return response;
    } catch (err: any) {
      const errorMessage = err.response?.data?.mensagem || err.message || 'Erro ao finalizar atendimento';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const buscarViaturas = async (pesquisa: string): Promise<SelectOption[]> => {
    try {
      const response = await customInstance({
        url: '/api/Viatura/Select',
        method: 'POST',
        data: { pesquisa },
      }) as { dados: any[] };

      return response.dados.map((item: any) => ({
        value: item.value,
        label: item.label,
      }));
    } catch (err) {
      console.error('Erro ao buscar viaturas:', err);
      return [];
    }
  };

  const buscarUsuarios = async (pesquisa: string): Promise<SelectOption[]> => {
    try {
      const response = await customInstance({
        url: '/api/Usuario/Select',
        method: 'POST',
        data: { pesquisa },
      }) as { dados: any[] };

      return response.dados.map((item: any) => ({
        value: item.value,
        label: item.label,
      }));
    } catch (err) {
      console.error('Erro ao buscar usuários:', err);
      return [];
    }
  };

  const buscarTiposAtendimento = async (pesquisa: string): Promise<SelectOption[]> => {
    try {
      const response = await customInstance({
        url: '/api/AtendimentoTipo/select',
        method: 'POST',
        data: { pesquisa },
      }) as { dados: any[] };

      return response.dados.map((item: any) => ({
        value: item.value,
        label: item.label,
      }));
    } catch (err) {
      console.error('Erro ao buscar tipos de atendimento:', err);
      return [];
    }
  };

  return {
    isLoading,
    error,
    listarAtendimentos,
    buscarAtendimentoPorId,
    criarAtendimento,
    finalizarAtendimento,
    buscarViaturas,
    buscarUsuarios,
    buscarTiposAtendimento,
  };
};