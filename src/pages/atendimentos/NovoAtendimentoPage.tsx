import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtendimentos } from '../../hooks/useAtendimentos';
import { LoadingSpinner } from '../../components/UI/LoadingSpinner';

interface AtendimentoForm {
  pessoaAssistidaId: string;
  chamadoId: string;
  viaturaId: string;
  responsavelId: string;
  tipoAtendimentoId: string;
  observacao: string;
}

export const NovoAtendimentoPage: React.FC = () => {
  const [formData, setFormData] = useState<AtendimentoForm>({
    pessoaAssistidaId: '1',
    chamadoId: '1',
    viaturaId: '1',
    responsavelId: '2', // ID do usuário admin
    tipoAtendimentoId: '1',
    observacao: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const { criarAtendimento, isLoading, error } = useAtendimentos();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Limpar erro quando o usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.pessoaAssistidaId.trim()) {
      newErrors.pessoaAssistidaId = 'Pessoa assistida é obrigatória';
    }

    if (!formData.chamadoId.trim()) {
      newErrors.chamadoId = 'Chamado é obrigatório';
    }

    if (!formData.viaturaId.trim()) {
      newErrors.viaturaId = 'Viatura é obrigatória';
    }

    if (!formData.responsavelId.trim()) {
      newErrors.responsavelId = 'Responsável é obrigatório';
    }

    if (!formData.tipoAtendimentoId.trim()) {
      newErrors.tipoAtendimentoId = 'Tipo de atendimento é obrigatório';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log('Dados a serem enviados:', formData);

    try {
      await criarAtendimento(formData);
      alert('Atendimento criado com sucesso!');
      navigate('/atendimentos');
    } catch (err) {
      console.error('Erro ao criar atendimento:', err);
      alert('Erro ao criar atendimento. Verifique o console para mais detalhes.');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate('/atendimentos')}
          className="mr-4 text-gray-600 hover:text-gray-800 flex items-center"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para lista
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Novo Atendimento</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-lg font-medium text-gray-900">Informações do Atendimento</h2>
          <p className="text-sm text-gray-600 mt-1">Campos marcados com * são obrigatórios</p>
        </div>
        
        <div className="px-6 py-6">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
              <p className="text-red-800 font-medium">Erro:</p>
              <p className="text-red-700 mt-1">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pessoa Assistida */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pessoa Assistida *
              </label>
              <select
                name="pessoaAssistidaId"
                value={formData.pessoaAssistidaId}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary focus:border-primary ${
                  errors.pessoaAssistidaId ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                <option value="1">Dimas (ID: 1)</option>
                <option value="2">Maria Silva (ID: 2)</option>
              </select>
              {errors.pessoaAssistidaId && (
                <p className="text-sm text-red-600 mt-1">{errors.pessoaAssistidaId}</p>
              )}
            </div>

            {/* Chamado */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chamado *
              </label>
              <select
                name="chamadoId"
                value={formData.chamadoId}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary focus:border-primary ${
                  errors.chamadoId ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                <option value="1">Chamado #1 - Centro</option>
                <option value="2">Chamado #2 - Jardim</option>
                <option value="3">Chamado #3 - Vila</option>
              </select>
              {errors.chamadoId && (
                <p className="text-sm text-red-600 mt-1">{errors.chamadoId}</p>
              )}
            </div>

            {/* Viatura */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Viatura *
              </label>
              <select
                name="viaturaId"
                value={formData.viaturaId}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary focus:border-primary ${
                  errors.viaturaId ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                <option value="1">OPP-7I72 - Viatura Centro</option>
                <option value="2">ABC-1234 - Viatura Jardim</option>
              </select>
              {errors.viaturaId && (
                <p className="text-sm text-red-600 mt-1">{errors.viaturaId}</p>
              )}
            </div>

            {/* Responsável */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Responsável *
              </label>
              <select
                name="responsavelId"
                value={formData.responsavelId}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary focus:border-primary ${
                  errors.responsavelId ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                <option value="2">Administrador</option>
                <option value="3">Operador 1</option>
                <option value="4">Operador 2</option>
              </select>
              {errors.responsavelId && (
                <p className="text-sm text-red-600 mt-1">{errors.responsavelId}</p>
              )}
            </div>

            {/* Tipo de Atendimento */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Atendimento *
              </label>
              <select
                name="tipoAtendimentoId"
                value={formData.tipoAtendimentoId}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary focus:border-primary ${
                  errors.tipoAtendimentoId ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                <option value="1">Atendimento Médico</option>
                <option value="2">Atendimento Social</option>
                <option value="3">Atendimento Emergencial</option>
              </select>
              {errors.tipoAtendimentoId && (
                <p className="text-sm text-red-600 mt-1">{errors.tipoAtendimentoId}</p>
              )}
            </div>
          </div>

          {/* Observação */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Observação
            </label>
            <textarea
              name="observacao"
              value={formData.observacao}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Observações adicionais sobre o atendimento..."
            />
          </div>
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => navigate('/atendimentos')}
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
                'Criar Atendimento'
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Informações de debug */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-medium text-gray-700 mb-2">Informações para teste:</h3>
        <p className="text-sm text-gray-600">
          • Valores pré-selecionados para demonstração<br/>
          • Em produção, implementar busca nos selects<br/>
          • O sistema tentará criar o atendimento com esses dados
        </p>
      </div>
    </div>
  );
};