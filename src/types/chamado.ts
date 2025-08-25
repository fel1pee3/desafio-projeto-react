export interface Chamado {
  id: string;
  pessoaAssistidaId: string;
  pessoaAssistidaNome: string;
  bairro: string;
  rua: string;
  numero: string;
  cep: string;
  cidade: string;
  estado: string;
  dataCadastro: string;
  dataRespondido?: string;
  status: string;
  observacao?: string;
}

export interface ChamadoListagemRequest {
  currentPage: number;
  pageSize: number;
  pesquisa?: string;
  atendido?: boolean;
  orderBy?: string; // 'id' ou 'dataCadastro'
  orderDirection?: 'asc' | 'desc'; // 'asc' para crescente
}

export interface ChamadoListagemResponse {
  sucesso: boolean;
  mensagem: string;
  dados: {
    items: Chamado[];
    dados: Chamado[];
    totalCount: number;
    totalRegisters: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
    hasNext?: boolean;
    hasPrevious?: boolean;
  };
  tipo: string;
}

export interface ChamadoDTO {
  pessoaAssistidaId: string;
  bairro: string;
  rua: string;
  numero: string;
  cep: string;
  cidade: string;
  estado: string;
  observacao?: string;
}

export interface SelectOption {
  value: string;
  label: string;
}