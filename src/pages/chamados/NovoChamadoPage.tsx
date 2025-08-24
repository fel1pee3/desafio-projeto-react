import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChamados } from '../../hooks/useChamados';
import { LoadingSpinner } from '../../components/UI/LoadingSpinner';

export const NovoChamadoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    pessoaAssistidaId: '', // Mantém como string
    bairro: '',
    rua: '',
    numero: '',
    cep: '',
    cidade: '',
    estado: 'CE',
    observacao: ''
  });
  
  const [pessoasOptions, setPessoasOptions] = useState<{value: string, label: string}[]>([]);
  const [showPessoasDropdown, setShowPessoasDropdown] = useState(false);
  const [pessoaPesquisa, setPessoaPesquisa] = useState('');
  const [pessoaSelecionada, setPessoaSelecionada] = useState<{id: string, nome: string} | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string>('');
  
  const pessoaTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pessoaInputRef = useRef<HTMLInputElement>(null);
  
  const { criarChamado, buscarPessoasAssistidas, isLoading } = useChamados();
  const navigate = useNavigate();

  useEffect(() => {
    if (pessoaPesquisa.trim() && !pessoaSelecionada) {
      if (pessoaTimeoutRef.current) {
        clearTimeout(pessoaTimeoutRef.current);
      }
      
      pessoaTimeoutRef.current = setTimeout(() => {
        carregarPessoasAssistidas(pessoaPesquisa);
      }, 500);
    } else if (!pessoaPesquisa.trim()) {
      setPessoasOptions([]);
    }

    return () => {
      if (pessoaTimeoutRef.current) {
        clearTimeout(pessoaTimeoutRef.current);
      }
    };
  }, [pessoaPesquisa, pessoaSelecionada]);

  const carregarPessoasAssistidas = async (pesquisa: string) => {
    try {
      const options = await buscarPessoasAssistidas(pesquisa);
      setPessoasOptions(options);
      setShowPessoasDropdown(true);
    } catch (err) {
      console.error('Erro ao carregar pessoas:', err);
      setPessoasOptions([]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    if (submitError) {
      setSubmitError('');
    }
  };

  const handlePessoaSelect = (pessoa: {value: string, label: string}) => {
    setFormData(prev => ({ 
      ...prev, 
      pessoaAssistidaId: pessoa.value
    }));
    
    setPessoaSelecionada({ 
      id: pessoa.value, 
      nome: pessoa.label 
    });
    
    setPessoaPesquisa(pessoa.label);
    setShowPessoasDropdown(false);
    setPessoasOptions([]);
    
    if (validationErrors.pessoaAssistidaId) {
      setValidationErrors(prev => ({ ...prev, pessoaAssistidaId: '' }));
    }
  };

  const handlePessoaInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPessoaPesquisa(value);
    setShowPessoasDropdown(true);
    
    if (pessoaSelecionada && value !== pessoaSelecionada.nome) {
      setPessoaSelecionada(null);
      setFormData(prev => ({ ...prev, pessoaAssistidaId: '' }));
    }
    
    if (validationErrors.pessoaAssistidaId) {
      setValidationErrors(prev => ({ ...prev, pessoaAssistidaId: '' }));
    }
  };

  const handlePessoaInputBlur = () => {
    setTimeout(() => {
      setShowPessoasDropdown(false);
    }, 200);
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (!formData.pessoaAssistidaId) {
      errors.pessoaAssistidaId = 'Pessoa assistida é obrigatória';
    }
    if (!formData.bairro.trim()) {
      errors.bairro = 'Bairro é obrigatório';
    }
    if (!formData.rua.trim()) {
      errors.rua = 'Rua é obrigatória';
    }
    if (!formData.cidade.trim()) {
      errors.cidade = 'Cidade é obrigatória';
    }
    if (!formData.estado.trim()) {
      errors.estado = 'Estado é obrigatório';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    
    if (!validateForm()) return;

    try {
      console.log('Enviando formulário:', formData);
      
      const resultado = await criarChamado(formData);
      console.log('Resultado da criação:', resultado);
      
      if (resultado.sucesso) {
        alert(resultado.mensagem);
        navigate('/chamados');
      } else {
        setSubmitError(resultado.mensagem);
      }
    } catch (err: any) {
      console.error('Erro no submit:', err);
      setSubmitError(err.message || 'Erro ao criar chamado');
    }
  };

  const estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 
    'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];

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
        <h1 className="text-2xl font-bold text-gray-900">Novo Chamado</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-lg font-medium text-gray-900">Informações do Chamado</h2>
          <p className="text-sm text-gray-600 mt-1">Campos marcados com * são obrigatórios</p>
        </div>
        
        <div className="px-6 py-6">
          {submitError && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
              <p className="text-red-800 font-medium">Erro:</p>
              <p className="text-red-700 mt-1">{submitError}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pessoa Assistida */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pessoa Assistida *
              </label>
              <input
                ref={pessoaInputRef}
                type="text"
                placeholder="Digite para buscar pessoa assistida..."
                value={pessoaPesquisa}
                onChange={handlePessoaInputChange}
                onFocus={() => setShowPessoasDropdown(true)}
                onBlur={handlePessoaInputBlur}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary focus:border-primary ${
                  validationErrors.pessoaAssistidaId ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {validationErrors.pessoaAssistidaId && (
                <p className="text-sm text-red-600 mt-1">{validationErrors.pessoaAssistidaId}</p>
              )}

              {/* Campo hidden para manter o ID */}
              <input type="hidden" name="pessoaAssistidaId" value={formData.pessoaAssistidaId} />

              {showPessoasDropdown && pessoasOptions.length > 0 && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto mt-1">
                  {pessoasOptions.map((pessoa) => (
                    <div
                      key={pessoa.value}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => handlePessoaSelect(pessoa)}
                    >
                      {pessoa.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bairro */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bairro *</label>
              <input
                type="text"
                name="bairro"
                value={formData.bairro}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary focus:border-primary ${
                  validationErrors.bairro ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Digite o nome do bairro"
              />
              {validationErrors.bairro && <p className="text-sm text-red-600 mt-1">{validationErrors.bairro}</p>}
            </div>

            {/* Rua */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Rua *</label>
              <input
                type="text"
                name="rua"
                value={formData.rua}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary focus:border-primary ${
                  validationErrors.rua ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Nome da rua"
              />
              {validationErrors.rua && <p className="text-sm text-red-600 mt-1">{validationErrors.rua}</p>}
            </div>

            {/* Número */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Número</label>
              <input
                type="text"
                name="numero"
                value={formData.numero}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="Número ou S/N"
              />
            </div>

            {/* CEP */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CEP</label>
              <input
                type="text"
                name="cep"
                value={formData.cep}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="62000-000"
              />
            </div>

            {/* Cidade */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cidade *</label>
              <input
                type="text"
                name="cidade"
                value={formData.cidade}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary focus:border-primary ${
                  validationErrors.cidade ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Nome da cidade"
              />
              {validationErrors.cidade && <p className="text-sm text-red-600 mt-1">{validationErrors.cidade}</p>}
            </div>

            {/* Estado */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Estado *</label>
              <select
                name="estado"
                value={formData.estado}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary focus:border-primary ${
                  validationErrors.estado ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                <option value="">Selecione o estado</option>
                {estados.map(estado => (
                  <option key={estado} value={estado}>{estado}</option>
                ))}
              </select>
              {validationErrors.estado && <p className="text-sm text-red-600 mt-1">{validationErrors.estado}</p>}
            </div>
          </div>

          {/* Observação */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Observação</label>
            <textarea
              name="observacao"
              value={formData.observacao}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Observações adicionais sobre o chamado..."
            />
          </div>
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => navigate('/chamados')}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 font-medium"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 bg-primary text-white rounded-md hover:bg-blue-600 disabled:opacity-50 font-medium flex items-center"
            >
              {isLoading ? (
                <>
                  <LoadingSpinner />
                  <span className="ml-2">Criando...</span>
                </>
              ) : (
                'Criar Chamado'
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
