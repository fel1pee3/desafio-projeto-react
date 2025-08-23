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
  FiltroPerfilAcessoDTO,
  PerfilAcessoDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const getApiPerfilAcessoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/PerfilAcesso/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiPerfilAcessoIdQueryKey = (id?: number,) => {
    return [`/api/PerfilAcesso/${id}`] as const;
    }

    
export const getGetApiPerfilAcessoIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiPerfilAcessoId>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiPerfilAcessoIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiPerfilAcessoId>>> = ({ signal }) => getApiPerfilAcessoId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiPerfilAcessoIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPerfilAcessoId>>>
export type GetApiPerfilAcessoIdQueryError = unknown


export function useGetApiPerfilAcessoId<TData = Awaited<ReturnType<typeof getApiPerfilAcessoId>>, TError = unknown>(
 id: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiPerfilAcessoId>>,
          TError,
          Awaited<ReturnType<typeof getApiPerfilAcessoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiPerfilAcessoId<TData = Awaited<ReturnType<typeof getApiPerfilAcessoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiPerfilAcessoId>>,
          TError,
          Awaited<ReturnType<typeof getApiPerfilAcessoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiPerfilAcessoId<TData = Awaited<ReturnType<typeof getApiPerfilAcessoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiPerfilAcessoId<TData = Awaited<ReturnType<typeof getApiPerfilAcessoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiPerfilAcessoIdQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const deleteApiPerfilAcessoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/PerfilAcesso/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiPerfilAcessoIdMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiPerfilAcessoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiPerfilAcessoId>>, TError,{id: number}, TContext> => {

const mutationKey = ['deleteApiPerfilAcessoId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiPerfilAcessoId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiPerfilAcessoId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiPerfilAcessoIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiPerfilAcessoId>>>
    
    export type DeleteApiPerfilAcessoIdMutationError = unknown

    export const useDeleteApiPerfilAcessoId = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiPerfilAcessoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiPerfilAcessoId>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiPerfilAcessoIdMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiPerfilAcessoListagem = (
    filtroPerfilAcessoDTO: FiltroPerfilAcessoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/PerfilAcesso/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroPerfilAcessoDTO, signal
    },
      options);
    }
  


export const getPostApiPerfilAcessoListagemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiPerfilAcessoListagem>>, TError,{data: FiltroPerfilAcessoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiPerfilAcessoListagem>>, TError,{data: FiltroPerfilAcessoDTO}, TContext> => {

const mutationKey = ['postApiPerfilAcessoListagem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiPerfilAcessoListagem>>, {data: FiltroPerfilAcessoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiPerfilAcessoListagem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiPerfilAcessoListagemMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPerfilAcessoListagem>>>
    export type PostApiPerfilAcessoListagemMutationBody = FiltroPerfilAcessoDTO
    export type PostApiPerfilAcessoListagemMutationError = unknown

    export const usePostApiPerfilAcessoListagem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiPerfilAcessoListagem>>, TError,{data: FiltroPerfilAcessoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiPerfilAcessoListagem>>,
        TError,
        {data: FiltroPerfilAcessoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiPerfilAcessoListagemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiPerfilAcesso = (
    perfilAcessoDTO: PerfilAcessoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/PerfilAcesso`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: perfilAcessoDTO, signal
    },
      options);
    }
  


export const getPostApiPerfilAcessoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiPerfilAcesso>>, TError,{data: PerfilAcessoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiPerfilAcesso>>, TError,{data: PerfilAcessoDTO}, TContext> => {

const mutationKey = ['postApiPerfilAcesso'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiPerfilAcesso>>, {data: PerfilAcessoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiPerfilAcesso(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiPerfilAcessoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPerfilAcesso>>>
    export type PostApiPerfilAcessoMutationBody = PerfilAcessoDTO
    export type PostApiPerfilAcessoMutationError = unknown

    export const usePostApiPerfilAcesso = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiPerfilAcesso>>, TError,{data: PerfilAcessoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiPerfilAcesso>>,
        TError,
        {data: PerfilAcessoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiPerfilAcessoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiPerfilAcessoSelect = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/PerfilAcesso/select`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiPerfilAcessoSelectQueryKey = () => {
    return [`/api/PerfilAcesso/select`] as const;
    }

    
export const getGetApiPerfilAcessoSelectQueryOptions = <TData = Awaited<ReturnType<typeof getApiPerfilAcessoSelect>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoSelect>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiPerfilAcessoSelectQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiPerfilAcessoSelect>>> = ({ signal }) => getApiPerfilAcessoSelect(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoSelect>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiPerfilAcessoSelectQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPerfilAcessoSelect>>>
export type GetApiPerfilAcessoSelectQueryError = unknown


export function useGetApiPerfilAcessoSelect<TData = Awaited<ReturnType<typeof getApiPerfilAcessoSelect>>, TError = unknown>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoSelect>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiPerfilAcessoSelect>>,
          TError,
          Awaited<ReturnType<typeof getApiPerfilAcessoSelect>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiPerfilAcessoSelect<TData = Awaited<ReturnType<typeof getApiPerfilAcessoSelect>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoSelect>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiPerfilAcessoSelect>>,
          TError,
          Awaited<ReturnType<typeof getApiPerfilAcessoSelect>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiPerfilAcessoSelect<TData = Awaited<ReturnType<typeof getApiPerfilAcessoSelect>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoSelect>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiPerfilAcessoSelect<TData = Awaited<ReturnType<typeof getApiPerfilAcessoSelect>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoSelect>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiPerfilAcessoSelectQueryOptions(options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



