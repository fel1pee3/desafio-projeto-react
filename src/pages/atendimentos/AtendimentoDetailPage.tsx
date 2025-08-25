import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAtendimentos } from '../../hooks/useAtendimentos';
import { LoadingSpinner } from '../../components/UI/LoadingSpinner';

export const AtendimentoDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [atendimento, setAtendimento] = useState<any>(null);
  const [isFinalizando, setIsFinalizando] = useState(false);
  const [finalizacaoError, setFinalizacaoError] = useState<string | null>(null);
  
  const { buscarAtendimentoPorId, finalizarAtendimento, isLoading, error } = useAtendimentos();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      carregarAtendimento();
    }
  }, [id]);

  const carregarAtendimento = async () => {
    try {
      const data = await buscarAtendimentoPorId(id!);
      setAtendimento(data);
      setFinalizacaoError(null);
    } catch (err) {
      console.error('Erro ao carregar atendimento:', err);
    }
  };

  const handleFinalizarAtendimento = async () => {
    if (!atendimento || !id) return;

    // Verificar se já está finalizado
    if (isFinalizado(atendimento.status)) {
      alert('Este atendimento já foi finalizado anteriormente.');
      return;
    }

    if (!window.confirm('Tem certeza que deseja finalizar este atendimento?\nEsta ação não pode ser desfeita.')) {
      return;
    }

    setIsFinalizando(true);
    setFinalizacaoError(null);

    try {
      const response = await finalizarAtendimento(id);
      
      if (response && response.sucesso) {
        alert('Atendimento finalizado com sucesso!');
        // Recarrega os dados atualizados
        await carregarAtendimento();
      } else {
        throw new Error(response?.mensagem || 'Erro ao finalizar atendimento');
      }
    } catch (err: any) {
      console.error('Erro ao finalizar atendimento:', err);
      
      const errorMessage = err.message || 'Erro ao finalizar atendimento';
      setFinalizacaoError(errorMessage);
      
      // Se for erro de "já finalizado", atualiza os dados
      if (errorMessage.includes('já finalizado') || errorMessage.includes('finalizado')) {
        alert('Este atendimento já foi finalizado. Atualizando informações...');
        await carregarAtendimento();
      } else {
        alert(`Erro ao finalizar atendimento: ${errorMessage}`);
      }
    } finally {
      setIsFinalizando(false);
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

  const getStatusString = (status: any): string => {
    if (typeof status === 'string') return status;
    if (status && typeof status === 'object') {
      return status.label || status.value || 'N/A';
    }
    return 'N/A';
  };

  const getStatusColor = (status: any) => {
    const statusStr = getStatusString(status).toLowerCase();
    
    if (statusStr.includes('finalizado') || statusStr.includes('concluído') || statusStr.includes('concluido')) {
      return 'bg-green-100 text-green-800';
    } else if (statusStr.includes('andamento') || statusStr.includes('em andamento')) {
      return 'bg-blue-100 text-blue-800';
    } else if (statusStr.includes('pendente') || statusStr.includes('aguardando')) {
      return 'bg-yellow-100 text-yellow-800';
    } else if (statusStr.includes('documentação') || statusStr.includes('documentacao')) {
      return 'bg-purple-100 text-purple-800';
    } else {
      return 'bg-gray-100 text-gray-800';
    }
  };

  const getPessoaAssistidaNome = (atendimento: any): string => {
    if (atendimento.pessoaAssistida && atendimento.pessoaAssistida.nome) {
      return atendimento.pessoaAssistida.nome;
    }
    return atendimento.pessoaAssistidaNome || 'N/A';
  };

  const getResponsavelNome = (atendimento: any): string => {
    if (atendimento.responsavel && atendimento.responsavel.nome) {
      return atendimento.responsavel.nome;
    }
    return atendimento.responsavelNome || atendimento.usuarioCadastro || 'N/A';
  };

  const getViaturaPlaca = (atendimento: any): string => {
    if (atendimento.viatura && atendimento.viatura.placa) {
      return atendimento.viatura.placa;
    }
    return atendimento.viaturaPlaca || 'N/A';
  };

  const getTipoAtendimentoNome = (atendimento: any): string => {
    if (atendimento.tipoAtendimento && atendimento.tipoAtendimento.nome) {
      return atendimento.tipoAtendimento.nome;
    }
    return atendimento.tipoAtendimentoNome || 'N/A';
  };

  const isFinalizado = (status: any): boolean => {
    if (!status) return false;
    
    const statusStr = getStatusString(status).toLowerCase();
    return (
      statusStr.includes('finalizado') || 
      statusStr.includes('concluído') || 
      statusStr.includes('concluido') ||
      statusStr.includes('encerrado') ||
      status === 2 || // Supondo que 2 seja o código para finalizado
      status === '2'
    );
  };

  const canFinalizar = (atendimento: any): boolean => {
    if (!atendimento) return false;
    
    // Verificar se tem dataFim (já foi finalizado)
    if (atendimento.dataFim) return false;
    
    // Verificar pelo status
    if (isFinalizado(atendimento.status)) return false;
    
    // Verificar se o status permite finalização
    const statusStr = getStatusString(atendimento.status).toLowerCase();
    return !statusStr.includes('cancelado') && !statusStr.includes('cancelada');
  };

  if (isLoading && !atendimento) {
    return (
      <div className="p-6">
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner />
          <span className="ml-3">Carregando atendimento...</span>
        </div>
      </div>
    );
  }

  if (error && !atendimento) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-800 font-medium">Erro:</p>
          <p className="text-red-700 mt-1">{error}</p>
        </div>
        <button
          onClick={() => navigate('/atendimentos')}
          className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Voltar para lista
        </button>
      </div>
    );
  }

  if (!atendimento) {
    return (
      <div className="p-6">
        <p className="text-gray-600">Atendimento não encontrado</p>
        <button
          onClick={() => navigate('/atendimentos')}
          className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Voltar para lista
        </button>
      </div>
    );
  }

  const atendimentoFinalizado = isFinalizado(atendimento.status);
  const podeFinalizar = canFinalizar(atendimento);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/atendimentos')}
            className="mr-4 text-gray-600 hover:text-gray-800 flex items-center"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para lista
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Detalhes do Atendimento #{atendimento.id}</h1>
        </div>

        {podeFinalizar && (
          <button
            onClick={handleFinalizarAtendimento}
            disabled={isFinalizando}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:opacity-50 flex items-center"
          >
            {isFinalizando ? (
              <>
                <LoadingSpinner />
                <span className="ml-2">Finalizando...</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Finalizar Atendimento
              </>
            )}
          </button>
        )}
      </div>

      {finalizacaoError && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-800 font-medium">Erro ao finalizar:</p>
          <p className="text-red-700 mt-1">{finalizacaoError}</p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-lg font-medium text-gray-900">Informações do Atendimento</h2>
          <div className="flex items-center mt-2">
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(atendimento.status)}`}>
              {getStatusString(atendimento.status)}
            </span>
            {atendimentoFinalizado && (
              <span className="ml-3 text-sm text-green-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Finalizado
              </span>
            )}
          </div>
        </div>
        
        <div className="px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informações Básicas */}
            <div>
              <h3 className="text-md font-medium text-gray-700 mb-4 pb-2 border-b">Informações Básicas</h3>
              <dl className="space-y-4">
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">ID:</dt>
                  <dd className="text-sm text-gray-900 font-medium">{atendimento.id || 'N/A'}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Data de Início:</dt>
                  <dd className="text-sm text-gray-900">{formatarData(atendimento.dataInicio)}</dd>
                </div>
                {atendimento.dataFim && (
                  <div className="flex justify-between">
                    <dt className="text-sm font-medium text-gray-500">Data de Término:</dt>
                    <dd className="text-sm text-gray-900">{formatarData(atendimento.dataFim)}</dd>
                  </div>
                )}
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Tipo de Atendimento:</dt>
                  <dd className="text-sm text-gray-900">{getTipoAtendimentoNome(atendimento)}</dd>
                </div>
              </dl>
            </div>

            {/* Pessoas Envolvidas */}
            <div>
              <h3 className="text-md font-medium text-gray-700 mb-4 pb-2 border-b">Pessoas Envolvidas</h3>
              <dl className="space-y-4">
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Pessoa Assistida:</dt>
                  <dd className="text-sm text-gray-900">{getPessoaAssistidaNome(atendimento)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Responsável:</dt>
                  <dd className="text-sm text-gray-900">{getResponsavelNome(atendimento)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Viatura:</dt>
                  <dd className="text-sm text-gray-900">{getViaturaPlaca(atendimento)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Chamado Relacionado:</dt>
                  <dd className="text-sm text-gray-900">#{atendimento.chamadoId || 'N/A'}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Observação */}
          {atendimento.observacao && (
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-md font-medium text-gray-700 mb-4">Observações</h3>
              <p className="text-sm text-gray-900 bg-gray-50 p-4 rounded-md border">
                {atendimento.observacao}
              </p>
            </div>
          )}

          {/* Informações de Sistema */}
          <div className="mt-8 pt-6 border-t">
            <h3 className="text-md font-medium text-gray-700 mb-4">Informações do Sistema</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {atendimento.usuarioCadastro && (
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-2">Usuário de Cadastro:</dt>
                  <dd className="text-sm text-gray-900">{atendimento.usuarioCadastro}</dd>
                </div>
              )}
              {atendimento.dataCadastro && (
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-2">Data de Cadastro:</dt>
                  <dd className="text-sm text-gray-900">{formatarData(atendimento.dataCadastro)}</dd>
                </div>
              )}
              {atendimento.usuarioUltimaAlteracao && atendimento.usuarioUltimaAlteracao !== atendimento.usuarioCadastro && (
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-2">Última Alteração por:</dt>
                  <dd className="text-sm text-gray-900">{atendimento.usuarioUltimaAlteracao}</dd>
                </div>
              )}
              {atendimento.dataUltimaAlteracao && atendimento.dataUltimaAlteracao !== atendimento.dataCadastro && (
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-2">Última Alteração em:</dt>
                  <dd className="text-sm text-gray-900">{formatarData(atendimento.dataUltimaAlteracao)}</dd>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {atendimentoFinalizado && (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-md p-4">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-green-800">
              <strong>Atendimento Finalizado</strong> - Este atendimento já foi concluído em {formatarData(atendimento.dataFim)}.
            </p>
          </div>
        </div>
      )}

      {!podeFinalizar && !atendimentoFinalizado && (
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-md p-4">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-yellow-800">
              Este atendimento não pode ser finalizado no momento. Status atual: {getStatusString(atendimento.status)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};