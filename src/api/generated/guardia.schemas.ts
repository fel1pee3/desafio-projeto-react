export interface Arquivo {
  id?: number;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  dataEdicao?: string | null;
  /** @nullable */
  usuarioEdicao?: string | null;
  /** @nullable */
  descricao?: string | null;
  /** @nullable */
  nomeArquivo?: string | null;
  /** @nullable */
  extensao?: string | null;
  /** @nullable */
  nomeCompleto?: string | null;
  tamanho?: number;
  ativo?: boolean;
  editavel?: boolean;
  app?: boolean;
}

export interface Atendimento {
  id?: number;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  dataEdicao?: string | null;
  /** @nullable */
  usuarioEdicao?: string | null;
  /** @nullable */
  pessoaAssistidaId?: number | null;
  pessoaAssistida?: PessoaAssistida;
  /** @nullable */
  chamadoId?: number | null;
  chamado?: Chamado;
  viaturaId?: number;
  viatura?: Viatura;
  responsavelId?: number;
  responsavel?: Usuario;
  /** @nullable */
  atendimentoTipoId?: number | null;
  atendimentoTipo?: AtendimentoTipo;
  /** @nullable */
  observacao?: string | null;
  /** @nullable */
  dataInicio?: string | null;
  /** @nullable */
  dataFim?: string | null;
  /** @nullable */
  dataDocumentacao?: string | null;
}

export interface AtendimentoDTO {
  /** @nullable */
  id?: number | null;
  /** @nullable */
  dataUltimaAlteracao?: string | null;
  /** @nullable */
  usuarioUltimaAlteracao?: string | null;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  mensagemModeloId?: number | null;
  /** @nullable */
  responsavelId?: number | null;
  responsavel?: Usuario;
  /** @nullable */
  pessoaAssistidaId?: number | null;
  pessoaAssistida?: PessoaAssistida;
  /** @nullable */
  chamadoId?: number | null;
  chamado?: Chamado;
  /** @nullable */
  viaturaId?: number | null;
  viatura?: Viatura;
  /** @nullable */
  atendimentoTipoId?: number | null;
  atendimentoTipo?: AtendimentoTipo;
  /** @nullable */
  observacao?: string | null;
  /** @nullable */
  dataInicio?: string | null;
  /** @nullable */
  dataFim?: string | null;
  /** @nullable */
  dataDocumentacao?: string | null;
  status?: StatusDTO;
}

export interface AtendimentoTipo {
  id?: number;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  dataEdicao?: string | null;
  /** @nullable */
  usuarioEdicao?: string | null;
  /** @nullable */
  descricao?: string | null;
  ativo?: boolean;
}

export interface AuthAppDTO {
  /** @nullable */
  codigo?: string | null;
  /** @nullable */
  identificador?: string | null;
  /** @nullable */
  marca?: string | null;
  /** @nullable */
  modelo?: string | null;
}

export interface CadastroDTO {
  /** @nullable */
  id?: number | null;
  /** @nullable */
  dataUltimaAlteracao?: string | null;
  /** @nullable */
  usuarioUltimaAlteracao?: string | null;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  descricao?: string | null;
  /** @nullable */
  ativo?: boolean | null;
}

export interface Chamado {
  id?: number;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  dataEdicao?: string | null;
  /** @nullable */
  usuarioEdicao?: string | null;
  pessoaAssistidaId?: number;
  pessoaAssistida?: PessoaAssistida;
  /** @nullable */
  dataRespondido?: string | null;
  /** @nullable */
  latitude?: string | null;
  /** @nullable */
  longitude?: string | null;
  /** @nullable */
  cidade?: string | null;
  /** @nullable */
  estado?: string | null;
  /** @nullable */
  bairro?: string | null;
  /** @nullable */
  rua?: string | null;
  /** @nullable */
  numero?: string | null;
  /** @nullable */
  cep?: string | null;
}

export interface ChamadoAppDTO {
  /** @nullable */
  latitude?: string | null;
  /** @nullable */
  longitude?: string | null;
  authApp?: AuthAppDTO;
}

export interface ChamadoDTO {
  /** @nullable */
  id?: number | null;
  /** @nullable */
  dataUltimaAlteracao?: string | null;
  /** @nullable */
  usuarioUltimaAlteracao?: string | null;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  pessoaAssistidaId?: number | null;
  pessoaAssistida?: PessoaAssistida;
  /** @nullable */
  atendimentoId?: number | null;
  atendimento?: Atendimento;
  dispositivo?: Dispositivo;
  /** @nullable */
  dataRespondido?: string | null;
  enderecoValido?: StatusDTO;
  /** @nullable */
  latitude?: string | null;
  /** @nullable */
  longitude?: string | null;
  status?: StatusDTO;
  /** @nullable */
  cidade?: string | null;
  /** @nullable */
  estado?: string | null;
  /** @nullable */
  bairro?: string | null;
  /** @nullable */
  rua?: string | null;
  /** @nullable */
  numero?: string | null;
  /** @nullable */
  cep?: string | null;
}

export interface ChamadoLocalizacaoDTO {
  /** @nullable */
  id?: number | null;
  /** @nullable */
  dataUltimaAlteracao?: string | null;
  /** @nullable */
  usuarioUltimaAlteracao?: string | null;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  latitude?: string | null;
  /** @nullable */
  longitude?: string | null;
  /** @nullable */
  chamadoId?: number | null;
  chamado?: Chamado;
}

export interface ConfiguracaoDTO {
  /** @nullable */
  logoId?: number | null;
  logo?: Arquivo;
  /** @nullable */
  caminhoArquivo?: string | null;
  /** @nullable */
  cidade?: string | null;
  /** @nullable */
  tempo?: number | null;
}

export interface Contato {
  id?: number;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  dataEdicao?: string | null;
  /** @nullable */
  usuarioEdicao?: string | null;
  /** @nullable */
  nome?: string | null;
  /** @nullable */
  parentesco?: string | null;
  /** @nullable */
  telefone?: string | null;
  pessoaAssistidaId?: number;
  pessoaAssistida?: PessoaAssistida;
}

export interface ContatoDTO {
  /** @nullable */
  id?: number | null;
  /** @nullable */
  dataUltimaAlteracao?: string | null;
  /** @nullable */
  usuarioUltimaAlteracao?: string | null;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  nome?: string | null;
  /** @nullable */
  parentesco?: string | null;
  /** @nullable */
  telefone?: string | null;
  /** @nullable */
  pessoaAssistidaId?: number | null;
  pessoaAssistida?: PessoaAssistida;
}

export interface CreateAtendimentoAnexoDTO {
  /** @nullable */
  id?: number | null;
  /** @nullable */
  dataUltimaAlteracao?: string | null;
  /** @nullable */
  usuarioUltimaAlteracao?: string | null;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  arquivoId?: number[] | null;
  /** @nullable */
  arquivo?: Arquivo[] | null;
  /** @nullable */
  atendimentoId?: number | null;
  atendimento?: Atendimento;
}

export interface CreatePessoaAssistidaAnexoDTO {
  /** @nullable */
  id?: number | null;
  /** @nullable */
  dataUltimaAlteracao?: string | null;
  /** @nullable */
  usuarioUltimaAlteracao?: string | null;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  arquivoId?: number[] | null;
  /** @nullable */
  arquivo?: Arquivo[] | null;
  /** @nullable */
  pessoaAssistidaId?: number | null;
  pessoaAssistida?: PessoaAssistida;
}

export interface Dispositivo {
  id?: number;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  dataEdicao?: string | null;
  /** @nullable */
  usuarioEdicao?: string | null;
  /** @nullable */
  identificador?: string | null;
  /** @nullable */
  marca?: string | null;
  /** @nullable */
  modelo?: string | null;
}

export interface DispositivoDTO {
  /** @nullable */
  id?: number | null;
  /** @nullable */
  dataUltimaAlteracao?: string | null;
  /** @nullable */
  usuarioUltimaAlteracao?: string | null;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  identificador?: string | null;
  /** @nullable */
  marca?: string | null;
  /** @nullable */
  modelo?: string | null;
}

export interface FiltroAtendimentoAnexoDTO {
  /** @nullable */
  pesquisa?: string | null;
  pageSize?: number;
  currentPage?: number;
  /** @nullable */
  ativo?: boolean | null;
  impressao?: boolean;
  /** @nullable */
  arquivoId?: number | null;
  /** @nullable */
  atendimentoId?: number | null;
}

export interface FiltroAtendimentoDTO {
  /** @nullable */
  pesquisa?: string | null;
  pageSize?: number;
  currentPage?: number;
  /** @nullable */
  ativo?: boolean | null;
  impressao?: boolean;
  /** @nullable */
  pessoaAssistidaId?: number | null;
  /** @nullable */
  chamadoId?: number | null;
  /** @nullable */
  viaturaId?: number | null;
  /** @nullable */
  atendimentoTipoId?: number | null;
  /** @nullable */
  dataInicio?: string | null;
  /** @nullable */
  dataFim?: string | null;
  /** @nullable */
  dataDocumentacao?: string | null;
}

export interface FiltroChamadoDTO {
  /** @nullable */
  pesquisa?: string | null;
  pageSize?: number;
  currentPage?: number;
  /** @nullable */
  ativo?: boolean | null;
  impressao?: boolean;
  /** @nullable */
  pessoaAssistidaId?: number | null;
  /** @nullable */
  atendido?: boolean | null;
  /** @nullable */
  bairro?: string | null;
  /** @nullable */
  dataInicio?: string | null;
  /** @nullable */
  dataFim?: string | null;
}

export interface FiltroContatoDTO {
  /** @nullable */
  pesquisa?: string | null;
  pageSize?: number;
  currentPage?: number;
  /** @nullable */
  ativo?: boolean | null;
  impressao?: boolean;
  /** @nullable */
  pessoaAssistidaId?: number | null;
}

export interface FiltroListagemUsuarioDTO {
  pageSize?: number;
  currentPage?: number;
  /** @nullable */
  ativo?: boolean | null;
  impressao?: boolean;
  /** @nullable */
  pesquisa?: string | null;
  /** @nullable */
  perfilAcessoId?: number | null;
  /** @nullable */
  usuarioTipo?: string | null;
}

export interface FiltroMensagemAppDTO {
  /** @nullable */
  pesquisa?: string | null;
  pageSize?: number;
  currentPage?: number;
  /** @nullable */
  ativo?: boolean | null;
  impressao?: boolean;
  authApp?: AuthAppDTO;
}

export interface FiltroMensagemDTO {
  /** @nullable */
  pesquisa?: string | null;
  pageSize?: number;
  currentPage?: number;
  /** @nullable */
  ativo?: boolean | null;
  impressao?: boolean;
  /** @nullable */
  mensagemModeloId?: number | null;
  /** @nullable */
  dispositivoId?: number | null;
  /** @nullable */
  dataInicio?: string | null;
  /** @nullable */
  dataFim?: string | null;
}

export interface FiltroMenuDTO {
  /** @nullable */
  controllerAtual?: string | null;
}

export interface FiltroPaginacaoDTO {
  /** @nullable */
  pesquisa?: string | null;
  pageSize?: number;
  currentPage?: number;
  /** @nullable */
  ativo?: boolean | null;
  impressao?: boolean;
}

export interface FiltroPerfilAcessoDTO {
  /** @nullable */
  pesquisa?: string | null;
  pageSize?: number;
  currentPage?: number;
  /** @nullable */
  ativo?: boolean | null;
  impressao?: boolean;
  /** @nullable */
  usuarioId?: number | null;
}

export interface FiltroPerfilAcessoItemDTO {
  idPerfilAcesso?: number;
  /** @nullable */
  pesquisa?: string | null;
  /** @nullable */
  statusPerfilAcesso?: string | null;
}

export interface FiltroPessoaAssistidaAnexoDTO {
  /** @nullable */
  pesquisa?: string | null;
  pageSize?: number;
  currentPage?: number;
  /** @nullable */
  ativo?: boolean | null;
  impressao?: boolean;
  /** @nullable */
  arquivoId?: number | null;
  /** @nullable */
  pessoaAssistidaId?: number | null;
}

export interface FiltroSelectDTO {
  /** @nullable */
  pesquisa?: string | null;
}

export interface FiltroSelectUsuarioDTO {
  /** @nullable */
  pesquisa?: string | null;
  /** @nullable */
  perfilAcessoId?: number | null;
  /** @nullable */
  usuarioTipo?: string | null;
}

export interface FiltroSelectViaturaDTO {
  /** @nullable */
  pesquisa?: string | null;
  /** @nullable */
  disponivel?: boolean | null;
}

export interface FiltroTokenDTO {
  /** @nullable */
  pesquisa?: string | null;
  pageSize?: number;
  currentPage?: number;
  impressao?: boolean;
  /** @nullable */
  codigo?: string | null;
  /** @nullable */
  pessoaAssistidaId?: number | null;
  /** @nullable */
  dispositivoId?: number | null;
  /** @nullable */
  ativo?: boolean | null;
}

export interface FiltroViaturaDespachoDTO {
  /** @nullable */
  pesquisa?: string | null;
  pageSize?: number;
  currentPage?: number;
  /** @nullable */
  ativo?: boolean | null;
  impressao?: boolean;
  /** @nullable */
  viaturaId?: number | null;
  /** @nullable */
  responsavelId?: number | null;
  /** @nullable */
  dataInicio?: string | null;
  /** @nullable */
  dataFim?: string | null;
  /** @nullable */
  observacao?: string | null;
}

export interface FiltroViaturaDTO {
  /** @nullable */
  pesquisa?: string | null;
  pageSize?: number;
  currentPage?: number;
  /** @nullable */
  ativo?: boolean | null;
  impressao?: boolean;
  /** @nullable */
  manutencao?: boolean | null;
}

export interface InformativoDTO {
  /** @nullable */
  id?: number | null;
  /** @nullable */
  dataUltimaAlteracao?: string | null;
  /** @nullable */
  usuarioUltimaAlteracao?: string | null;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  titulo?: string | null;
  /** @nullable */
  conteudo?: string | null;
  ativo?: boolean;
}

export interface LogAcessoDTO {
  /** @nullable */
  id?: number | null;
  /** @nullable */
  dataUltimaAlteracao?: string | null;
  /** @nullable */
  usuarioUltimaAlteracao?: string | null;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  descricao?: string | null;
  /** @nullable */
  tipo?: string | null;
  /** @nullable */
  dados?: string | null;
}

export interface LoginInputDTO {
  /** @nullable */
  email?: string | null;
  /** @nullable */
  senha?: string | null;
}

export interface MensagemDTO {
  /** @nullable */
  id?: number | null;
  /** @nullable */
  dataUltimaAlteracao?: string | null;
  /** @nullable */
  usuarioUltimaAlteracao?: string | null;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  mensagemModeloId?: number | null;
  /** @nullable */
  dispositivoId?: number | null;
  dispositivo?: Dispositivo;
  /** @nullable */
  dataEnvio?: string | null;
  /** @nullable */
  dataRecebimento?: string | null;
  /** @nullable */
  dataVisualizacao?: string | null;
  /** @nullable */
  titulo?: string | null;
  /** @nullable */
  descricao?: string | null;
  /** @nullable */
  tipo?: string | null;
}

export interface MensagemModeloDTO {
  /** @nullable */
  id?: number | null;
  /** @nullable */
  dataUltimaAlteracao?: string | null;
  /** @nullable */
  usuarioUltimaAlteracao?: string | null;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  titulo?: string | null;
  /** @nullable */
  descricao?: string | null;
  /** @nullable */
  tipo?: string | null;
}

export interface PerfilAcesso {
  id?: number;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  dataEdicao?: string | null;
  /** @nullable */
  usuarioEdicao?: string | null;
  /** @nullable */
  descricao?: string | null;
  ativo?: boolean;
}

export interface PerfilAcessoDTO {
  /** @nullable */
  id?: number | null;
  /** @nullable */
  dataUltimaAlteracao?: string | null;
  /** @nullable */
  usuarioUltimaAlteracao?: string | null;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  descricao?: string | null;
  /** @nullable */
  usuariosPerfilAcesso?: string[] | null;
  /** @nullable */
  qtdUsuariosVinculados?: number | null;
  /** @nullable */
  ativo?: boolean | null;
}

export interface PerfilAcessoItemDTO {
  /** @nullable */
  id?: number | null;
  /** @nullable */
  dataUltimaAlteracao?: string | null;
  /** @nullable */
  usuarioUltimaAlteracao?: string | null;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  idPerfilAcesso?: number;
  idPerfilFuncionalidade?: number;
  /** @nullable */
  acessos?: string | null;
  ativo?: boolean;
}

export interface PessoaAppDTO {
  /** @nullable */
  nome?: string | null;
  /** @nullable */
  cpf?: string | null;
  /** @nullable */
  telefone?: string | null;
  /** @nullable */
  email?: string | null;
  /** @nullable */
  cep?: string | null;
  /** @nullable */
  rua?: string | null;
  /** @nullable */
  bairro?: string | null;
  /** @nullable */
  cidade?: string | null;
  /** @nullable */
  estado?: string | null;
  authApp?: AuthAppDTO;
  /** @nullable */
  contatos?: Contato[] | null;
}

export interface PessoaAssistida {
  id?: number;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  dataEdicao?: string | null;
  /** @nullable */
  usuarioEdicao?: string | null;
  /** @nullable */
  nome?: string | null;
  /** @nullable */
  cpf?: string | null;
  /** @nullable */
  telefone?: string | null;
  /** @nullable */
  email?: string | null;
  /** @nullable */
  cep?: string | null;
  /** @nullable */
  rua?: string | null;
  /** @nullable */
  bairro?: string | null;
  /** @nullable */
  cidade?: string | null;
  /** @nullable */
  estado?: string | null;
  ativo?: boolean;
}

export interface PessoaAssistidaDTO {
  /** @nullable */
  id?: number | null;
  /** @nullable */
  dataUltimaAlteracao?: string | null;
  /** @nullable */
  usuarioUltimaAlteracao?: string | null;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  nome?: string | null;
  /** @nullable */
  cpf?: string | null;
  /** @nullable */
  telefone?: string | null;
  /** @nullable */
  email?: string | null;
  /** @nullable */
  cep?: string | null;
  /** @nullable */
  rua?: string | null;
  /** @nullable */
  bairro?: string | null;
  /** @nullable */
  cidade?: string | null;
  /** @nullable */
  estado?: string | null;
  ativo?: boolean;
}

export interface StatusDTO {
  /** @nullable */
  value?: string | null;
  /** @nullable */
  label?: string | null;
  /** @nullable */
  type?: string | null;
}

export interface TokenDTO {
  /** @nullable */
  id?: number | null;
  /** @nullable */
  dataUltimaAlteracao?: string | null;
  /** @nullable */
  usuarioUltimaAlteracao?: string | null;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  codigo?: string | null;
  /** @nullable */
  pessoaAssistidaId?: number | null;
  pessoaAssistida?: PessoaAssistida;
  /** @nullable */
  dispositivoId?: number | null;
  dispositivo?: Dispositivo;
  /** @nullable */
  ativo?: boolean | null;
}

export interface UpdateUsuarioSenhaConfirmacaoDTO {
  /** @nullable */
  senhaAtual?: string | null;
  /** @nullable */
  senha?: string | null;
  /** @nullable */
  confirmacaoSenha?: string | null;
}

export interface UpdateUsuarioSenhaDTO {
  /** @nullable */
  senha?: string | null;
  /** @nullable */
  confirmacaoSenha?: string | null;
}

export interface Usuario {
  id?: number;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  dataEdicao?: string | null;
  /** @nullable */
  usuarioEdicao?: string | null;
  /** @nullable */
  nome?: string | null;
  /** @nullable */
  email?: string | null;
  ativo?: boolean;
  /** @nullable */
  senha?: string | null;
  /** @nullable */
  usuarioTipo?: string | null;
  /** @nullable */
  perfilAcessoId?: number | null;
  perfilAcesso?: PerfilAcesso;
}

export interface UsuarioDTO {
  /** @nullable */
  id?: number | null;
  /** @nullable */
  dataUltimaAlteracao?: string | null;
  /** @nullable */
  usuarioUltimaAlteracao?: string | null;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  nome?: string | null;
  /** @nullable */
  email?: string | null;
  /** @nullable */
  ativo?: boolean | null;
  /** @nullable */
  perfilAcessoId?: number | null;
  perfilAcesso?: PerfilAcesso;
  /** @nullable */
  descricaoPerfilAcesso?: string | null;
  /** @nullable */
  senha?: string | null;
  /** @nullable */
  confirmacaoSenha?: string | null;
  /** @nullable */
  usuarioTipo?: string | null;
}

export interface Viatura {
  id?: number;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  dataEdicao?: string | null;
  /** @nullable */
  usuarioEdicao?: string | null;
  /** @nullable */
  identificador?: string | null;
  /** @nullable */
  placa?: string | null;
  /** @nullable */
  observacao?: string | null;
  manutencao?: boolean;
}

export interface ViaturaDespacho {
  id?: number;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  dataEdicao?: string | null;
  /** @nullable */
  usuarioEdicao?: string | null;
  /** @nullable */
  viaturaId?: number | null;
  viatura?: Viatura;
  /** @nullable */
  responsavelId?: number | null;
  responsavel?: Usuario;
  /** @nullable */
  dataInicio?: string | null;
  /** @nullable */
  dataFim?: string | null;
  /** @nullable */
  observacao?: string | null;
}

export interface ViaturaDespachoDTO {
  /** @nullable */
  id?: number | null;
  /** @nullable */
  dataUltimaAlteracao?: string | null;
  /** @nullable */
  usuarioUltimaAlteracao?: string | null;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  viaturaId?: number | null;
  viatura?: Viatura;
  /** @nullable */
  responsavelId?: number | null;
  responsavel?: Usuario;
  /** @nullable */
  dataInicio?: string | null;
  /** @nullable */
  dataFim?: string | null;
  /** @nullable */
  observacao?: string | null;
}

export interface ViaturaDTO {
  /** @nullable */
  id?: number | null;
  /** @nullable */
  dataUltimaAlteracao?: string | null;
  /** @nullable */
  usuarioUltimaAlteracao?: string | null;
  dataCadastro?: string;
  /** @nullable */
  usuarioCadastro?: string | null;
  /** @nullable */
  identificador?: string | null;
  /** @nullable */
  placa?: string | null;
  /** @nullable */
  observacao?: string | null;
  /** @nullable */
  manutencao?: boolean | null;
  viaturaDespacho?: ViaturaDespacho;
  atendimento?: Atendimento;
  status?: StatusDTO;
}

export type GetApiAtendimentoFinalizarParams = {
AtendimentoId?: number;
};

export type GetApiAtendimentoInserirDocumentacaoParams = {
atendimentoId?: number;
};

export type PostApiAtendimentoTipoSelectParams = {
Pesquisa?: string;
};

export type GetApiChamadoRejeitrarParams = {
ChamadoId?: number;
};

export type GetApiViaturaDespachoFinalizarParams = {
id?: number;
};

