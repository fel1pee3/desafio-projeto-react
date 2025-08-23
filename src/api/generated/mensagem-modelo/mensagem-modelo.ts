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
  FiltroSelectDTO,
  MensagemModeloDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postApiMensagemModeloListagem = (
    filtroPaginacaoDTO: FiltroPaginacaoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/MensagemModelo/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroPaginacaoDTO, signal
    },
      options);
    }
  


export const getPostApiMensagemModeloListagemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiMensagemModeloListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiMensagemModeloListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext> => {

const mutationKey = ['postApiMensagemModeloListagem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiMensagemModeloListagem>>, {data: FiltroPaginacaoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiMensagemModeloListagem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiMensagemModeloListagemMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMensagemModeloListagem>>>
    export type PostApiMensagemModeloListagemMutationBody = FiltroPaginacaoDTO
    export type PostApiMensagemModeloListagemMutationError = unknown

    export const usePostApiMensagemModeloListagem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiMensagemModeloListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiMensagemModeloListagem>>,
        TError,
        {data: FiltroPaginacaoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiMensagemModeloListagemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiMensagemModeloId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/MensagemModelo/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiMensagemModeloIdQueryKey = (id?: number,) => {
    return [`/api/MensagemModelo/${id}`] as const;
    }

    
export const getGetApiMensagemModeloIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiMensagemModeloId>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiMensagemModeloId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiMensagemModeloIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiMensagemModeloId>>> = ({ signal }) => getApiMensagemModeloId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiMensagemModeloId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiMensagemModeloIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMensagemModeloId>>>
export type GetApiMensagemModeloIdQueryError = unknown


export function useGetApiMensagemModeloId<TData = Awaited<ReturnType<typeof getApiMensagemModeloId>>, TError = unknown>(
 id: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiMensagemModeloId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiMensagemModeloId>>,
          TError,
          Awaited<ReturnType<typeof getApiMensagemModeloId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiMensagemModeloId<TData = Awaited<ReturnType<typeof getApiMensagemModeloId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiMensagemModeloId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiMensagemModeloId>>,
          TError,
          Awaited<ReturnType<typeof getApiMensagemModeloId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiMensagemModeloId<TData = Awaited<ReturnType<typeof getApiMensagemModeloId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiMensagemModeloId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiMensagemModeloId<TData = Awaited<ReturnType<typeof getApiMensagemModeloId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiMensagemModeloId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiMensagemModeloIdQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const deleteApiMensagemModeloId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/MensagemModelo/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiMensagemModeloIdMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiMensagemModeloId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiMensagemModeloId>>, TError,{id: number}, TContext> => {

const mutationKey = ['deleteApiMensagemModeloId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiMensagemModeloId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiMensagemModeloId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiMensagemModeloIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiMensagemModeloId>>>
    
    export type DeleteApiMensagemModeloIdMutationError = unknown

    export const useDeleteApiMensagemModeloId = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiMensagemModeloId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiMensagemModeloId>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiMensagemModeloIdMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiMensagemModelo = (
    mensagemModeloDTO: MensagemModeloDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/MensagemModelo`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: mensagemModeloDTO, signal
    },
      options);
    }
  


export const getPostApiMensagemModeloMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiMensagemModelo>>, TError,{data: MensagemModeloDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiMensagemModelo>>, TError,{data: MensagemModeloDTO}, TContext> => {

const mutationKey = ['postApiMensagemModelo'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiMensagemModelo>>, {data: MensagemModeloDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiMensagemModelo(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiMensagemModeloMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMensagemModelo>>>
    export type PostApiMensagemModeloMutationBody = MensagemModeloDTO
    export type PostApiMensagemModeloMutationError = unknown

    export const usePostApiMensagemModelo = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiMensagemModelo>>, TError,{data: MensagemModeloDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiMensagemModelo>>,
        TError,
        {data: MensagemModeloDTO},
        TContext
      > => {

      const mutationOptions = getPostApiMensagemModeloMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const putApiMensagemModelo = (
    mensagemModeloDTO: MensagemModeloDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/MensagemModelo`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: mensagemModeloDTO
    },
      options);
    }
  


export const getPutApiMensagemModeloMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiMensagemModelo>>, TError,{data: MensagemModeloDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiMensagemModelo>>, TError,{data: MensagemModeloDTO}, TContext> => {

const mutationKey = ['putApiMensagemModelo'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiMensagemModelo>>, {data: MensagemModeloDTO}> = (props) => {
          const {data} = props ?? {};

          return  putApiMensagemModelo(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiMensagemModeloMutationResult = NonNullable<Awaited<ReturnType<typeof putApiMensagemModelo>>>
    export type PutApiMensagemModeloMutationBody = MensagemModeloDTO
    export type PutApiMensagemModeloMutationError = unknown

    export const usePutApiMensagemModelo = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiMensagemModelo>>, TError,{data: MensagemModeloDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiMensagemModelo>>,
        TError,
        {data: MensagemModeloDTO},
        TContext
      > => {

      const mutationOptions = getPutApiMensagemModeloMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiMensagemModeloSelect = (
    filtroSelectDTO: FiltroSelectDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/MensagemModelo/select`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroSelectDTO, signal
    },
      options);
    }
  


export const getPostApiMensagemModeloSelectMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiMensagemModeloSelect>>, TError,{data: FiltroSelectDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiMensagemModeloSelect>>, TError,{data: FiltroSelectDTO}, TContext> => {

const mutationKey = ['postApiMensagemModeloSelect'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiMensagemModeloSelect>>, {data: FiltroSelectDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiMensagemModeloSelect(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiMensagemModeloSelectMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMensagemModeloSelect>>>
    export type PostApiMensagemModeloSelectMutationBody = FiltroSelectDTO
    export type PostApiMensagemModeloSelectMutationError = unknown

    export const usePostApiMensagemModeloSelect = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiMensagemModeloSelect>>, TError,{data: FiltroSelectDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiMensagemModeloSelect>>,
        TError,
        {data: FiltroSelectDTO},
        TContext
      > => {

      const mutationOptions = getPostApiMensagemModeloSelectMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    