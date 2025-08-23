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
  FiltroTokenDTO,
  TokenDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postApiTokenListagem = (
    filtroTokenDTO: FiltroTokenDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Token/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroTokenDTO, signal
    },
      options);
    }
  


export const getPostApiTokenListagemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiTokenListagem>>, TError,{data: FiltroTokenDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiTokenListagem>>, TError,{data: FiltroTokenDTO}, TContext> => {

const mutationKey = ['postApiTokenListagem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiTokenListagem>>, {data: FiltroTokenDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiTokenListagem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiTokenListagemMutationResult = NonNullable<Awaited<ReturnType<typeof postApiTokenListagem>>>
    export type PostApiTokenListagemMutationBody = FiltroTokenDTO
    export type PostApiTokenListagemMutationError = unknown

    export const usePostApiTokenListagem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiTokenListagem>>, TError,{data: FiltroTokenDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiTokenListagem>>,
        TError,
        {data: FiltroTokenDTO},
        TContext
      > => {

      const mutationOptions = getPostApiTokenListagemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiTokenId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Token/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiTokenIdQueryKey = (id?: number,) => {
    return [`/api/Token/${id}`] as const;
    }

    
export const getGetApiTokenIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiTokenId>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiTokenId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiTokenIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiTokenId>>> = ({ signal }) => getApiTokenId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiTokenId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiTokenIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiTokenId>>>
export type GetApiTokenIdQueryError = unknown


export function useGetApiTokenId<TData = Awaited<ReturnType<typeof getApiTokenId>>, TError = unknown>(
 id: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiTokenId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiTokenId>>,
          TError,
          Awaited<ReturnType<typeof getApiTokenId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiTokenId<TData = Awaited<ReturnType<typeof getApiTokenId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiTokenId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiTokenId>>,
          TError,
          Awaited<ReturnType<typeof getApiTokenId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiTokenId<TData = Awaited<ReturnType<typeof getApiTokenId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiTokenId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiTokenId<TData = Awaited<ReturnType<typeof getApiTokenId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiTokenId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiTokenIdQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const deleteApiTokenId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/Token/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiTokenIdMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiTokenId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiTokenId>>, TError,{id: number}, TContext> => {

const mutationKey = ['deleteApiTokenId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiTokenId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiTokenId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiTokenIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiTokenId>>>
    
    export type DeleteApiTokenIdMutationError = unknown

    export const useDeleteApiTokenId = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiTokenId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiTokenId>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiTokenIdMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiToken = (
    tokenDTO: TokenDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Token`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: tokenDTO, signal
    },
      options);
    }
  


export const getPostApiTokenMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiToken>>, TError,{data: TokenDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiToken>>, TError,{data: TokenDTO}, TContext> => {

const mutationKey = ['postApiToken'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiToken>>, {data: TokenDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiToken(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiTokenMutationResult = NonNullable<Awaited<ReturnType<typeof postApiToken>>>
    export type PostApiTokenMutationBody = TokenDTO
    export type PostApiTokenMutationError = unknown

    export const usePostApiToken = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiToken>>, TError,{data: TokenDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiToken>>,
        TError,
        {data: TokenDTO},
        TContext
      > => {

      const mutationOptions = getPostApiTokenMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const putApiToken = (
    tokenDTO: TokenDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/Token`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: tokenDTO
    },
      options);
    }
  


export const getPutApiTokenMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiToken>>, TError,{data: TokenDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiToken>>, TError,{data: TokenDTO}, TContext> => {

const mutationKey = ['putApiToken'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiToken>>, {data: TokenDTO}> = (props) => {
          const {data} = props ?? {};

          return  putApiToken(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiTokenMutationResult = NonNullable<Awaited<ReturnType<typeof putApiToken>>>
    export type PutApiTokenMutationBody = TokenDTO
    export type PutApiTokenMutationError = unknown

    export const usePutApiToken = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiToken>>, TError,{data: TokenDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiToken>>,
        TError,
        {data: TokenDTO},
        TContext
      > => {

      const mutationOptions = getPutApiTokenMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    