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
  CreateAtendimentoAnexoDTO,
  FiltroAtendimentoAnexoDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postApiAtendimentoAnexoListagem = (
    filtroAtendimentoAnexoDTO: FiltroAtendimentoAnexoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/AtendimentoAnexo/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroAtendimentoAnexoDTO, signal
    },
      options);
    }
  


export const getPostApiAtendimentoAnexoListagemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimentoAnexoListagem>>, TError,{data: FiltroAtendimentoAnexoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimentoAnexoListagem>>, TError,{data: FiltroAtendimentoAnexoDTO}, TContext> => {

const mutationKey = ['postApiAtendimentoAnexoListagem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiAtendimentoAnexoListagem>>, {data: FiltroAtendimentoAnexoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiAtendimentoAnexoListagem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiAtendimentoAnexoListagemMutationResult = NonNullable<Awaited<ReturnType<typeof postApiAtendimentoAnexoListagem>>>
    export type PostApiAtendimentoAnexoListagemMutationBody = FiltroAtendimentoAnexoDTO
    export type PostApiAtendimentoAnexoListagemMutationError = unknown

    export const usePostApiAtendimentoAnexoListagem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimentoAnexoListagem>>, TError,{data: FiltroAtendimentoAnexoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiAtendimentoAnexoListagem>>,
        TError,
        {data: FiltroAtendimentoAnexoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiAtendimentoAnexoListagemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiAtendimentoAnexoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/AtendimentoAnexo/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiAtendimentoAnexoIdQueryKey = (id?: number,) => {
    return [`/api/AtendimentoAnexo/${id}`] as const;
    }

    
export const getGetApiAtendimentoAnexoIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiAtendimentoAnexoId>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoAnexoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiAtendimentoAnexoIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiAtendimentoAnexoId>>> = ({ signal }) => getApiAtendimentoAnexoId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoAnexoId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiAtendimentoAnexoIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiAtendimentoAnexoId>>>
export type GetApiAtendimentoAnexoIdQueryError = unknown


export function useGetApiAtendimentoAnexoId<TData = Awaited<ReturnType<typeof getApiAtendimentoAnexoId>>, TError = unknown>(
 id: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoAnexoId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiAtendimentoAnexoId>>,
          TError,
          Awaited<ReturnType<typeof getApiAtendimentoAnexoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiAtendimentoAnexoId<TData = Awaited<ReturnType<typeof getApiAtendimentoAnexoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoAnexoId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiAtendimentoAnexoId>>,
          TError,
          Awaited<ReturnType<typeof getApiAtendimentoAnexoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiAtendimentoAnexoId<TData = Awaited<ReturnType<typeof getApiAtendimentoAnexoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoAnexoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiAtendimentoAnexoId<TData = Awaited<ReturnType<typeof getApiAtendimentoAnexoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoAnexoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiAtendimentoAnexoIdQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const deleteApiAtendimentoAnexoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/AtendimentoAnexo/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiAtendimentoAnexoIdMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiAtendimentoAnexoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiAtendimentoAnexoId>>, TError,{id: number}, TContext> => {

const mutationKey = ['deleteApiAtendimentoAnexoId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiAtendimentoAnexoId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiAtendimentoAnexoId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiAtendimentoAnexoIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiAtendimentoAnexoId>>>
    
    export type DeleteApiAtendimentoAnexoIdMutationError = unknown

    export const useDeleteApiAtendimentoAnexoId = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiAtendimentoAnexoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiAtendimentoAnexoId>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiAtendimentoAnexoIdMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiAtendimentoAnexo = (
    createAtendimentoAnexoDTO: CreateAtendimentoAnexoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/AtendimentoAnexo`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createAtendimentoAnexoDTO, signal
    },
      options);
    }
  


export const getPostApiAtendimentoAnexoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimentoAnexo>>, TError,{data: CreateAtendimentoAnexoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimentoAnexo>>, TError,{data: CreateAtendimentoAnexoDTO}, TContext> => {

const mutationKey = ['postApiAtendimentoAnexo'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiAtendimentoAnexo>>, {data: CreateAtendimentoAnexoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiAtendimentoAnexo(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiAtendimentoAnexoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiAtendimentoAnexo>>>
    export type PostApiAtendimentoAnexoMutationBody = CreateAtendimentoAnexoDTO
    export type PostApiAtendimentoAnexoMutationError = unknown

    export const usePostApiAtendimentoAnexo = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimentoAnexo>>, TError,{data: CreateAtendimentoAnexoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiAtendimentoAnexo>>,
        TError,
        {data: CreateAtendimentoAnexoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiAtendimentoAnexoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    