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
  CreatePessoaAssistidaAnexoDTO,
  FiltroPessoaAssistidaAnexoDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postApiPessoaAssistidaAnexoListagem = (
    filtroPessoaAssistidaAnexoDTO: FiltroPessoaAssistidaAnexoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/PessoaAssistidaAnexo/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroPessoaAssistidaAnexoDTO, signal
    },
      options);
    }
  


export const getPostApiPessoaAssistidaAnexoListagemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiPessoaAssistidaAnexoListagem>>, TError,{data: FiltroPessoaAssistidaAnexoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiPessoaAssistidaAnexoListagem>>, TError,{data: FiltroPessoaAssistidaAnexoDTO}, TContext> => {

const mutationKey = ['postApiPessoaAssistidaAnexoListagem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiPessoaAssistidaAnexoListagem>>, {data: FiltroPessoaAssistidaAnexoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiPessoaAssistidaAnexoListagem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiPessoaAssistidaAnexoListagemMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPessoaAssistidaAnexoListagem>>>
    export type PostApiPessoaAssistidaAnexoListagemMutationBody = FiltroPessoaAssistidaAnexoDTO
    export type PostApiPessoaAssistidaAnexoListagemMutationError = unknown

    export const usePostApiPessoaAssistidaAnexoListagem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiPessoaAssistidaAnexoListagem>>, TError,{data: FiltroPessoaAssistidaAnexoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiPessoaAssistidaAnexoListagem>>,
        TError,
        {data: FiltroPessoaAssistidaAnexoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiPessoaAssistidaAnexoListagemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiPessoaAssistidaAnexoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/PessoaAssistidaAnexo/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiPessoaAssistidaAnexoIdQueryKey = (id?: number,) => {
    return [`/api/PessoaAssistidaAnexo/${id}`] as const;
    }

    
export const getGetApiPessoaAssistidaAnexoIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiPessoaAssistidaAnexoId>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPessoaAssistidaAnexoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiPessoaAssistidaAnexoIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiPessoaAssistidaAnexoId>>> = ({ signal }) => getApiPessoaAssistidaAnexoId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiPessoaAssistidaAnexoId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiPessoaAssistidaAnexoIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPessoaAssistidaAnexoId>>>
export type GetApiPessoaAssistidaAnexoIdQueryError = unknown


export function useGetApiPessoaAssistidaAnexoId<TData = Awaited<ReturnType<typeof getApiPessoaAssistidaAnexoId>>, TError = unknown>(
 id: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPessoaAssistidaAnexoId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiPessoaAssistidaAnexoId>>,
          TError,
          Awaited<ReturnType<typeof getApiPessoaAssistidaAnexoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiPessoaAssistidaAnexoId<TData = Awaited<ReturnType<typeof getApiPessoaAssistidaAnexoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPessoaAssistidaAnexoId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiPessoaAssistidaAnexoId>>,
          TError,
          Awaited<ReturnType<typeof getApiPessoaAssistidaAnexoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiPessoaAssistidaAnexoId<TData = Awaited<ReturnType<typeof getApiPessoaAssistidaAnexoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPessoaAssistidaAnexoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiPessoaAssistidaAnexoId<TData = Awaited<ReturnType<typeof getApiPessoaAssistidaAnexoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPessoaAssistidaAnexoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiPessoaAssistidaAnexoIdQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const deleteApiPessoaAssistidaAnexoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/PessoaAssistidaAnexo/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiPessoaAssistidaAnexoIdMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiPessoaAssistidaAnexoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiPessoaAssistidaAnexoId>>, TError,{id: number}, TContext> => {

const mutationKey = ['deleteApiPessoaAssistidaAnexoId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiPessoaAssistidaAnexoId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiPessoaAssistidaAnexoId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiPessoaAssistidaAnexoIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiPessoaAssistidaAnexoId>>>
    
    export type DeleteApiPessoaAssistidaAnexoIdMutationError = unknown

    export const useDeleteApiPessoaAssistidaAnexoId = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiPessoaAssistidaAnexoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiPessoaAssistidaAnexoId>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiPessoaAssistidaAnexoIdMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiPessoaAssistidaAnexo = (
    createPessoaAssistidaAnexoDTO: CreatePessoaAssistidaAnexoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/PessoaAssistidaAnexo`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createPessoaAssistidaAnexoDTO, signal
    },
      options);
    }
  


export const getPostApiPessoaAssistidaAnexoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiPessoaAssistidaAnexo>>, TError,{data: CreatePessoaAssistidaAnexoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiPessoaAssistidaAnexo>>, TError,{data: CreatePessoaAssistidaAnexoDTO}, TContext> => {

const mutationKey = ['postApiPessoaAssistidaAnexo'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiPessoaAssistidaAnexo>>, {data: CreatePessoaAssistidaAnexoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiPessoaAssistidaAnexo(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiPessoaAssistidaAnexoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPessoaAssistidaAnexo>>>
    export type PostApiPessoaAssistidaAnexoMutationBody = CreatePessoaAssistidaAnexoDTO
    export type PostApiPessoaAssistidaAnexoMutationError = unknown

    export const usePostApiPessoaAssistidaAnexo = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiPessoaAssistidaAnexo>>, TError,{data: CreatePessoaAssistidaAnexoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiPessoaAssistidaAnexo>>,
        TError,
        {data: CreatePessoaAssistidaAnexoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiPessoaAssistidaAnexoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    