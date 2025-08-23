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
  DispositivoDTO,
  FiltroPaginacaoDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postApiDispositivoListagem = (
    filtroPaginacaoDTO: FiltroPaginacaoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Dispositivo/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroPaginacaoDTO, signal
    },
      options);
    }
  


export const getPostApiDispositivoListagemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiDispositivoListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiDispositivoListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext> => {

const mutationKey = ['postApiDispositivoListagem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiDispositivoListagem>>, {data: FiltroPaginacaoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiDispositivoListagem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiDispositivoListagemMutationResult = NonNullable<Awaited<ReturnType<typeof postApiDispositivoListagem>>>
    export type PostApiDispositivoListagemMutationBody = FiltroPaginacaoDTO
    export type PostApiDispositivoListagemMutationError = unknown

    export const usePostApiDispositivoListagem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiDispositivoListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiDispositivoListagem>>,
        TError,
        {data: FiltroPaginacaoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiDispositivoListagemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiDispositivoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Dispositivo/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiDispositivoIdQueryKey = (id?: number,) => {
    return [`/api/Dispositivo/${id}`] as const;
    }

    
export const getGetApiDispositivoIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiDispositivoId>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiDispositivoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiDispositivoIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiDispositivoId>>> = ({ signal }) => getApiDispositivoId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiDispositivoId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiDispositivoIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiDispositivoId>>>
export type GetApiDispositivoIdQueryError = unknown


export function useGetApiDispositivoId<TData = Awaited<ReturnType<typeof getApiDispositivoId>>, TError = unknown>(
 id: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiDispositivoId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiDispositivoId>>,
          TError,
          Awaited<ReturnType<typeof getApiDispositivoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiDispositivoId<TData = Awaited<ReturnType<typeof getApiDispositivoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiDispositivoId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiDispositivoId>>,
          TError,
          Awaited<ReturnType<typeof getApiDispositivoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiDispositivoId<TData = Awaited<ReturnType<typeof getApiDispositivoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiDispositivoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiDispositivoId<TData = Awaited<ReturnType<typeof getApiDispositivoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiDispositivoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiDispositivoIdQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const deleteApiDispositivoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/Dispositivo/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiDispositivoIdMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiDispositivoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiDispositivoId>>, TError,{id: number}, TContext> => {

const mutationKey = ['deleteApiDispositivoId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiDispositivoId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiDispositivoId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiDispositivoIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiDispositivoId>>>
    
    export type DeleteApiDispositivoIdMutationError = unknown

    export const useDeleteApiDispositivoId = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiDispositivoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiDispositivoId>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiDispositivoIdMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiDispositivo = (
    dispositivoDTO: DispositivoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Dispositivo`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: dispositivoDTO, signal
    },
      options);
    }
  


export const getPostApiDispositivoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiDispositivo>>, TError,{data: DispositivoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiDispositivo>>, TError,{data: DispositivoDTO}, TContext> => {

const mutationKey = ['postApiDispositivo'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiDispositivo>>, {data: DispositivoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiDispositivo(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiDispositivoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiDispositivo>>>
    export type PostApiDispositivoMutationBody = DispositivoDTO
    export type PostApiDispositivoMutationError = unknown

    export const usePostApiDispositivo = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiDispositivo>>, TError,{data: DispositivoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiDispositivo>>,
        TError,
        {data: DispositivoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiDispositivoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const putApiDispositivo = (
    dispositivoDTO: DispositivoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/Dispositivo`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: dispositivoDTO
    },
      options);
    }
  


export const getPutApiDispositivoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiDispositivo>>, TError,{data: DispositivoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiDispositivo>>, TError,{data: DispositivoDTO}, TContext> => {

const mutationKey = ['putApiDispositivo'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiDispositivo>>, {data: DispositivoDTO}> = (props) => {
          const {data} = props ?? {};

          return  putApiDispositivo(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiDispositivoMutationResult = NonNullable<Awaited<ReturnType<typeof putApiDispositivo>>>
    export type PutApiDispositivoMutationBody = DispositivoDTO
    export type PutApiDispositivoMutationError = unknown

    export const usePutApiDispositivo = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiDispositivo>>, TError,{data: DispositivoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiDispositivo>>,
        TError,
        {data: DispositivoDTO},
        TContext
      > => {

      const mutationOptions = getPutApiDispositivoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    