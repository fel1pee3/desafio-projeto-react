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
  AtendimentoDTO,
  FiltroAtendimentoDTO,
  GetApiAtendimentoFinalizarParams,
  GetApiAtendimentoInserirDocumentacaoParams
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postApiAtendimentoListagem = (
    filtroAtendimentoDTO: FiltroAtendimentoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Atendimento/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroAtendimentoDTO, signal
    },
      options);
    }
  


export const getPostApiAtendimentoListagemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimentoListagem>>, TError,{data: FiltroAtendimentoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimentoListagem>>, TError,{data: FiltroAtendimentoDTO}, TContext> => {

const mutationKey = ['postApiAtendimentoListagem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiAtendimentoListagem>>, {data: FiltroAtendimentoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiAtendimentoListagem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiAtendimentoListagemMutationResult = NonNullable<Awaited<ReturnType<typeof postApiAtendimentoListagem>>>
    export type PostApiAtendimentoListagemMutationBody = FiltroAtendimentoDTO
    export type PostApiAtendimentoListagemMutationError = unknown

    export const usePostApiAtendimentoListagem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimentoListagem>>, TError,{data: FiltroAtendimentoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiAtendimentoListagem>>,
        TError,
        {data: FiltroAtendimentoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiAtendimentoListagemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiAtendimentoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Atendimento/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiAtendimentoIdQueryKey = (id?: number,) => {
    return [`/api/Atendimento/${id}`] as const;
    }

    
export const getGetApiAtendimentoIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiAtendimentoId>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiAtendimentoIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiAtendimentoId>>> = ({ signal }) => getApiAtendimentoId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiAtendimentoIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiAtendimentoId>>>
export type GetApiAtendimentoIdQueryError = unknown


export function useGetApiAtendimentoId<TData = Awaited<ReturnType<typeof getApiAtendimentoId>>, TError = unknown>(
 id: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiAtendimentoId>>,
          TError,
          Awaited<ReturnType<typeof getApiAtendimentoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiAtendimentoId<TData = Awaited<ReturnType<typeof getApiAtendimentoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiAtendimentoId>>,
          TError,
          Awaited<ReturnType<typeof getApiAtendimentoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiAtendimentoId<TData = Awaited<ReturnType<typeof getApiAtendimentoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiAtendimentoId<TData = Awaited<ReturnType<typeof getApiAtendimentoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiAtendimentoIdQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const deleteApiAtendimentoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/Atendimento/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiAtendimentoIdMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiAtendimentoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiAtendimentoId>>, TError,{id: number}, TContext> => {

const mutationKey = ['deleteApiAtendimentoId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiAtendimentoId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiAtendimentoId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiAtendimentoIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiAtendimentoId>>>
    
    export type DeleteApiAtendimentoIdMutationError = unknown

    export const useDeleteApiAtendimentoId = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiAtendimentoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiAtendimentoId>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiAtendimentoIdMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiAtendimento = (
    atendimentoDTO: AtendimentoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Atendimento`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: atendimentoDTO, signal
    },
      options);
    }
  


export const getPostApiAtendimentoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimento>>, TError,{data: AtendimentoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimento>>, TError,{data: AtendimentoDTO}, TContext> => {

const mutationKey = ['postApiAtendimento'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiAtendimento>>, {data: AtendimentoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiAtendimento(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiAtendimentoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiAtendimento>>>
    export type PostApiAtendimentoMutationBody = AtendimentoDTO
    export type PostApiAtendimentoMutationError = unknown

    export const usePostApiAtendimento = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAtendimento>>, TError,{data: AtendimentoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiAtendimento>>,
        TError,
        {data: AtendimentoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiAtendimentoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiAtendimentoFinalizar = (
    params?: GetApiAtendimentoFinalizarParams,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Atendimento/Finalizar`, method: 'GET',
        params, signal
    },
      options);
    }
  

export const getGetApiAtendimentoFinalizarQueryKey = (params?: GetApiAtendimentoFinalizarParams,) => {
    return [`/api/Atendimento/Finalizar`, ...(params ? [params]: [])] as const;
    }

    
export const getGetApiAtendimentoFinalizarQueryOptions = <TData = Awaited<ReturnType<typeof getApiAtendimentoFinalizar>>, TError = unknown>(params?: GetApiAtendimentoFinalizarParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoFinalizar>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiAtendimentoFinalizarQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiAtendimentoFinalizar>>> = ({ signal }) => getApiAtendimentoFinalizar(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoFinalizar>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiAtendimentoFinalizarQueryResult = NonNullable<Awaited<ReturnType<typeof getApiAtendimentoFinalizar>>>
export type GetApiAtendimentoFinalizarQueryError = unknown


export function useGetApiAtendimentoFinalizar<TData = Awaited<ReturnType<typeof getApiAtendimentoFinalizar>>, TError = unknown>(
 params: undefined |  GetApiAtendimentoFinalizarParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoFinalizar>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiAtendimentoFinalizar>>,
          TError,
          Awaited<ReturnType<typeof getApiAtendimentoFinalizar>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiAtendimentoFinalizar<TData = Awaited<ReturnType<typeof getApiAtendimentoFinalizar>>, TError = unknown>(
 params?: GetApiAtendimentoFinalizarParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoFinalizar>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiAtendimentoFinalizar>>,
          TError,
          Awaited<ReturnType<typeof getApiAtendimentoFinalizar>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiAtendimentoFinalizar<TData = Awaited<ReturnType<typeof getApiAtendimentoFinalizar>>, TError = unknown>(
 params?: GetApiAtendimentoFinalizarParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoFinalizar>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiAtendimentoFinalizar<TData = Awaited<ReturnType<typeof getApiAtendimentoFinalizar>>, TError = unknown>(
 params?: GetApiAtendimentoFinalizarParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoFinalizar>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiAtendimentoFinalizarQueryOptions(params,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getApiAtendimentoInserirDocumentacao = (
    params?: GetApiAtendimentoInserirDocumentacaoParams,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Atendimento/InserirDocumentacao`, method: 'GET',
        params, signal
    },
      options);
    }
  

export const getGetApiAtendimentoInserirDocumentacaoQueryKey = (params?: GetApiAtendimentoInserirDocumentacaoParams,) => {
    return [`/api/Atendimento/InserirDocumentacao`, ...(params ? [params]: [])] as const;
    }

    
export const getGetApiAtendimentoInserirDocumentacaoQueryOptions = <TData = Awaited<ReturnType<typeof getApiAtendimentoInserirDocumentacao>>, TError = unknown>(params?: GetApiAtendimentoInserirDocumentacaoParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoInserirDocumentacao>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiAtendimentoInserirDocumentacaoQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiAtendimentoInserirDocumentacao>>> = ({ signal }) => getApiAtendimentoInserirDocumentacao(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoInserirDocumentacao>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiAtendimentoInserirDocumentacaoQueryResult = NonNullable<Awaited<ReturnType<typeof getApiAtendimentoInserirDocumentacao>>>
export type GetApiAtendimentoInserirDocumentacaoQueryError = unknown


export function useGetApiAtendimentoInserirDocumentacao<TData = Awaited<ReturnType<typeof getApiAtendimentoInserirDocumentacao>>, TError = unknown>(
 params: undefined |  GetApiAtendimentoInserirDocumentacaoParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoInserirDocumentacao>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiAtendimentoInserirDocumentacao>>,
          TError,
          Awaited<ReturnType<typeof getApiAtendimentoInserirDocumentacao>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiAtendimentoInserirDocumentacao<TData = Awaited<ReturnType<typeof getApiAtendimentoInserirDocumentacao>>, TError = unknown>(
 params?: GetApiAtendimentoInserirDocumentacaoParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoInserirDocumentacao>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiAtendimentoInserirDocumentacao>>,
          TError,
          Awaited<ReturnType<typeof getApiAtendimentoInserirDocumentacao>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiAtendimentoInserirDocumentacao<TData = Awaited<ReturnType<typeof getApiAtendimentoInserirDocumentacao>>, TError = unknown>(
 params?: GetApiAtendimentoInserirDocumentacaoParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoInserirDocumentacao>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiAtendimentoInserirDocumentacao<TData = Awaited<ReturnType<typeof getApiAtendimentoInserirDocumentacao>>, TError = unknown>(
 params?: GetApiAtendimentoInserirDocumentacaoParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAtendimentoInserirDocumentacao>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiAtendimentoInserirDocumentacaoQueryOptions(params,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



