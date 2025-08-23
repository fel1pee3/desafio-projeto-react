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
  PessoaAssistidaDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postApiPessoaAssistidaListagem = (
    filtroPaginacaoDTO: FiltroPaginacaoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/PessoaAssistida/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroPaginacaoDTO, signal
    },
      options);
    }
  


export const getPostApiPessoaAssistidaListagemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiPessoaAssistidaListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiPessoaAssistidaListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext> => {

const mutationKey = ['postApiPessoaAssistidaListagem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiPessoaAssistidaListagem>>, {data: FiltroPaginacaoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiPessoaAssistidaListagem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiPessoaAssistidaListagemMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPessoaAssistidaListagem>>>
    export type PostApiPessoaAssistidaListagemMutationBody = FiltroPaginacaoDTO
    export type PostApiPessoaAssistidaListagemMutationError = unknown

    export const usePostApiPessoaAssistidaListagem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiPessoaAssistidaListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiPessoaAssistidaListagem>>,
        TError,
        {data: FiltroPaginacaoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiPessoaAssistidaListagemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiPessoaAssistidaId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/PessoaAssistida/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiPessoaAssistidaIdQueryKey = (id?: number,) => {
    return [`/api/PessoaAssistida/${id}`] as const;
    }

    
export const getGetApiPessoaAssistidaIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiPessoaAssistidaId>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPessoaAssistidaId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiPessoaAssistidaIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiPessoaAssistidaId>>> = ({ signal }) => getApiPessoaAssistidaId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiPessoaAssistidaId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiPessoaAssistidaIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPessoaAssistidaId>>>
export type GetApiPessoaAssistidaIdQueryError = unknown


export function useGetApiPessoaAssistidaId<TData = Awaited<ReturnType<typeof getApiPessoaAssistidaId>>, TError = unknown>(
 id: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPessoaAssistidaId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiPessoaAssistidaId>>,
          TError,
          Awaited<ReturnType<typeof getApiPessoaAssistidaId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiPessoaAssistidaId<TData = Awaited<ReturnType<typeof getApiPessoaAssistidaId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPessoaAssistidaId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiPessoaAssistidaId>>,
          TError,
          Awaited<ReturnType<typeof getApiPessoaAssistidaId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiPessoaAssistidaId<TData = Awaited<ReturnType<typeof getApiPessoaAssistidaId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPessoaAssistidaId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiPessoaAssistidaId<TData = Awaited<ReturnType<typeof getApiPessoaAssistidaId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPessoaAssistidaId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiPessoaAssistidaIdQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const deleteApiPessoaAssistidaId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/PessoaAssistida/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiPessoaAssistidaIdMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiPessoaAssistidaId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiPessoaAssistidaId>>, TError,{id: number}, TContext> => {

const mutationKey = ['deleteApiPessoaAssistidaId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiPessoaAssistidaId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiPessoaAssistidaId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiPessoaAssistidaIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiPessoaAssistidaId>>>
    
    export type DeleteApiPessoaAssistidaIdMutationError = unknown

    export const useDeleteApiPessoaAssistidaId = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiPessoaAssistidaId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiPessoaAssistidaId>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiPessoaAssistidaIdMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiPessoaAssistida = (
    pessoaAssistidaDTO: PessoaAssistidaDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/PessoaAssistida`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: pessoaAssistidaDTO, signal
    },
      options);
    }
  


export const getPostApiPessoaAssistidaMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiPessoaAssistida>>, TError,{data: PessoaAssistidaDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiPessoaAssistida>>, TError,{data: PessoaAssistidaDTO}, TContext> => {

const mutationKey = ['postApiPessoaAssistida'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiPessoaAssistida>>, {data: PessoaAssistidaDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiPessoaAssistida(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiPessoaAssistidaMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPessoaAssistida>>>
    export type PostApiPessoaAssistidaMutationBody = PessoaAssistidaDTO
    export type PostApiPessoaAssistidaMutationError = unknown

    export const usePostApiPessoaAssistida = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiPessoaAssistida>>, TError,{data: PessoaAssistidaDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiPessoaAssistida>>,
        TError,
        {data: PessoaAssistidaDTO},
        TContext
      > => {

      const mutationOptions = getPostApiPessoaAssistidaMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const putApiPessoaAssistida = (
    pessoaAssistidaDTO: PessoaAssistidaDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/PessoaAssistida`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: pessoaAssistidaDTO
    },
      options);
    }
  


export const getPutApiPessoaAssistidaMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiPessoaAssistida>>, TError,{data: PessoaAssistidaDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiPessoaAssistida>>, TError,{data: PessoaAssistidaDTO}, TContext> => {

const mutationKey = ['putApiPessoaAssistida'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiPessoaAssistida>>, {data: PessoaAssistidaDTO}> = (props) => {
          const {data} = props ?? {};

          return  putApiPessoaAssistida(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiPessoaAssistidaMutationResult = NonNullable<Awaited<ReturnType<typeof putApiPessoaAssistida>>>
    export type PutApiPessoaAssistidaMutationBody = PessoaAssistidaDTO
    export type PutApiPessoaAssistidaMutationError = unknown

    export const usePutApiPessoaAssistida = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiPessoaAssistida>>, TError,{data: PessoaAssistidaDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiPessoaAssistida>>,
        TError,
        {data: PessoaAssistidaDTO},
        TContext
      > => {

      const mutationOptions = getPutApiPessoaAssistidaMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiPessoaAssistidaSelect = (
    filtroSelectDTO: FiltroSelectDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/PessoaAssistida/Select`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroSelectDTO, signal
    },
      options);
    }
  


export const getPostApiPessoaAssistidaSelectMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiPessoaAssistidaSelect>>, TError,{data: FiltroSelectDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiPessoaAssistidaSelect>>, TError,{data: FiltroSelectDTO}, TContext> => {

const mutationKey = ['postApiPessoaAssistidaSelect'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiPessoaAssistidaSelect>>, {data: FiltroSelectDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiPessoaAssistidaSelect(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiPessoaAssistidaSelectMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPessoaAssistidaSelect>>>
    export type PostApiPessoaAssistidaSelectMutationBody = FiltroSelectDTO
    export type PostApiPessoaAssistidaSelectMutationError = unknown

    export const usePostApiPessoaAssistidaSelect = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiPessoaAssistidaSelect>>, TError,{data: FiltroSelectDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiPessoaAssistidaSelect>>,
        TError,
        {data: FiltroSelectDTO},
        TContext
      > => {

      const mutationOptions = getPostApiPessoaAssistidaSelectMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    