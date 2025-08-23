export interface Atendimento {
  id: string;
  pessoaAssistidaId: string;
  pessoaAssistidaNome: string;
  chamadoId: string;
  viaturaId: string;
  viaturaPlaca: string;
  responsavelId: string;
  responsavelNome: string;
  tipoAtendimentoId: string;
  tipoAtendimentoNome: string;
  dataInicio: string;
  dataFim?: string;
  observacao: string;
  status: string;
}

export interface AtendimentoListagemRequest {
  currentPage: number;
  pageSize: number;
  pesquisa?: string;
  status?: string;
}

export interface AtendimentoListagemResponse {
  sucesso: boolean;
  mensagem: string;
  dados: {
    dados: Atendimento[];
    totalCount: number;
    totalRegisters: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
  };
  tipo: string;
}

export interface AtendimentoDTO {
  pessoaAssistidaId: string;
  chamadoId: string;
  viaturaId: string;
  responsavelId: string;
  tipoAtendimentoId: string;
  observacao: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface FiltroAtendimentoDTO {
  currentPage: number;
  pageSize: number;
  pesquisa?: string;
  status?: string;
}