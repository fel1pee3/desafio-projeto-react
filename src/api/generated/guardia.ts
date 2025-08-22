import type {
  AtendimentoDTO,
  AuthAppDTO,
  CadastroDTO,
  ChamadoAppDTO,
  ChamadoDTO,
  ChamadoLocalizacaoDTO,
  ConfiguracaoDTO,
  ContatoDTO,
  CreateAtendimentoAnexoDTO,
  CreatePessoaAssistidaAnexoDTO,
  DispositivoDTO,
  FiltroAtendimentoAnexoDTO,
  FiltroAtendimentoDTO,
  FiltroChamadoDTO,
  FiltroContatoDTO,
  FiltroListagemUsuarioDTO,
  FiltroMensagemAppDTO,
  FiltroMensagemDTO,
  FiltroMenuDTO,
  FiltroPaginacaoDTO,
  FiltroPerfilAcessoDTO,
  FiltroPerfilAcessoItemDTO,
  FiltroPessoaAssistidaAnexoDTO,
  FiltroSelectDTO,
  FiltroSelectUsuarioDTO,
  FiltroSelectViaturaDTO,
  FiltroTokenDTO,
  FiltroViaturaDTO,
  FiltroViaturaDespachoDTO,
  GetApiAtendimentoFinalizarParams,
  GetApiAtendimentoInserirDocumentacaoParams,
  GetApiChamadoRejeitrarParams,
  GetApiViaturaDespachoFinalizarParams,
  InformativoDTO,
  LogAcessoDTO,
  LoginInputDTO,
  MensagemDTO,
  MensagemModeloDTO,
  PerfilAcessoDTO,
  PerfilAcessoItemDTO,
  PessoaAppDTO,
  PessoaAssistidaDTO,
  PostApiAtendimentoTipoSelectParams,
  TokenDTO,
  UpdateUsuarioSenhaConfirmacaoDTO,
  UpdateUsuarioSenhaDTO,
  UsuarioDTO,
  ViaturaDTO,
  ViaturaDespachoDTO
} from './guardia.schemas';

import { customInstance } from '../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];


  export const getGuardaMariaAPI = () => {
const getApp = (
    
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/app`, method: 'GET'
    },
      options);
    }
  
const postApiArquivo = (
    
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Arquivo`, method: 'POST'
    },
      options);
    }
  
const getApiArquivoDownloadIdArquivo = (
    idArquivo: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Arquivo/download/${idArquivo}`, method: 'GET'
    },
      options);
    }
  
const postApiAtendimentoListagem = (
    filtroAtendimentoDTO: FiltroAtendimentoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Atendimento/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroAtendimentoDTO
    },
      options);
    }
  
const getApiAtendimentoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Atendimento/${id}`, method: 'GET'
    },
      options);
    }
  
const deleteApiAtendimentoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Atendimento/${id}`, method: 'DELETE'
    },
      options);
    }
  
const postApiAtendimento = (
    atendimentoDTO: AtendimentoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Atendimento`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: atendimentoDTO
    },
      options);
    }
  
const getApiAtendimentoFinalizar = (
    params?: GetApiAtendimentoFinalizarParams,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Atendimento/Finalizar`, method: 'GET',
        params
    },
      options);
    }
  
const getApiAtendimentoInserirDocumentacao = (
    params?: GetApiAtendimentoInserirDocumentacaoParams,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Atendimento/InserirDocumentacao`, method: 'GET',
        params
    },
      options);
    }
  
const postApiAtendimentoAnexoListagem = (
    filtroAtendimentoAnexoDTO: FiltroAtendimentoAnexoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/AtendimentoAnexo/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroAtendimentoAnexoDTO
    },
      options);
    }
  
const getApiAtendimentoAnexoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/AtendimentoAnexo/${id}`, method: 'GET'
    },
      options);
    }
  
const deleteApiAtendimentoAnexoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/AtendimentoAnexo/${id}`, method: 'DELETE'
    },
      options);
    }
  
const postApiAtendimentoAnexo = (
    createAtendimentoAnexoDTO: CreateAtendimentoAnexoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/AtendimentoAnexo`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createAtendimentoAnexoDTO
    },
      options);
    }
  
const postApiAtendimentoTipoListagem = (
    filtroPaginacaoDTO: FiltroPaginacaoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/AtendimentoTipo/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroPaginacaoDTO
    },
      options);
    }
  
const getApiAtendimentoTipoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/AtendimentoTipo/${id}`, method: 'GET'
    },
      options);
    }
  
const deleteApiAtendimentoTipoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/AtendimentoTipo/${id}`, method: 'DELETE'
    },
      options);
    }
  
const postApiAtendimentoTipo = (
    cadastroDTO: CadastroDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/AtendimentoTipo`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: cadastroDTO
    },
      options);
    }
  
const putApiAtendimentoTipo = (
    cadastroDTO: CadastroDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/AtendimentoTipo`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: cadastroDTO
    },
      options);
    }
  
const postApiAtendimentoTipoSelect = (
    params?: PostApiAtendimentoTipoSelectParams,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/AtendimentoTipo/select`, method: 'POST',
        params
    },
      options);
    }
  
const getApiAuthLogado = (
    
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Auth/Logado`, method: 'GET'
    },
      options);
    }
  
const putApiAuthLogin = (
    loginInputDTO: LoginInputDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Auth/login`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: loginInputDTO
    },
      options);
    }
  
const postIntegracaoAuthApp = (
    authAppDTO: AuthAppDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/integracao/AuthApp`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: authAppDTO
    },
      options);
    }
  
const postApiChamadoListagem = (
    filtroChamadoDTO: FiltroChamadoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Chamado/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroChamadoDTO
    },
      options);
    }
  
const postApiChamadoMapa = (
    filtroChamadoDTO: FiltroChamadoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Chamado/mapa`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroChamadoDTO
    },
      options);
    }
  
const getApiChamadoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Chamado/${id}`, method: 'GET'
    },
      options);
    }
  
const deleteApiChamadoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Chamado/${id}`, method: 'DELETE'
    },
      options);
    }
  
const postApiChamado = (
    chamadoDTO: ChamadoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Chamado`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: chamadoDTO
    },
      options);
    }
  
const getApiChamadoRejeitrar = (
    params?: GetApiChamadoRejeitrarParams,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Chamado/Rejeitrar`, method: 'GET',
        params
    },
      options);
    }
  
const postApiChamadoSelectBairro = (
    filtroSelectDTO: FiltroSelectDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Chamado/select/bairro`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroSelectDTO
    },
      options);
    }
  
const postIntegracaoChamadoApp = (
    chamadoAppDTO: ChamadoAppDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/integracao/ChamadoApp`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: chamadoAppDTO
    },
      options);
    }
  
const postApiChamadoLocalizacaoListagem = (
    filtroPaginacaoDTO: FiltroPaginacaoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/ChamadoLocalizacao/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroPaginacaoDTO
    },
      options);
    }
  
const getApiChamadoLocalizacaoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/ChamadoLocalizacao/${id}`, method: 'GET'
    },
      options);
    }
  
const deleteApiChamadoLocalizacaoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/ChamadoLocalizacao/${id}`, method: 'DELETE'
    },
      options);
    }
  
const postApiChamadoLocalizacao = (
    chamadoLocalizacaoDTO: ChamadoLocalizacaoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/ChamadoLocalizacao`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: chamadoLocalizacaoDTO
    },
      options);
    }
  
const putApiChamadoLocalizacao = (
    chamadoLocalizacaoDTO: ChamadoLocalizacaoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/ChamadoLocalizacao`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: chamadoLocalizacaoDTO
    },
      options);
    }
  
const getApiConfiguracaoLogo = (
    
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Configuracao/logo`, method: 'GET'
    },
      options);
    }
  
const getApiConfiguracao = (
    
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Configuracao`, method: 'GET'
    },
      options);
    }
  
const postApiConfiguracao = (
    configuracaoDTO: ConfiguracaoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Configuracao`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: configuracaoDTO
    },
      options);
    }
  
const postApiContatoListagem = (
    filtroContatoDTO: FiltroContatoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Contato/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroContatoDTO
    },
      options);
    }
  
const getApiContatoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Contato/${id}`, method: 'GET'
    },
      options);
    }
  
const deleteApiContatoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Contato/${id}`, method: 'DELETE'
    },
      options);
    }
  
const postApiContato = (
    contatoDTO: ContatoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Contato`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: contatoDTO
    },
      options);
    }
  
const putApiContato = (
    contatoDTO: ContatoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Contato`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: contatoDTO
    },
      options);
    }
  
const postApiContatoSelect = (
    filtroSelectDTO: FiltroSelectDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Contato/select`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroSelectDTO
    },
      options);
    }
  
const postApiDispositivoListagem = (
    filtroPaginacaoDTO: FiltroPaginacaoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Dispositivo/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroPaginacaoDTO
    },
      options);
    }
  
const getApiDispositivoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Dispositivo/${id}`, method: 'GET'
    },
      options);
    }
  
const deleteApiDispositivoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Dispositivo/${id}`, method: 'DELETE'
    },
      options);
    }
  
const postApiDispositivo = (
    dispositivoDTO: DispositivoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Dispositivo`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: dispositivoDTO
    },
      options);
    }
  
const putApiDispositivo = (
    dispositivoDTO: DispositivoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Dispositivo`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: dispositivoDTO
    },
      options);
    }
  
const postApiInformativoListagem = (
    filtroPaginacaoDTO: FiltroPaginacaoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Informativo/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroPaginacaoDTO
    },
      options);
    }
  
const getApiInformativoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Informativo/${id}`, method: 'GET'
    },
      options);
    }
  
const deleteApiInformativoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Informativo/${id}`, method: 'DELETE'
    },
      options);
    }
  
const postApiInformativo = (
    informativoDTO: InformativoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Informativo`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: informativoDTO
    },
      options);
    }
  
const putApiInformativo = (
    informativoDTO: InformativoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Informativo`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: informativoDTO
    },
      options);
    }
  
const postIntegracaoInformativoIntegracaoListagem = (
    filtroPaginacaoDTO: FiltroPaginacaoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/integracao/InformativoIntegracao/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroPaginacaoDTO
    },
      options);
    }
  
const postApiLogAcesso = (
    logAcessoDTO: LogAcessoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/LogAcesso`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: logAcessoDTO
    },
      options);
    }
  
const postApiMensagemListagem = (
    filtroMensagemDTO: FiltroMensagemDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Mensagem/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroMensagemDTO
    },
      options);
    }
  
const getApiMensagemId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Mensagem/${id}`, method: 'GET'
    },
      options);
    }
  
const deleteApiMensagemId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Mensagem/${id}`, method: 'DELETE'
    },
      options);
    }
  
const postApiMensagem = (
    mensagemDTO: MensagemDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Mensagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: mensagemDTO
    },
      options);
    }
  
const postIntegracaoMensagemAppListagem = (
    filtroMensagemAppDTO: FiltroMensagemAppDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/integracao/MensagemApp/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroMensagemAppDTO
    },
      options);
    }
  
const postApiMensagemModeloListagem = (
    filtroPaginacaoDTO: FiltroPaginacaoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/MensagemModelo/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroPaginacaoDTO
    },
      options);
    }
  
const getApiMensagemModeloId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/MensagemModelo/${id}`, method: 'GET'
    },
      options);
    }
  
const deleteApiMensagemModeloId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/MensagemModelo/${id}`, method: 'DELETE'
    },
      options);
    }
  
const postApiMensagemModelo = (
    mensagemModeloDTO: MensagemModeloDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/MensagemModelo`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: mensagemModeloDTO
    },
      options);
    }
  
const putApiMensagemModelo = (
    mensagemModeloDTO: MensagemModeloDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/MensagemModelo`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: mensagemModeloDTO
    },
      options);
    }
  
const postApiMensagemModeloSelect = (
    filtroSelectDTO: FiltroSelectDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/MensagemModelo/select`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroSelectDTO
    },
      options);
    }
  
const postApiMenu = (
    filtroMenuDTO: FiltroMenuDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Menu`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroMenuDTO
    },
      options);
    }
  
const getApiPerfilAcessoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PerfilAcesso/${id}`, method: 'GET'
    },
      options);
    }
  
const deleteApiPerfilAcessoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PerfilAcesso/${id}`, method: 'DELETE'
    },
      options);
    }
  
const postApiPerfilAcessoListagem = (
    filtroPerfilAcessoDTO: FiltroPerfilAcessoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PerfilAcesso/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroPerfilAcessoDTO
    },
      options);
    }
  
const postApiPerfilAcesso = (
    perfilAcessoDTO: PerfilAcessoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PerfilAcesso`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: perfilAcessoDTO
    },
      options);
    }
  
const getApiPerfilAcessoSelect = (
    
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PerfilAcesso/select`, method: 'GET'
    },
      options);
    }
  
const getApiPerfilAcessoItemId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PerfilAcessoItem/${id}`, method: 'GET'
    },
      options);
    }
  
const getApiPerfilAcessoItem = (
    
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PerfilAcessoItem`, method: 'GET'
    },
      options);
    }
  
const postApiPerfilAcessoItem = (
    perfilAcessoItemDTO: PerfilAcessoItemDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PerfilAcessoItem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: perfilAcessoItemDTO
    },
      options);
    }
  
const getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId = (
    perfilId: number,
    funcionalidadeId: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PerfilAcessoItem/perfil/${perfilId}/funcionalidade/${funcionalidadeId}`, method: 'GET'
    },
      options);
    }
  
const postApiPerfilAcessoItemPerfil = (
    filtroPerfilAcessoItemDTO: FiltroPerfilAcessoItemDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PerfilAcessoItem/perfil`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroPerfilAcessoItemDTO
    },
      options);
    }
  
const putApiPerfilAcessoItemLiberarAcessosPerfilIdPerfil = (
    idPerfil: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PerfilAcessoItem/LiberarAcessos/perfil/${idPerfil}`, method: 'PUT'
    },
      options);
    }
  
const deleteApiPerfilAcessoItemBloquearAcessosPerfilIdPerfil = (
    idPerfil: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PerfilAcessoItem/BloquearAcessos/perfil/${idPerfil}`, method: 'DELETE'
    },
      options);
    }
  
const getApiPerfilAcessoItemAcessoFuncionalidade = (
    funcionalidade: string,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<string[]>(
      {url: `/api/PerfilAcessoItem/Acesso/${funcionalidade}`, method: 'GET'
    },
      options);
    }
  
const getIntegracaoPessoaAppTokenIdentificador = (
    token: string,
    identificador: string,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/integracao/PessoaApp/${token}/${identificador}`, method: 'GET'
    },
      options);
    }
  
const postIntegracaoPessoaApp = (
    pessoaAppDTO: PessoaAppDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/integracao/PessoaApp`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: pessoaAppDTO
    },
      options);
    }
  
const postApiPessoaAssistidaListagem = (
    filtroPaginacaoDTO: FiltroPaginacaoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PessoaAssistida/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroPaginacaoDTO
    },
      options);
    }
  
const getApiPessoaAssistidaId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PessoaAssistida/${id}`, method: 'GET'
    },
      options);
    }
  
const deleteApiPessoaAssistidaId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PessoaAssistida/${id}`, method: 'DELETE'
    },
      options);
    }
  
const postApiPessoaAssistida = (
    pessoaAssistidaDTO: PessoaAssistidaDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PessoaAssistida`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: pessoaAssistidaDTO
    },
      options);
    }
  
const putApiPessoaAssistida = (
    pessoaAssistidaDTO: PessoaAssistidaDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PessoaAssistida`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: pessoaAssistidaDTO
    },
      options);
    }
  
const postApiPessoaAssistidaSelect = (
    filtroSelectDTO: FiltroSelectDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PessoaAssistida/Select`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroSelectDTO
    },
      options);
    }
  
const postApiPessoaAssistidaAnexoListagem = (
    filtroPessoaAssistidaAnexoDTO: FiltroPessoaAssistidaAnexoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PessoaAssistidaAnexo/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroPessoaAssistidaAnexoDTO
    },
      options);
    }
  
const getApiPessoaAssistidaAnexoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PessoaAssistidaAnexo/${id}`, method: 'GET'
    },
      options);
    }
  
const deleteApiPessoaAssistidaAnexoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PessoaAssistidaAnexo/${id}`, method: 'DELETE'
    },
      options);
    }
  
const postApiPessoaAssistidaAnexo = (
    createPessoaAssistidaAnexoDTO: CreatePessoaAssistidaAnexoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/PessoaAssistidaAnexo`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createPessoaAssistidaAnexoDTO
    },
      options);
    }
  
const getApiSessaoValidar = (
    
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Sessao/validar`, method: 'GET'
    },
      options);
    }
  
const postApiTokenListagem = (
    filtroTokenDTO: FiltroTokenDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Token/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroTokenDTO
    },
      options);
    }
  
const getApiTokenId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Token/${id}`, method: 'GET'
    },
      options);
    }
  
const deleteApiTokenId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Token/${id}`, method: 'DELETE'
    },
      options);
    }
  
const postApiToken = (
    tokenDTO: TokenDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Token`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: tokenDTO
    },
      options);
    }
  
const putApiToken = (
    tokenDTO: TokenDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Token`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: tokenDTO
    },
      options);
    }
  
const postApiUsuarioListagem = (
    filtroListagemUsuarioDTO: FiltroListagemUsuarioDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Usuario/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroListagemUsuarioDTO
    },
      options);
    }
  
const getApiUsuarioId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Usuario/${id}`, method: 'GET'
    },
      options);
    }
  
const deleteApiUsuarioId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Usuario/${id}`, method: 'DELETE'
    },
      options);
    }
  
const postApiUsuario = (
    usuarioDTO: UsuarioDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Usuario`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: usuarioDTO
    },
      options);
    }
  
const putApiUsuario = (
    usuarioDTO: UsuarioDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Usuario`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: usuarioDTO
    },
      options);
    }
  
const patchApiUsuarioAlterarSenhaId = (
    id: number,
    updateUsuarioSenhaDTO: UpdateUsuarioSenhaDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Usuario/AlterarSenha/${id}`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: updateUsuarioSenhaDTO
    },
      options);
    }
  
const putApiUsuarioAlterarSenhaConfirmacao = (
    updateUsuarioSenhaConfirmacaoDTO: UpdateUsuarioSenhaConfirmacaoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Usuario/AlterarSenhaConfirmacao`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: updateUsuarioSenhaConfirmacaoDTO
    },
      options);
    }
  
const postApiUsuarioSelect = (
    filtroSelectUsuarioDTO: FiltroSelectUsuarioDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Usuario/Select`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroSelectUsuarioDTO
    },
      options);
    }
  
const postApiUsuarioImpressao = (
    filtroListagemUsuarioDTO: FiltroListagemUsuarioDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Usuario/Impressao`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroListagemUsuarioDTO
    },
      options);
    }
  
const postApiViaturaListagem = (
    filtroViaturaDTO: FiltroViaturaDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Viatura/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroViaturaDTO
    },
      options);
    }
  
const getApiViaturaId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Viatura/${id}`, method: 'GET'
    },
      options);
    }
  
const deleteApiViaturaId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Viatura/${id}`, method: 'DELETE'
    },
      options);
    }
  
const postApiViatura = (
    viaturaDTO: ViaturaDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Viatura`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: viaturaDTO
    },
      options);
    }
  
const putApiViatura = (
    viaturaDTO: ViaturaDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Viatura`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: viaturaDTO
    },
      options);
    }
  
const postApiViaturaSelect = (
    filtroSelectViaturaDTO: FiltroSelectViaturaDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/Viatura/Select`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroSelectViaturaDTO
    },
      options);
    }
  
const postApiViaturaDespachoListagem = (
    filtroViaturaDespachoDTO: FiltroViaturaDespachoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/ViaturaDespacho/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroViaturaDespachoDTO
    },
      options);
    }
  
const getApiViaturaDespachoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/ViaturaDespacho/${id}`, method: 'GET'
    },
      options);
    }
  
const deleteApiViaturaDespachoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/ViaturaDespacho/${id}`, method: 'DELETE'
    },
      options);
    }
  
const postApiViaturaDespacho = (
    viaturaDespachoDTO: ViaturaDespachoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/ViaturaDespacho`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: viaturaDespachoDTO
    },
      options);
    }
  
const putApiViaturaDespacho = (
    viaturaDespachoDTO: ViaturaDespachoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/ViaturaDespacho`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: viaturaDespachoDTO
    },
      options);
    }
  
const getApiViaturaDespachoFinalizar = (
    params?: GetApiViaturaDespachoFinalizarParams,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/api/ViaturaDespacho/Finalizar`, method: 'GET',
        params
    },
      options);
    }
  
const getWsIdentity = (
    identity: string,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<null>(
      {url: `/ws/${identity}`, method: 'GET'
    },
      options);
    }
  
return {getApp,postApiArquivo,getApiArquivoDownloadIdArquivo,postApiAtendimentoListagem,getApiAtendimentoId,deleteApiAtendimentoId,postApiAtendimento,getApiAtendimentoFinalizar,getApiAtendimentoInserirDocumentacao,postApiAtendimentoAnexoListagem,getApiAtendimentoAnexoId,deleteApiAtendimentoAnexoId,postApiAtendimentoAnexo,postApiAtendimentoTipoListagem,getApiAtendimentoTipoId,deleteApiAtendimentoTipoId,postApiAtendimentoTipo,putApiAtendimentoTipo,postApiAtendimentoTipoSelect,getApiAuthLogado,putApiAuthLogin,postIntegracaoAuthApp,postApiChamadoListagem,postApiChamadoMapa,getApiChamadoId,deleteApiChamadoId,postApiChamado,getApiChamadoRejeitrar,postApiChamadoSelectBairro,postIntegracaoChamadoApp,postApiChamadoLocalizacaoListagem,getApiChamadoLocalizacaoId,deleteApiChamadoLocalizacaoId,postApiChamadoLocalizacao,putApiChamadoLocalizacao,getApiConfiguracaoLogo,getApiConfiguracao,postApiConfiguracao,postApiContatoListagem,getApiContatoId,deleteApiContatoId,postApiContato,putApiContato,postApiContatoSelect,postApiDispositivoListagem,getApiDispositivoId,deleteApiDispositivoId,postApiDispositivo,putApiDispositivo,postApiInformativoListagem,getApiInformativoId,deleteApiInformativoId,postApiInformativo,putApiInformativo,postIntegracaoInformativoIntegracaoListagem,postApiLogAcesso,postApiMensagemListagem,getApiMensagemId,deleteApiMensagemId,postApiMensagem,postIntegracaoMensagemAppListagem,postApiMensagemModeloListagem,getApiMensagemModeloId,deleteApiMensagemModeloId,postApiMensagemModelo,putApiMensagemModelo,postApiMensagemModeloSelect,postApiMenu,getApiPerfilAcessoId,deleteApiPerfilAcessoId,postApiPerfilAcessoListagem,postApiPerfilAcesso,getApiPerfilAcessoSelect,getApiPerfilAcessoItemId,getApiPerfilAcessoItem,postApiPerfilAcessoItem,getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId,postApiPerfilAcessoItemPerfil,putApiPerfilAcessoItemLiberarAcessosPerfilIdPerfil,deleteApiPerfilAcessoItemBloquearAcessosPerfilIdPerfil,getApiPerfilAcessoItemAcessoFuncionalidade,getIntegracaoPessoaAppTokenIdentificador,postIntegracaoPessoaApp,postApiPessoaAssistidaListagem,getApiPessoaAssistidaId,deleteApiPessoaAssistidaId,postApiPessoaAssistida,putApiPessoaAssistida,postApiPessoaAssistidaSelect,postApiPessoaAssistidaAnexoListagem,getApiPessoaAssistidaAnexoId,deleteApiPessoaAssistidaAnexoId,postApiPessoaAssistidaAnexo,getApiSessaoValidar,postApiTokenListagem,getApiTokenId,deleteApiTokenId,postApiToken,putApiToken,postApiUsuarioListagem,getApiUsuarioId,deleteApiUsuarioId,postApiUsuario,putApiUsuario,patchApiUsuarioAlterarSenhaId,putApiUsuarioAlterarSenhaConfirmacao,postApiUsuarioSelect,postApiUsuarioImpressao,postApiViaturaListagem,getApiViaturaId,deleteApiViaturaId,postApiViatura,putApiViatura,postApiViaturaSelect,postApiViaturaDespachoListagem,getApiViaturaDespachoId,deleteApiViaturaDespachoId,postApiViaturaDespacho,putApiViaturaDespacho,getApiViaturaDespachoFinalizar,getWsIdentity}};
export type GetAppResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApp']>>>
export type PostApiArquivoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiArquivo']>>>
export type GetApiArquivoDownloadIdArquivoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiArquivoDownloadIdArquivo']>>>
export type PostApiAtendimentoListagemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiAtendimentoListagem']>>>
export type GetApiAtendimentoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiAtendimentoId']>>>
export type DeleteApiAtendimentoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['deleteApiAtendimentoId']>>>
export type PostApiAtendimentoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiAtendimento']>>>
export type GetApiAtendimentoFinalizarResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiAtendimentoFinalizar']>>>
export type GetApiAtendimentoInserirDocumentacaoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiAtendimentoInserirDocumentacao']>>>
export type PostApiAtendimentoAnexoListagemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiAtendimentoAnexoListagem']>>>
export type GetApiAtendimentoAnexoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiAtendimentoAnexoId']>>>
export type DeleteApiAtendimentoAnexoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['deleteApiAtendimentoAnexoId']>>>
export type PostApiAtendimentoAnexoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiAtendimentoAnexo']>>>
export type PostApiAtendimentoTipoListagemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiAtendimentoTipoListagem']>>>
export type GetApiAtendimentoTipoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiAtendimentoTipoId']>>>
export type DeleteApiAtendimentoTipoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['deleteApiAtendimentoTipoId']>>>
export type PostApiAtendimentoTipoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiAtendimentoTipo']>>>
export type PutApiAtendimentoTipoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['putApiAtendimentoTipo']>>>
export type PostApiAtendimentoTipoSelectResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiAtendimentoTipoSelect']>>>
export type GetApiAuthLogadoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiAuthLogado']>>>
export type PutApiAuthLoginResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['putApiAuthLogin']>>>
export type PostIntegracaoAuthAppResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postIntegracaoAuthApp']>>>
export type PostApiChamadoListagemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiChamadoListagem']>>>
export type PostApiChamadoMapaResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiChamadoMapa']>>>
export type GetApiChamadoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiChamadoId']>>>
export type DeleteApiChamadoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['deleteApiChamadoId']>>>
export type PostApiChamadoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiChamado']>>>
export type GetApiChamadoRejeitrarResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiChamadoRejeitrar']>>>
export type PostApiChamadoSelectBairroResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiChamadoSelectBairro']>>>
export type PostIntegracaoChamadoAppResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postIntegracaoChamadoApp']>>>
export type PostApiChamadoLocalizacaoListagemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiChamadoLocalizacaoListagem']>>>
export type GetApiChamadoLocalizacaoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiChamadoLocalizacaoId']>>>
export type DeleteApiChamadoLocalizacaoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['deleteApiChamadoLocalizacaoId']>>>
export type PostApiChamadoLocalizacaoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiChamadoLocalizacao']>>>
export type PutApiChamadoLocalizacaoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['putApiChamadoLocalizacao']>>>
export type GetApiConfiguracaoLogoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiConfiguracaoLogo']>>>
export type GetApiConfiguracaoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiConfiguracao']>>>
export type PostApiConfiguracaoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiConfiguracao']>>>
export type PostApiContatoListagemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiContatoListagem']>>>
export type GetApiContatoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiContatoId']>>>
export type DeleteApiContatoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['deleteApiContatoId']>>>
export type PostApiContatoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiContato']>>>
export type PutApiContatoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['putApiContato']>>>
export type PostApiContatoSelectResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiContatoSelect']>>>
export type PostApiDispositivoListagemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiDispositivoListagem']>>>
export type GetApiDispositivoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiDispositivoId']>>>
export type DeleteApiDispositivoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['deleteApiDispositivoId']>>>
export type PostApiDispositivoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiDispositivo']>>>
export type PutApiDispositivoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['putApiDispositivo']>>>
export type PostApiInformativoListagemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiInformativoListagem']>>>
export type GetApiInformativoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiInformativoId']>>>
export type DeleteApiInformativoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['deleteApiInformativoId']>>>
export type PostApiInformativoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiInformativo']>>>
export type PutApiInformativoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['putApiInformativo']>>>
export type PostIntegracaoInformativoIntegracaoListagemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postIntegracaoInformativoIntegracaoListagem']>>>
export type PostApiLogAcessoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiLogAcesso']>>>
export type PostApiMensagemListagemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiMensagemListagem']>>>
export type GetApiMensagemIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiMensagemId']>>>
export type DeleteApiMensagemIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['deleteApiMensagemId']>>>
export type PostApiMensagemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiMensagem']>>>
export type PostIntegracaoMensagemAppListagemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postIntegracaoMensagemAppListagem']>>>
export type PostApiMensagemModeloListagemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiMensagemModeloListagem']>>>
export type GetApiMensagemModeloIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiMensagemModeloId']>>>
export type DeleteApiMensagemModeloIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['deleteApiMensagemModeloId']>>>
export type PostApiMensagemModeloResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiMensagemModelo']>>>
export type PutApiMensagemModeloResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['putApiMensagemModelo']>>>
export type PostApiMensagemModeloSelectResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiMensagemModeloSelect']>>>
export type PostApiMenuResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiMenu']>>>
export type GetApiPerfilAcessoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiPerfilAcessoId']>>>
export type DeleteApiPerfilAcessoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['deleteApiPerfilAcessoId']>>>
export type PostApiPerfilAcessoListagemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiPerfilAcessoListagem']>>>
export type PostApiPerfilAcessoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiPerfilAcesso']>>>
export type GetApiPerfilAcessoSelectResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiPerfilAcessoSelect']>>>
export type GetApiPerfilAcessoItemIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiPerfilAcessoItemId']>>>
export type GetApiPerfilAcessoItemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiPerfilAcessoItem']>>>
export type PostApiPerfilAcessoItemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiPerfilAcessoItem']>>>
export type GetApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId']>>>
export type PostApiPerfilAcessoItemPerfilResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiPerfilAcessoItemPerfil']>>>
export type PutApiPerfilAcessoItemLiberarAcessosPerfilIdPerfilResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['putApiPerfilAcessoItemLiberarAcessosPerfilIdPerfil']>>>
export type DeleteApiPerfilAcessoItemBloquearAcessosPerfilIdPerfilResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['deleteApiPerfilAcessoItemBloquearAcessosPerfilIdPerfil']>>>
export type GetApiPerfilAcessoItemAcessoFuncionalidadeResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiPerfilAcessoItemAcessoFuncionalidade']>>>
export type GetIntegracaoPessoaAppTokenIdentificadorResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getIntegracaoPessoaAppTokenIdentificador']>>>
export type PostIntegracaoPessoaAppResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postIntegracaoPessoaApp']>>>
export type PostApiPessoaAssistidaListagemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiPessoaAssistidaListagem']>>>
export type GetApiPessoaAssistidaIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiPessoaAssistidaId']>>>
export type DeleteApiPessoaAssistidaIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['deleteApiPessoaAssistidaId']>>>
export type PostApiPessoaAssistidaResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiPessoaAssistida']>>>
export type PutApiPessoaAssistidaResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['putApiPessoaAssistida']>>>
export type PostApiPessoaAssistidaSelectResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiPessoaAssistidaSelect']>>>
export type PostApiPessoaAssistidaAnexoListagemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiPessoaAssistidaAnexoListagem']>>>
export type GetApiPessoaAssistidaAnexoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiPessoaAssistidaAnexoId']>>>
export type DeleteApiPessoaAssistidaAnexoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['deleteApiPessoaAssistidaAnexoId']>>>
export type PostApiPessoaAssistidaAnexoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiPessoaAssistidaAnexo']>>>
export type GetApiSessaoValidarResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiSessaoValidar']>>>
export type PostApiTokenListagemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiTokenListagem']>>>
export type GetApiTokenIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiTokenId']>>>
export type DeleteApiTokenIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['deleteApiTokenId']>>>
export type PostApiTokenResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiToken']>>>
export type PutApiTokenResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['putApiToken']>>>
export type PostApiUsuarioListagemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiUsuarioListagem']>>>
export type GetApiUsuarioIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiUsuarioId']>>>
export type DeleteApiUsuarioIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['deleteApiUsuarioId']>>>
export type PostApiUsuarioResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiUsuario']>>>
export type PutApiUsuarioResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['putApiUsuario']>>>
export type PatchApiUsuarioAlterarSenhaIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['patchApiUsuarioAlterarSenhaId']>>>
export type PutApiUsuarioAlterarSenhaConfirmacaoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['putApiUsuarioAlterarSenhaConfirmacao']>>>
export type PostApiUsuarioSelectResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiUsuarioSelect']>>>
export type PostApiUsuarioImpressaoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiUsuarioImpressao']>>>
export type PostApiViaturaListagemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiViaturaListagem']>>>
export type GetApiViaturaIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiViaturaId']>>>
export type DeleteApiViaturaIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['deleteApiViaturaId']>>>
export type PostApiViaturaResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiViatura']>>>
export type PutApiViaturaResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['putApiViatura']>>>
export type PostApiViaturaSelectResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiViaturaSelect']>>>
export type PostApiViaturaDespachoListagemResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiViaturaDespachoListagem']>>>
export type GetApiViaturaDespachoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiViaturaDespachoId']>>>
export type DeleteApiViaturaDespachoIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['deleteApiViaturaDespachoId']>>>
export type PostApiViaturaDespachoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['postApiViaturaDespacho']>>>
export type PutApiViaturaDespachoResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['putApiViaturaDespacho']>>>
export type GetApiViaturaDespachoFinalizarResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getApiViaturaDespachoFinalizar']>>>
export type GetWsIdentityResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getGuardaMariaAPI>['getWsIdentity']>>>
