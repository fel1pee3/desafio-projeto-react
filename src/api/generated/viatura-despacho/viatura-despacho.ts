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
  FiltroViaturaDespachoDTO,
  GetApiViaturaDespachoFinalizarParams,
  ViaturaDespachoDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postApiViaturaDespachoListagem = (
    filtroViaturaDespachoDTO: FiltroViaturaDespachoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/ViaturaDespacho/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroViaturaDespachoDTO, signal
    },
      options);
    }
  


export const getPostApiViaturaDespachoListagemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiViaturaDespachoListagem>>, TError,{data: FiltroViaturaDespachoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiViaturaDespachoListagem>>, TError,{data: FiltroViaturaDespachoDTO}, TContext> => {

const mutationKey = ['postApiViaturaDespachoListagem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiViaturaDespachoListagem>>, {data: FiltroViaturaDespachoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiViaturaDespachoListagem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiViaturaDespachoListagemMutationResult = NonNullable<Awaited<ReturnType<typeof postApiViaturaDespachoListagem>>>
    export type PostApiViaturaDespachoListagemMutationBody = FiltroViaturaDespachoDTO
    export type PostApiViaturaDespachoListagemMutationError = unknown

    export const usePostApiViaturaDespachoListagem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiViaturaDespachoListagem>>, TError,{data: FiltroViaturaDespachoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiViaturaDespachoListagem>>,
        TError,
        {data: FiltroViaturaDespachoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiViaturaDespachoListagemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiViaturaDespachoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/ViaturaDespacho/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiViaturaDespachoIdQueryKey = (id?: number,) => {
    return [`/api/ViaturaDespacho/${id}`] as const;
    }

    
export const getGetApiViaturaDespachoIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiViaturaDespachoId>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiViaturaDespachoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiViaturaDespachoIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiViaturaDespachoId>>> = ({ signal }) => getApiViaturaDespachoId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiViaturaDespachoId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiViaturaDespachoIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiViaturaDespachoId>>>
export type GetApiViaturaDespachoIdQueryError = unknown


export function useGetApiViaturaDespachoId<TData = Awaited<ReturnType<typeof getApiViaturaDespachoId>>, TError = unknown>(
 id: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiViaturaDespachoId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiViaturaDespachoId>>,
          TError,
          Awaited<ReturnType<typeof getApiViaturaDespachoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiViaturaDespachoId<TData = Awaited<ReturnType<typeof getApiViaturaDespachoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiViaturaDespachoId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiViaturaDespachoId>>,
          TError,
          Awaited<ReturnType<typeof getApiViaturaDespachoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiViaturaDespachoId<TData = Awaited<ReturnType<typeof getApiViaturaDespachoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiViaturaDespachoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiViaturaDespachoId<TData = Awaited<ReturnType<typeof getApiViaturaDespachoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiViaturaDespachoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiViaturaDespachoIdQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const deleteApiViaturaDespachoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/ViaturaDespacho/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiViaturaDespachoIdMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiViaturaDespachoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiViaturaDespachoId>>, TError,{id: number}, TContext> => {

const mutationKey = ['deleteApiViaturaDespachoId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiViaturaDespachoId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiViaturaDespachoId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiViaturaDespachoIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiViaturaDespachoId>>>
    
    export type DeleteApiViaturaDespachoIdMutationError = unknown

    export const useDeleteApiViaturaDespachoId = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiViaturaDespachoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiViaturaDespachoId>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiViaturaDespachoIdMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiViaturaDespacho = (
    viaturaDespachoDTO: ViaturaDespachoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/ViaturaDespacho`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: viaturaDespachoDTO, signal
    },
      options);
    }
  


export const getPostApiViaturaDespachoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiViaturaDespacho>>, TError,{data: ViaturaDespachoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiViaturaDespacho>>, TError,{data: ViaturaDespachoDTO}, TContext> => {

const mutationKey = ['postApiViaturaDespacho'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiViaturaDespacho>>, {data: ViaturaDespachoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiViaturaDespacho(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiViaturaDespachoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiViaturaDespacho>>>
    export type PostApiViaturaDespachoMutationBody = ViaturaDespachoDTO
    export type PostApiViaturaDespachoMutationError = unknown

    export const usePostApiViaturaDespacho = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiViaturaDespacho>>, TError,{data: ViaturaDespachoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiViaturaDespacho>>,
        TError,
        {data: ViaturaDespachoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiViaturaDespachoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const putApiViaturaDespacho = (
    viaturaDespachoDTO: ViaturaDespachoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/ViaturaDespacho`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: viaturaDespachoDTO
    },
      options);
    }
  


export const getPutApiViaturaDespachoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiViaturaDespacho>>, TError,{data: ViaturaDespachoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiViaturaDespacho>>, TError,{data: ViaturaDespachoDTO}, TContext> => {

const mutationKey = ['putApiViaturaDespacho'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiViaturaDespacho>>, {data: ViaturaDespachoDTO}> = (props) => {
          const {data} = props ?? {};

          return  putApiViaturaDespacho(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiViaturaDespachoMutationResult = NonNullable<Awaited<ReturnType<typeof putApiViaturaDespacho>>>
    export type PutApiViaturaDespachoMutationBody = ViaturaDespachoDTO
    export type PutApiViaturaDespachoMutationError = unknown

    export const usePutApiViaturaDespacho = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiViaturaDespacho>>, TError,{data: ViaturaDespachoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiViaturaDespacho>>,
        TError,
        {data: ViaturaDespachoDTO},
        TContext
      > => {

      const mutationOptions = getPutApiViaturaDespachoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiViaturaDespachoFinalizar = (
    params?: GetApiViaturaDespachoFinalizarParams,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/ViaturaDespacho/Finalizar`, method: 'GET',
        params, signal
    },
      options);
    }
  

export const getGetApiViaturaDespachoFinalizarQueryKey = (params?: GetApiViaturaDespachoFinalizarParams,) => {
    return [`/api/ViaturaDespacho/Finalizar`, ...(params ? [params]: [])] as const;
    }

    
export const getGetApiViaturaDespachoFinalizarQueryOptions = <TData = Awaited<ReturnType<typeof getApiViaturaDespachoFinalizar>>, TError = unknown>(params?: GetApiViaturaDespachoFinalizarParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiViaturaDespachoFinalizar>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiViaturaDespachoFinalizarQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiViaturaDespachoFinalizar>>> = ({ signal }) => getApiViaturaDespachoFinalizar(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiViaturaDespachoFinalizar>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiViaturaDespachoFinalizarQueryResult = NonNullable<Awaited<ReturnType<typeof getApiViaturaDespachoFinalizar>>>
export type GetApiViaturaDespachoFinalizarQueryError = unknown


export function useGetApiViaturaDespachoFinalizar<TData = Awaited<ReturnType<typeof getApiViaturaDespachoFinalizar>>, TError = unknown>(
 params: undefined |  GetApiViaturaDespachoFinalizarParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiViaturaDespachoFinalizar>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiViaturaDespachoFinalizar>>,
          TError,
          Awaited<ReturnType<typeof getApiViaturaDespachoFinalizar>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiViaturaDespachoFinalizar<TData = Awaited<ReturnType<typeof getApiViaturaDespachoFinalizar>>, TError = unknown>(
 params?: GetApiViaturaDespachoFinalizarParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiViaturaDespachoFinalizar>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiViaturaDespachoFinalizar>>,
          TError,
          Awaited<ReturnType<typeof getApiViaturaDespachoFinalizar>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiViaturaDespachoFinalizar<TData = Awaited<ReturnType<typeof getApiViaturaDespachoFinalizar>>, TError = unknown>(
 params?: GetApiViaturaDespachoFinalizarParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiViaturaDespachoFinalizar>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiViaturaDespachoFinalizar<TData = Awaited<ReturnType<typeof getApiViaturaDespachoFinalizar>>, TError = unknown>(
 params?: GetApiViaturaDespachoFinalizarParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiViaturaDespachoFinalizar>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiViaturaDespachoFinalizarQueryOptions(params,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



