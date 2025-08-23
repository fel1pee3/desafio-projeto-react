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
  FiltroMensagemDTO,
  MensagemDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postApiMensagemListagem = (
    filtroMensagemDTO: FiltroMensagemDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Mensagem/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroMensagemDTO, signal
    },
      options);
    }
  


export const getPostApiMensagemListagemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiMensagemListagem>>, TError,{data: FiltroMensagemDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiMensagemListagem>>, TError,{data: FiltroMensagemDTO}, TContext> => {

const mutationKey = ['postApiMensagemListagem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiMensagemListagem>>, {data: FiltroMensagemDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiMensagemListagem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiMensagemListagemMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMensagemListagem>>>
    export type PostApiMensagemListagemMutationBody = FiltroMensagemDTO
    export type PostApiMensagemListagemMutationError = unknown

    export const usePostApiMensagemListagem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiMensagemListagem>>, TError,{data: FiltroMensagemDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiMensagemListagem>>,
        TError,
        {data: FiltroMensagemDTO},
        TContext
      > => {

      const mutationOptions = getPostApiMensagemListagemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiMensagemId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Mensagem/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiMensagemIdQueryKey = (id?: number,) => {
    return [`/api/Mensagem/${id}`] as const;
    }

    
export const getGetApiMensagemIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiMensagemId>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiMensagemId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiMensagemIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiMensagemId>>> = ({ signal }) => getApiMensagemId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiMensagemId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiMensagemIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMensagemId>>>
export type GetApiMensagemIdQueryError = unknown


export function useGetApiMensagemId<TData = Awaited<ReturnType<typeof getApiMensagemId>>, TError = unknown>(
 id: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiMensagemId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiMensagemId>>,
          TError,
          Awaited<ReturnType<typeof getApiMensagemId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiMensagemId<TData = Awaited<ReturnType<typeof getApiMensagemId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiMensagemId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiMensagemId>>,
          TError,
          Awaited<ReturnType<typeof getApiMensagemId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiMensagemId<TData = Awaited<ReturnType<typeof getApiMensagemId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiMensagemId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiMensagemId<TData = Awaited<ReturnType<typeof getApiMensagemId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiMensagemId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiMensagemIdQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const deleteApiMensagemId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/Mensagem/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiMensagemIdMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiMensagemId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiMensagemId>>, TError,{id: number}, TContext> => {

const mutationKey = ['deleteApiMensagemId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiMensagemId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiMensagemId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiMensagemIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiMensagemId>>>
    
    export type DeleteApiMensagemIdMutationError = unknown

    export const useDeleteApiMensagemId = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiMensagemId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiMensagemId>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiMensagemIdMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiMensagem = (
    mensagemDTO: MensagemDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Mensagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: mensagemDTO, signal
    },
      options);
    }
  


export const getPostApiMensagemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiMensagem>>, TError,{data: MensagemDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiMensagem>>, TError,{data: MensagemDTO}, TContext> => {

const mutationKey = ['postApiMensagem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiMensagem>>, {data: MensagemDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiMensagem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiMensagemMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMensagem>>>
    export type PostApiMensagemMutationBody = MensagemDTO
    export type PostApiMensagemMutationError = unknown

    export const usePostApiMensagem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiMensagem>>, TError,{data: MensagemDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiMensagem>>,
        TError,
        {data: MensagemDTO},
        TContext
      > => {

      const mutationOptions = getPostApiMensagemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    