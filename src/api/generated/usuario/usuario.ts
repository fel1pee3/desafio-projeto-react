import {
  useMutation,
  useQuery
} from '@tanstack/react-query';
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryClient,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query';

import type {
  FiltroListagemUsuarioDTO,
  FiltroSelectUsuarioDTO,
  UpdateUsuarioSenhaConfirmacaoDTO,
  UpdateUsuarioSenhaDTO,
  UsuarioDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postApiUsuarioListagem = (
    filtroListagemUsuarioDTO: FiltroListagemUsuarioDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Usuario/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroListagemUsuarioDTO, signal
    },
      options);
    }
  


export const getPostApiUsuarioListagemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiUsuarioListagem>>, TError,{data: FiltroListagemUsuarioDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiUsuarioListagem>>, TError,{data: FiltroListagemUsuarioDTO}, TContext> => {

const mutationKey = ['postApiUsuarioListagem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiUsuarioListagem>>, {data: FiltroListagemUsuarioDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiUsuarioListagem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiUsuarioListagemMutationResult = NonNullable<Awaited<ReturnType<typeof postApiUsuarioListagem>>>
    export type PostApiUsuarioListagemMutationBody = FiltroListagemUsuarioDTO
    export type PostApiUsuarioListagemMutationError = unknown

    export const usePostApiUsuarioListagem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiUsuarioListagem>>, TError,{data: FiltroListagemUsuarioDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiUsuarioListagem>>,
        TError,
        {data: FiltroListagemUsuarioDTO},
        TContext
      > => {

      const mutationOptions = getPostApiUsuarioListagemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiUsuarioId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Usuario/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiUsuarioIdQueryKey = (id?: number,) => {
    return [`/api/Usuario/${id}`] as const;
    }

    
export const getGetApiUsuarioIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiUsuarioId>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiUsuarioId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiUsuarioIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiUsuarioId>>> = ({ signal }) => getApiUsuarioId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiUsuarioId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiUsuarioIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiUsuarioId>>>
export type GetApiUsuarioIdQueryError = unknown


export function useGetApiUsuarioId<TData = Awaited<ReturnType<typeof getApiUsuarioId>>, TError = unknown>(
 id: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiUsuarioId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiUsuarioId>>,
          TError,
          Awaited<ReturnType<typeof getApiUsuarioId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiUsuarioId<TData = Awaited<ReturnType<typeof getApiUsuarioId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiUsuarioId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiUsuarioId>>,
          TError,
          Awaited<ReturnType<typeof getApiUsuarioId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiUsuarioId<TData = Awaited<ReturnType<typeof getApiUsuarioId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiUsuarioId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiUsuarioId<TData = Awaited<ReturnType<typeof getApiUsuarioId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiUsuarioId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiUsuarioIdQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const deleteApiUsuarioId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/Usuario/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiUsuarioIdMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiUsuarioId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiUsuarioId>>, TError,{id: number}, TContext> => {

const mutationKey = ['deleteApiUsuarioId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiUsuarioId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiUsuarioId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiUsuarioIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiUsuarioId>>>
    
    export type DeleteApiUsuarioIdMutationError = unknown

    export const useDeleteApiUsuarioId = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiUsuarioId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiUsuarioId>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiUsuarioIdMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiUsuario = (
    usuarioDTO: UsuarioDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Usuario`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: usuarioDTO, signal
    },
      options);
    }
  


export const getPostApiUsuarioMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiUsuario>>, TError,{data: UsuarioDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiUsuario>>, TError,{data: UsuarioDTO}, TContext> => {

const mutationKey = ['postApiUsuario'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiUsuario>>, {data: UsuarioDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiUsuario(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiUsuarioMutationResult = NonNullable<Awaited<ReturnType<typeof postApiUsuario>>>
    export type PostApiUsuarioMutationBody = UsuarioDTO
    export type PostApiUsuarioMutationError = unknown

    export const usePostApiUsuario = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiUsuario>>, TError,{data: UsuarioDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiUsuario>>,
        TError,
        {data: UsuarioDTO},
        TContext
      > => {

      const mutationOptions = getPostApiUsuarioMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const putApiUsuario = (
    usuarioDTO: UsuarioDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/Usuario`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: usuarioDTO
    },
      options);
    }
  


export const getPutApiUsuarioMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiUsuario>>, TError,{data: UsuarioDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiUsuario>>, TError,{data: UsuarioDTO}, TContext> => {

const mutationKey = ['putApiUsuario'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiUsuario>>, {data: UsuarioDTO}> = (props) => {
          const {data} = props ?? {};

          return  putApiUsuario(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiUsuarioMutationResult = NonNullable<Awaited<ReturnType<typeof putApiUsuario>>>
    export type PutApiUsuarioMutationBody = UsuarioDTO
    export type PutApiUsuarioMutationError = unknown

    export const usePutApiUsuario = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiUsuario>>, TError,{data: UsuarioDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiUsuario>>,
        TError,
        {data: UsuarioDTO},
        TContext
      > => {

      const mutationOptions = getPutApiUsuarioMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const patchApiUsuarioAlterarSenhaId = (
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
  


export const getPatchApiUsuarioAlterarSenhaIdMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchApiUsuarioAlterarSenhaId>>, TError,{id: number;data: UpdateUsuarioSenhaDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof patchApiUsuarioAlterarSenhaId>>, TError,{id: number;data: UpdateUsuarioSenhaDTO}, TContext> => {

const mutationKey = ['patchApiUsuarioAlterarSenhaId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof patchApiUsuarioAlterarSenhaId>>, {id: number;data: UpdateUsuarioSenhaDTO}> = (props) => {
          const {id,data} = props ?? {};

          return  patchApiUsuarioAlterarSenhaId(id,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PatchApiUsuarioAlterarSenhaIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiUsuarioAlterarSenhaId>>>
    export type PatchApiUsuarioAlterarSenhaIdMutationBody = UpdateUsuarioSenhaDTO
    export type PatchApiUsuarioAlterarSenhaIdMutationError = unknown

    export const usePatchApiUsuarioAlterarSenhaId = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchApiUsuarioAlterarSenhaId>>, TError,{id: number;data: UpdateUsuarioSenhaDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof patchApiUsuarioAlterarSenhaId>>,
        TError,
        {id: number;data: UpdateUsuarioSenhaDTO},
        TContext
      > => {

      const mutationOptions = getPatchApiUsuarioAlterarSenhaIdMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const putApiUsuarioAlterarSenhaConfirmacao = (
    updateUsuarioSenhaConfirmacaoDTO: UpdateUsuarioSenhaConfirmacaoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/Usuario/AlterarSenhaConfirmacao`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: updateUsuarioSenhaConfirmacaoDTO
    },
      options);
    }
  


export const getPutApiUsuarioAlterarSenhaConfirmacaoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiUsuarioAlterarSenhaConfirmacao>>, TError,{data: UpdateUsuarioSenhaConfirmacaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiUsuarioAlterarSenhaConfirmacao>>, TError,{data: UpdateUsuarioSenhaConfirmacaoDTO}, TContext> => {

const mutationKey = ['putApiUsuarioAlterarSenhaConfirmacao'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiUsuarioAlterarSenhaConfirmacao>>, {data: UpdateUsuarioSenhaConfirmacaoDTO}> = (props) => {
          const {data} = props ?? {};

          return  putApiUsuarioAlterarSenhaConfirmacao(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiUsuarioAlterarSenhaConfirmacaoMutationResult = NonNullable<Awaited<ReturnType<typeof putApiUsuarioAlterarSenhaConfirmacao>>>
    export type PutApiUsuarioAlterarSenhaConfirmacaoMutationBody = UpdateUsuarioSenhaConfirmacaoDTO
    export type PutApiUsuarioAlterarSenhaConfirmacaoMutationError = unknown

    export const usePutApiUsuarioAlterarSenhaConfirmacao = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiUsuarioAlterarSenhaConfirmacao>>, TError,{data: UpdateUsuarioSenhaConfirmacaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiUsuarioAlterarSenhaConfirmacao>>,
        TError,
        {data: UpdateUsuarioSenhaConfirmacaoDTO},
        TContext
      > => {

      const mutationOptions = getPutApiUsuarioAlterarSenhaConfirmacaoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiUsuarioSelect = (
    filtroSelectUsuarioDTO: FiltroSelectUsuarioDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Usuario/Select`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroSelectUsuarioDTO, signal
    },
      options);
    }
  


export const getPostApiUsuarioSelectMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiUsuarioSelect>>, TError,{data: FiltroSelectUsuarioDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiUsuarioSelect>>, TError,{data: FiltroSelectUsuarioDTO}, TContext> => {

const mutationKey = ['postApiUsuarioSelect'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiUsuarioSelect>>, {data: FiltroSelectUsuarioDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiUsuarioSelect(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiUsuarioSelectMutationResult = NonNullable<Awaited<ReturnType<typeof postApiUsuarioSelect>>>
    export type PostApiUsuarioSelectMutationBody = FiltroSelectUsuarioDTO
    export type PostApiUsuarioSelectMutationError = unknown

    export const usePostApiUsuarioSelect = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiUsuarioSelect>>, TError,{data: FiltroSelectUsuarioDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiUsuarioSelect>>,
        TError,
        {data: FiltroSelectUsuarioDTO},
        TContext
      > => {

      const mutationOptions = getPostApiUsuarioSelectMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiUsuarioImpressao = (
    filtroListagemUsuarioDTO: FiltroListagemUsuarioDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Usuario/Impressao`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroListagemUsuarioDTO, signal
    },
      options);
    }
  


export const getPostApiUsuarioImpressaoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiUsuarioImpressao>>, TError,{data: FiltroListagemUsuarioDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiUsuarioImpressao>>, TError,{data: FiltroListagemUsuarioDTO}, TContext> => {

const mutationKey = ['postApiUsuarioImpressao'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiUsuarioImpressao>>, {data: FiltroListagemUsuarioDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiUsuarioImpressao(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiUsuarioImpressaoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiUsuarioImpressao>>>
    export type PostApiUsuarioImpressaoMutationBody = FiltroListagemUsuarioDTO
    export type PostApiUsuarioImpressaoMutationError = unknown

    export const usePostApiUsuarioImpressao = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiUsuarioImpressao>>, TError,{data: FiltroListagemUsuarioDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiUsuarioImpressao>>,
        TError,
        {data: FiltroListagemUsuarioDTO},
        TContext
      > => {

      const mutationOptions = getPostApiUsuarioImpressaoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    