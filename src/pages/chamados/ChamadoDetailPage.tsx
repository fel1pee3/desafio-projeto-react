import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useChamados } from '../../hooks/useChamados';
import { LoadingSpinner } from '../../components/UI/LoadingSpinner';

export const ChamadoDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [chamado, setChamado] = useState<any>(null);
  
  const { buscarChamadoPorId, isLoading, error } = useChamados();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      carregarChamado();
    }
  }, [id]);

  const carregarChamado = async () => {
    try {
      const data = await buscarChamadoPorId(id!);
      setChamado(data);
    } catch (err) {
      console.error('Erro ao carregar chamado:', err);
    }
  };

  const formatarData = (data: string) => {
    if (!data) return 'N/A';
    try {
      return new Date(data).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return data;
    }
  };

  const getPessoaAssistidaNome = (chamado: any): string => {
    if (chamado.pessoaAssistida && chamado.pessoaAssistida.nome) {
      return chamado.pessoaAssistida.nome;
    }
    return 'N/A';
  };

  const getStatus = (chamado: any): string => {
    if (chamado.atendimentoId !== null && chamado.atendimentoId !== undefined) {
      return 'Atendido';
    }
    return 'Pendente';
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-800">{error}</p>
        </div>
        <button
          onClick={() => navigate('/chamados')}
          className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Voltar para lista
        </button>
      </div>
    );
  }

  if (!chamado) {
    return (
      <div className="p-6">
        <p className="text-gray-600">Chamado não encontrado</p>
        <button
          onClick={() => navigate('/chamados')}
          className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Voltar para lista
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate('/chamados')}
          className="mr-4 text-gray-600 hover:text-gray-800 flex items-center"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Detalhes do Chamado #{chamado.id}</h1>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-lg font-medium text-gray-900">Informações do Chamado</h2>
        </div>
        
        <div className="px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informações Básicas */}
            <div>
              <h3 className="text-md font-medium text-gray-700 mb-4 pb-2 border-b">Informações Básicas</h3>
              <dl className="space-y-4">
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">ID:</dt>
                  <dd className="text-sm text-gray-900 font-medium">{chamado.id || 'N/A'}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Status:</dt>
                  <dd className="text-sm">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        getStatus(chamado) === 'Atendido'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {getStatus(chamado)}
                    </span>
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Pessoa Assistida:</dt>
                  <dd className="text-sm text-gray-900">{getPessoaAssistidaNome(chamado)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Data de Cadastro:</dt>
                  <dd className="text-sm text-gray-900">{formatarData(chamado.dataCadastro)}</dd>
                </div>
                {chamado.dataRespondido && (
                  <div className="flex justify-between">
                    <dt className="text-sm font-medium text-gray-500">Data de Resposta:</dt>
                    <dd className="text-sm text-gray-900">{formatarData(chamado.dataRespondido)}</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Endereço */}
            <div>
              <h3 className="text-md font-medium text-gray-700 mb-4 pb-2 border-b">Endereço</h3>
              <dl className="space-y-4">
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Bairro:</dt>
                  <dd className="text-sm text-gray-900">{chamado.bairro || 'N/A'}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Rua:</dt>
                  <dd className="text-sm text-gray-900">{chamado.rua || 'N/A'}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Número:</dt>
                  <dd className="text-sm text-gray-900">{chamado.numero || 'N/A'}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">CEP:</dt>
                  <dd className="text-sm text-gray-900">{chamado.cep || 'N/A'}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Cidade/Estado:</dt>
                  <dd className="text-sm text-gray-900">{chamado.cidade || 'N/A'} - {chamado.estado || 'N/A'}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Informações Adicionais */}
          <div className="mt-8 pt-6 border-t">
            <h3 className="text-md font-medium text-gray-700 mb-4">Informações Adicionais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {chamado.latitude && chamado.longitude && (
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-2">Localização:</dt>
                  <dd className="text-sm text-gray-900">
                    Lat: {chamado.latitude}, Long: {chamado.longitude}
                  </dd>
                </div>
              )}
              
              {chamado.usuarioCadastro && (
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-2">Usuário de Cadastro:</dt>
                  <dd className="text-sm text-gray-900">{chamado.usuarioCadastro}</dd>
                </div>
              )}
            </div>
          </div>

          {chamado.observacao && (
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-md font-medium text-gray-700 mb-4">Observações</h3>
              <p className="text-sm text-gray-900 bg-gray-50 p-4 rounded-md border">
                {chamado.observacao}
              </p>
            </div>
          )}

          {/* Informações do Atendimento (se houver) */}
          {chamado.atendimento && (
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-md font-medium text-gray-700 mb-4">Informações do Atendimento</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-2">ID do Atendimento:</dt>
                  <dd className="text-sm text-gray-900">{chamado.atendimento.atendimentoId}</dd>
                </div>
                {chamado.atendimento.dataInicio && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500 mb-2">Data de Início:</dt>
                    <dd className="text-sm text-gray-900">{formatarData(chamado.atendimento.dataInicio)}</dd>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};