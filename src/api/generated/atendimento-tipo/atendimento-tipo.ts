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
  CadastroDTO,
  FiltroPaginacaoDTO,
  PostApiAtendimentoTipoSelectParams
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postApiAtendimentoTipoListagem = (
    filtroPaginacaoDTO: FiltroPaginacaoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/AtendimentoTipo/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroPaginacaoDTO, signal
    },
      options);
    }
  


export const getPostApiAtendimentoTipoListagemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimentoTipoListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimentoTipoListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext> => {

const mutationKey = ['postApiAtendimentoTipoListagem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiAtendimentoTipoListagem>>, {data: FiltroPaginacaoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiAtendimentoTipoListagem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiAtendimentoTipoListagemMutationResult = NonNullable<Awaited<ReturnType<typeof postApiAtendimentoTipoListagem>>>
    export type PostApiAtendimentoTipoListagemMutationBody = FiltroPaginacaoDTO
    export type PostApiAtendimentoTipoListagemMutationError = unknown

    export const usePostApiAtendimentoTipoListagem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimentoTipoListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiAtendimentoTipoListagem>>,
        TError,
        {data: FiltroPaginacaoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiAtendimentoTipoListagemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiAtendimentoTipoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/AtendimentoTipo/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiAtendimentoTipoIdQueryKey = (id?: number,) => {
    return [`/api/AtendimentoTipo/${id}`] as const;
    }

    
export const getGetApiAtendimentoTipoIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiAtendimentoTipoId>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoTipoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiAtendimentoTipoIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiAtendimentoTipoId>>> = ({ signal }) => getApiAtendimentoTipoId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoTipoId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiAtendimentoTipoIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiAtendimentoTipoId>>>
export type GetApiAtendimentoTipoIdQueryError = unknown


export function useGetApiAtendimentoTipoId<TData = Awaited<ReturnType<typeof getApiAtendimentoTipoId>>, TError = unknown>(
 id: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoTipoId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiAtendimentoTipoId>>,
          TError,
          Awaited<ReturnType<typeof getApiAtendimentoTipoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiAtendimentoTipoId<TData = Awaited<ReturnType<typeof getApiAtendimentoTipoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoTipoId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiAtendimentoTipoId>>,
          TError,
          Awaited<ReturnType<typeof getApiAtendimentoTipoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiAtendimentoTipoId<TData = Awaited<ReturnType<typeof getApiAtendimentoTipoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoTipoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiAtendimentoTipoId<TData = Awaited<ReturnType<typeof getApiAtendimentoTipoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoTipoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiAtendimentoTipoIdQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const deleteApiAtendimentoTipoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/AtendimentoTipo/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiAtendimentoTipoIdMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiAtendimentoTipoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiAtendimentoTipoId>>, TError,{id: number}, TContext> => {

const mutationKey = ['deleteApiAtendimentoTipoId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiAtendimentoTipoId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiAtendimentoTipoId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiAtendimentoTipoIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiAtendimentoTipoId>>>
    
    export type DeleteApiAtendimentoTipoIdMutationError = unknown

    export const useDeleteApiAtendimentoTipoId = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiAtendimentoTipoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiAtendimentoTipoId>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiAtendimentoTipoIdMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiAtendimentoTipo = (
    cadastroDTO: CadastroDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/AtendimentoTipo`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: cadastroDTO, signal
    },
      options);
    }
  


export const getPostApiAtendimentoTipoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimentoTipo>>, TError,{data: CadastroDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimentoTipo>>, TError,{data: CadastroDTO}, TContext> => {

const mutationKey = ['postApiAtendimentoTipo'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiAtendimentoTipo>>, {data: CadastroDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiAtendimentoTipo(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiAtendimentoTipoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiAtendimentoTipo>>>
    export type PostApiAtendimentoTipoMutationBody = CadastroDTO
    export type PostApiAtendimentoTipoMutationError = unknown

    export const usePostApiAtendimentoTipo = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimentoTipo>>, TError,{data: CadastroDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiAtendimentoTipo>>,
        TError,
        {data: CadastroDTO},
        TContext
      > => {

      const mutationOptions = getPostApiAtendimentoTipoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const putApiAtendimentoTipo = (
    cadastroDTO: CadastroDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/AtendimentoTipo`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: cadastroDTO
    },
      options);
    }
  


export const getPutApiAtendimentoTipoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiAtendimentoTipo>>, TError,{data: CadastroDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiAtendimentoTipo>>, TError,{data: CadastroDTO}, TContext> => {

const mutationKey = ['putApiAtendimentoTipo'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiAtendimentoTipo>>, {data: CadastroDTO}> = (props) => {
          const {data} = props ?? {};

          return  putApiAtendimentoTipo(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiAtendimentoTipoMutationResult = NonNullable<Awaited<ReturnType<typeof putApiAtendimentoTipo>>>
    export type PutApiAtendimentoTipoMutationBody = CadastroDTO
    export type PutApiAtendimentoTipoMutationError = unknown

    export const usePutApiAtendimentoTipo = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiAtendimentoTipo>>, TError,{data: CadastroDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiAtendimentoTipo>>,
        TError,
        {data: CadastroDTO},
        TContext
      > => {

      const mutationOptions = getPutApiAtendimentoTipoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiAtendimentoTipoSelect = (
    params?: PostApiAtendimentoTipoSelectParams,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/AtendimentoTipo/select`, method: 'POST',
        params, signal
    },
      options);
    }
  


export const getPostApiAtendimentoTipoSelectMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimentoTipoSelect>>, TError,{params?: PostApiAtendimentoTipoSelectParams}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimentoTipoSelect>>, TError,{params?: PostApiAtendimentoTipoSelectParams}, TContext> => {

const mutationKey = ['postApiAtendimentoTipoSelect'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiAtendimentoTipoSelect>>, {params?: PostApiAtendimentoTipoSelectParams}> = (props) => {
          const {params} = props ?? {};

          return  postApiAtendimentoTipoSelect(params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiAtendimentoTipoSelectMutationResult = NonNullable<Awaited<ReturnType<typeof postApiAtendimentoTipoSelect>>>
    
    export type PostApiAtendimentoTipoSelectMutationError = unknown

    export const usePostApiAtendimentoTipoSelect = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimentoTipoSelect>>, TError,{params?: PostApiAtendimentoTipoSelectParams}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiAtendimentoTipoSelect>>,
        TError,
        {params?: PostApiAtendimentoTipoSelectParams},
        TContext
      > => {

      const mutationOptions = getPostApiAtendimentoTipoSelectMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    