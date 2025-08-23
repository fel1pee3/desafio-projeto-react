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
  FiltroPaginacaoDTO,
  InformativoDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postApiInformativoListagem = (
    filtroPaginacaoDTO: FiltroPaginacaoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Informativo/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroPaginacaoDTO, signal
    },
      options);
    }
  


export const getPostApiInformativoListagemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiInformativoListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiInformativoListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext> => {

const mutationKey = ['postApiInformativoListagem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiInformativoListagem>>, {data: FiltroPaginacaoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiInformativoListagem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiInformativoListagemMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInformativoListagem>>>
    export type PostApiInformativoListagemMutationBody = FiltroPaginacaoDTO
    export type PostApiInformativoListagemMutationError = unknown

    export const usePostApiInformativoListagem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiInformativoListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiInformativoListagem>>,
        TError,
        {data: FiltroPaginacaoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiInformativoListagemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiInformativoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Informativo/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiInformativoIdQueryKey = (id?: number,) => {
    return [`/api/Informativo/${id}`] as const;
    }

    
export const getGetApiInformativoIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiInformativoId>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiInformativoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiInformativoIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiInformativoId>>> = ({ signal }) => getApiInformativoId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiInformativoId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiInformativoIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInformativoId>>>
export type GetApiInformativoIdQueryError = unknown


export function useGetApiInformativoId<TData = Awaited<ReturnType<typeof getApiInformativoId>>, TError = unknown>(
 id: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiInformativoId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiInformativoId>>,
          TError,
          Awaited<ReturnType<typeof getApiInformativoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiInformativoId<TData = Awaited<ReturnType<typeof getApiInformativoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiInformativoId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiInformativoId>>,
          TError,
          Awaited<ReturnType<typeof getApiInformativoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiInformativoId<TData = Awaited<ReturnType<typeof getApiInformativoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiInformativoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiInformativoId<TData = Awaited<ReturnType<typeof getApiInformativoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiInformativoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiInformativoIdQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const deleteApiInformativoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/Informativo/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiInformativoIdMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiInformativoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiInformativoId>>, TError,{id: number}, TContext> => {

const mutationKey = ['deleteApiInformativoId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiInformativoId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiInformativoId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiInformativoIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiInformativoId>>>
    
    export type DeleteApiInformativoIdMutationError = unknown

    export const useDeleteApiInformativoId = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiInformativoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiInformativoId>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiInformativoIdMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiInformativo = (
    informativoDTO: InformativoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Informativo`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: informativoDTO, signal
    },
      options);
    }
  


export const getPostApiInformativoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiInformativo>>, TError,{data: InformativoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiInformativo>>, TError,{data: InformativoDTO}, TContext> => {

const mutationKey = ['postApiInformativo'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiInformativo>>, {data: InformativoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiInformativo(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiInformativoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInformativo>>>
    export type PostApiInformativoMutationBody = InformativoDTO
    export type PostApiInformativoMutationError = unknown

    export const usePostApiInformativo = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiInformativo>>, TError,{data: InformativoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiInformativo>>,
        TError,
        {data: InformativoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiInformativoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const putApiInformativo = (
    informativoDTO: InformativoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/Informativo`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: informativoDTO
    },
      options);
    }
  


export const getPutApiInformativoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiInformativo>>, TError,{data: InformativoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiInformativo>>, TError,{data: InformativoDTO}, TContext> => {

const mutationKey = ['putApiInformativo'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiInformativo>>, {data: InformativoDTO}> = (props) => {
          const {data} = props ?? {};

          return  putApiInformativo(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiInformativoMutationResult = NonNullable<Awaited<ReturnType<typeof putApiInformativo>>>
    export type PutApiInformativoMutationBody = InformativoDTO
    export type PutApiInformativoMutationError = unknown

    export const usePutApiInformativo = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiInformativo>>, TError,{data: InformativoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiInformativo>>,
        TError,
        {data: InformativoDTO},
        TContext
      > => {

      const mutationOptions = getPutApiInformativoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    