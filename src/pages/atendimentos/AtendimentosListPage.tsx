import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtendimentos } from '../../hooks/useAtendimentos';
import { type AtendimentoListagemRequest } from '../../types/atendimento';
import { LoadingSpinner } from '../../components/UI/LoadingSpinner';

export const AtendimentosListPage: React.FC = () => {
  const [filtros, setFiltros] = useState<AtendimentoListagemRequest>({
    currentPage: 1,
    pageSize: 10,
    pesquisa: '',
    status: '',
  });
  const [atendimentos, setAtendimentos] = useState<any[]>([]);
  const [, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  const { listarAtendimentos, isLoading, error } = useAtendimentos();
  const navigate = useNavigate();

  useEffect(() => {
    carregarAtendimentos();
  }, [filtros.currentPage, filtros.pesquisa, filtros.status]);

  const carregarAtendimentos = async () => {
    try {
      const response = await listarAtendimentos(filtros);
      
      if (response && response.sucesso && response.dados) {
        const items = response.dados.dados || [];
        const total = response.dados.totalRegisters || 0;
        const currentPg = response.dados.currentPage || 1;
        const totalPgs = response.dados.totalPages || 1;
        
        // console.log('Atendimentos recebidos:', items);
        setAtendimentos(items);
        setTotalCount(total);
        setCurrentPage(currentPg);
        setTotalPages(totalPgs);
      } else {
        setAtendimentos([]);
        setTotalCount(0);
      }
    } catch (err) {
      console.error('Erro ao carregar atendimentos:', err);
      setAtendimentos([]);
      setTotalCount(0);
    }
  };

  const handlePesquisaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltros(prev => ({ ...prev, pesquisa: e.target.value, currentPage: 1 }));
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFiltros(prev => ({ ...prev, status: value, currentPage: 1 }));
  };

  const handlePageChange = (newPage: number) => {
    setFiltros(prev => ({ ...prev, currentPage: newPage }));
  };

  const formatarData = (data: string) => {
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

  // Função para obter o status como string
  const getStatusString = (status: any): string => {
    if (typeof status === 'string') return status;
    if (status && typeof status === 'object') {
      return status.label || status.value || 'N/A';
    }
    return 'N/A';
  };

  const getStatusColor = (status: any) => {
    const statusStr = getStatusString(status).toLowerCase();
    
    if (statusStr.includes('finalizado') || statusStr.includes('concluído')) {
      return 'bg-green-100 text-green-800';
    } else if (statusStr.includes('andamento') || statusStr.includes('em andamento')) {
      return 'bg-blue-100 text-blue-800';
    } else if (statusStr.includes('pendente') || statusStr.includes('aguardando')) {
      return 'bg-yellow-100 text-yellow-800';
    } else if (statusStr.includes('documentação')) {
      return 'bg-purple-100 text-purple-800';
    } else {
      return 'bg-gray-100 text-gray-800';
    }
  };

  // Funções para extrair dados dos objetos aninhados
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

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Atendimentos</h1>
        <button
          onClick={() => navigate('/atendimentos/novo')}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Novo Atendimento
        </button>
      </div>

      {/* Filtros */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pesquisa
            </label>
            <input
              type="text"
              placeholder="Buscar atendimentos..."
              value={filtros.pesquisa || ''}
              onChange={handlePesquisaChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              value={filtros.status || ''}
              onChange={handleStatusChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            >
              <option value="">Todos</option>
              <option value="pendente">Pendentes</option>
              <option value="andamento">Em Andamento</option>
              <option value="finalizado">Finalizados</option>
              <option value="documentacao">Documentação</option>
            </select>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {/* Tabela */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {isLoading ? (
          <div className="flex justify-center items-center p-8">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Pessoa Assistida
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Responsável
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data Início
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {atendimentos && atendimentos.length > 0 ? (
                    atendimentos.map((atendimento) => (
                      <tr key={atendimento.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {atendimento.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {getPessoaAssistidaNome(atendimento)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {getResponsavelNome(atendimento)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {atendimento.dataInicio ? formatarData(atendimento.dataInicio) : 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(atendimento.status)}`}
                          >
                            {getStatusString(atendimento.status)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => navigate(`/atendimentos/${atendimento.id}`)}
                            className="text-primary hover:text-blue-600 mr-3"
                          >
                            Ver detalhes
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                        Nenhum atendimento encontrado
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <nav className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-md border border-gray-300 disabled:opacity-50"
            >
              Anterior
            </button>
            
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              let pageNumber;
              if (totalPages <= 5) {
                pageNumber = i + 1;
              } else if (currentPage <= 3) {
                pageNumber = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNumber = totalPages - 4 + i;
              } else {
                pageNumber = currentPage - 2 + i;
              }
              
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`px-3 py-1 rounded-md ${
                    pageNumber === currentPage
                      ? 'bg-primary text-white'
                      : 'border border-gray-300'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-md border border-gray-300 disabled:opacity-50"
            >
              Próxima
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};