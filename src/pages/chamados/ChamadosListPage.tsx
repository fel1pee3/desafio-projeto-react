import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChamados } from '../../hooks/useChamados';
import { type ChamadoListagemRequest } from '../../types/chamado';
import { LoadingSpinner } from '../../components/UI/LoadingSpinner';

export const ChamadosListPage: React.FC = () => {
  const [filtros, setFiltros] = useState<ChamadoListagemRequest>({
    currentPage: 1,
    pageSize: 10,
    pesquisa: '',
    atendido: undefined,
  });
  const [chamados, setChamados] = useState<any[]>([]);
  const [, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { listarChamados, isLoading, error } = useChamados();
  const navigate = useNavigate();

  useEffect(() => {
    carregarChamados();
  }, [filtros.currentPage, filtros.pesquisa, filtros.atendido]);

  const carregarChamados = async () => {
    try {
      console.log('Carregando chamados com filtros:', filtros);
      
      const response = await listarChamados(filtros);
      console.log('Resposta da listagem:', response);

      if (response && response.sucesso && response.dados) {
        const items = response.dados.items || response.dados.dados || [];
        const total = response.dados.totalCount || response.dados.totalRegisters || 0;
        const currentPg = response.dados.currentPage || 1;
        const totalPgs = response.dados.totalPages || Math.ceil(total / filtros.pageSize);

        console.log('Items recebidos:', items.length);
        console.log('Total registros:', total);
        console.log('Páginas totais:', totalPgs);
        console.log('Página atual:', currentPg);

        setChamados(items);
        setTotalCount(total);
        setCurrentPage(currentPg);
        setTotalPages(totalPgs);
      } else {
        console.error('Estrutura de resposta inesperada:', response);
        setChamados([]);
        setTotalCount(0);
        setTotalPages(1);
      }
    } catch (err) {
      console.error('Erro ao carregar chamados:', err);
      setChamados([]);
      setTotalCount(0);
      setTotalPages(1);
    }
  };

  const handlePesquisaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltros((prev) => ({ ...prev, pesquisa: e.target.value, currentPage: 1 }));
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFiltros((prev) => ({
      ...prev,
      atendido: value === '' ? undefined : value === 'true',
      currentPage: 1,
    }));
  };

  const handlePageChange = (newPage: number) => {
    setFiltros((prev) => ({ ...prev, currentPage: newPage }));
  };

  const formatarData = (data: string) => {
    try {
      return new Date(data).toLocaleDateString('pt-BR');
    } catch {
      return data;
    }
  };

  const isAtendido = (chamado: any): boolean => {
    return chamado.atendimentoId !== null && chamado.atendimentoId !== undefined;
  };

  const getPessoaAssistidaNome = (chamado: any): string => {
    if (chamado.pessoaAssistida && chamado.pessoaAssistida.nome) {
      return chamado.pessoaAssistida.nome;
    }
    return 'N/A';
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Chamados</h1>
        <button
          onClick={() => navigate('/chamados/novo')}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Novo Chamado
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
              placeholder="Buscar chamados..."
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
              value={filtros.atendido === undefined ? '' : filtros.atendido.toString()}
              onChange={handleStatusChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            >
              <option value="">Todos</option>
              <option value="false">Pendentes</option>
              <option value="true">Atendidos</option>
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
                      Bairro
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data Cadastro
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
                  {chamados && chamados.length > 0 ? (
                    chamados.map((chamado) => (
                      <tr key={chamado.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {chamado.id || 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {getPessoaAssistidaNome(chamado)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {chamado.bairro || 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {chamado.dataCadastro ? formatarData(chamado.dataCadastro) : 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${
                              isAtendido(chamado)
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {isAtendido(chamado) ? 'Atendido' : 'Pendente'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => navigate(`/chamados/${chamado.id}`)}
                            className="text-primary hover:text-blue-600 mr-3"
                          >
                            Ver detalhes
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-6 py-4 text-center text-sm text-gray-500"
                      >
                        Nenhum chamado encontrado
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

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded-md ${
                  page === currentPage
                    ? 'bg-primary text-white'
                    : 'border border-gray-300'
                }`}
              >
                {page}
              </button>
            ))}

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
