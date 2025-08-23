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
  ChamadoLocalizacaoDTO,
  FiltroPaginacaoDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postApiChamadoLocalizacaoListagem = (
    filtroPaginacaoDTO: FiltroPaginacaoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/ChamadoLocalizacao/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroPaginacaoDTO, signal
    },
      options);
    }
  


export const getPostApiChamadoLocalizacaoListagemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiChamadoLocalizacaoListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiChamadoLocalizacaoListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext> => {

const mutationKey = ['postApiChamadoLocalizacaoListagem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiChamadoLocalizacaoListagem>>, {data: FiltroPaginacaoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiChamadoLocalizacaoListagem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiChamadoLocalizacaoListagemMutationResult = NonNullable<Awaited<ReturnType<typeof postApiChamadoLocalizacaoListagem>>>
    export type PostApiChamadoLocalizacaoListagemMutationBody = FiltroPaginacaoDTO
    export type PostApiChamadoLocalizacaoListagemMutationError = unknown

    export const usePostApiChamadoLocalizacaoListagem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiChamadoLocalizacaoListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiChamadoLocalizacaoListagem>>,
        TError,
        {data: FiltroPaginacaoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiChamadoLocalizacaoListagemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiChamadoLocalizacaoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/ChamadoLocalizacao/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiChamadoLocalizacaoIdQueryKey = (id?: number,) => {
    return [`/api/ChamadoLocalizacao/${id}`] as const;
    }

    
export const getGetApiChamadoLocalizacaoIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiChamadoLocalizacaoId>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChamadoLocalizacaoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiChamadoLocalizacaoIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiChamadoLocalizacaoId>>> = ({ signal }) => getApiChamadoLocalizacaoId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiChamadoLocalizacaoId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiChamadoLocalizacaoIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiChamadoLocalizacaoId>>>
export type GetApiChamadoLocalizacaoIdQueryError = unknown


export function useGetApiChamadoLocalizacaoId<TData = Awaited<ReturnType<typeof getApiChamadoLocalizacaoId>>, TError = unknown>(
 id: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChamadoLocalizacaoId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiChamadoLocalizacaoId>>,
          TError,
          Awaited<ReturnType<typeof getApiChamadoLocalizacaoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiChamadoLocalizacaoId<TData = Awaited<ReturnType<typeof getApiChamadoLocalizacaoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChamadoLocalizacaoId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiChamadoLocalizacaoId>>,
          TError,
          Awaited<ReturnType<typeof getApiChamadoLocalizacaoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiChamadoLocalizacaoId<TData = Awaited<ReturnType<typeof getApiChamadoLocalizacaoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChamadoLocalizacaoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiChamadoLocalizacaoId<TData = Awaited<ReturnType<typeof getApiChamadoLocalizacaoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChamadoLocalizacaoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiChamadoLocalizacaoIdQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const deleteApiChamadoLocalizacaoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/ChamadoLocalizacao/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiChamadoLocalizacaoIdMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiChamadoLocalizacaoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiChamadoLocalizacaoId>>, TError,{id: number}, TContext> => {

const mutationKey = ['deleteApiChamadoLocalizacaoId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiChamadoLocalizacaoId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiChamadoLocalizacaoId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiChamadoLocalizacaoIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiChamadoLocalizacaoId>>>
    
    export type DeleteApiChamadoLocalizacaoIdMutationError = unknown

    export const useDeleteApiChamadoLocalizacaoId = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiChamadoLocalizacaoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiChamadoLocalizacaoId>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiChamadoLocalizacaoIdMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiChamadoLocalizacao = (
    chamadoLocalizacaoDTO: ChamadoLocalizacaoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/ChamadoLocalizacao`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: chamadoLocalizacaoDTO, signal
    },
      options);
    }
  


export const getPostApiChamadoLocalizacaoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiChamadoLocalizacao>>, TError,{data: ChamadoLocalizacaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiChamadoLocalizacao>>, TError,{data: ChamadoLocalizacaoDTO}, TContext> => {

const mutationKey = ['postApiChamadoLocalizacao'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiChamadoLocalizacao>>, {data: ChamadoLocalizacaoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiChamadoLocalizacao(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiChamadoLocalizacaoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiChamadoLocalizacao>>>
    export type PostApiChamadoLocalizacaoMutationBody = ChamadoLocalizacaoDTO
    export type PostApiChamadoLocalizacaoMutationError = unknown

    export const usePostApiChamadoLocalizacao = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiChamadoLocalizacao>>, TError,{data: ChamadoLocalizacaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiChamadoLocalizacao>>,
        TError,
        {data: ChamadoLocalizacaoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiChamadoLocalizacaoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const putApiChamadoLocalizacao = (
    chamadoLocalizacaoDTO: ChamadoLocalizacaoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/ChamadoLocalizacao`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: chamadoLocalizacaoDTO
    },
      options);
    }
  


export const getPutApiChamadoLocalizacaoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiChamadoLocalizacao>>, TError,{data: ChamadoLocalizacaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiChamadoLocalizacao>>, TError,{data: ChamadoLocalizacaoDTO}, TContext> => {

const mutationKey = ['putApiChamadoLocalizacao'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiChamadoLocalizacao>>, {data: ChamadoLocalizacaoDTO}> = (props) => {
          const {data} = props ?? {};

          return  putApiChamadoLocalizacao(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiChamadoLocalizacaoMutationResult = NonNullable<Awaited<ReturnType<typeof putApiChamadoLocalizacao>>>
    export type PutApiChamadoLocalizacaoMutationBody = ChamadoLocalizacaoDTO
    export type PutApiChamadoLocalizacaoMutationError = unknown

    export const usePutApiChamadoLocalizacao = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiChamadoLocalizacao>>, TError,{data: ChamadoLocalizacaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiChamadoLocalizacao>>,
        TError,
        {data: ChamadoLocalizacaoDTO},
        TContext
      > => {

      const mutationOptions = getPutApiChamadoLocalizacaoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    