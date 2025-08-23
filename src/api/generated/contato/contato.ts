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
  ContatoDTO,
  FiltroContatoDTO,
  FiltroSelectDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postApiContatoListagem = (
    filtroContatoDTO: FiltroContatoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Contato/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroContatoDTO, signal
    },
      options);
    }
  


export const getPostApiContatoListagemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiContatoListagem>>, TError,{data: FiltroContatoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiContatoListagem>>, TError,{data: FiltroContatoDTO}, TContext> => {

const mutationKey = ['postApiContatoListagem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiContatoListagem>>, {data: FiltroContatoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiContatoListagem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiContatoListagemMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContatoListagem>>>
    export type PostApiContatoListagemMutationBody = FiltroContatoDTO
    export type PostApiContatoListagemMutationError = unknown

    export const usePostApiContatoListagem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiContatoListagem>>, TError,{data: FiltroContatoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiContatoListagem>>,
        TError,
        {data: FiltroContatoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiContatoListagemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiContatoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Contato/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiContatoIdQueryKey = (id?: number,) => {
    return [`/api/Contato/${id}`] as const;
    }

    
export const getGetApiContatoIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiContatoId>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiContatoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiContatoIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiContatoId>>> = ({ signal }) => getApiContatoId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiContatoId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiContatoIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContatoId>>>
export type GetApiContatoIdQueryError = unknown


export function useGetApiContatoId<TData = Awaited<ReturnType<typeof getApiContatoId>>, TError = unknown>(
 id: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiContatoId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiContatoId>>,
          TError,
          Awaited<ReturnType<typeof getApiContatoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiContatoId<TData = Awaited<ReturnType<typeof getApiContatoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiContatoId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiContatoId>>,
          TError,
          Awaited<ReturnType<typeof getApiContatoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiContatoId<TData = Awaited<ReturnType<typeof getApiContatoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiContatoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiContatoId<TData = Awaited<ReturnType<typeof getApiContatoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiContatoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiContatoIdQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const deleteApiContatoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/Contato/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiContatoIdMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiContatoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiContatoId>>, TError,{id: number}, TContext> => {

const mutationKey = ['deleteApiContatoId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiContatoId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiContatoId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiContatoIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiContatoId>>>
    
    export type DeleteApiContatoIdMutationError = unknown

    export const useDeleteApiContatoId = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiContatoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiContatoId>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiContatoIdMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiContato = (
    contatoDTO: ContatoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Contato`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: contatoDTO, signal
    },
      options);
    }
  


export const getPostApiContatoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiContato>>, TError,{data: ContatoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiContato>>, TError,{data: ContatoDTO}, TContext> => {

const mutationKey = ['postApiContato'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiContato>>, {data: ContatoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiContato(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiContatoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContato>>>
    export type PostApiContatoMutationBody = ContatoDTO
    export type PostApiContatoMutationError = unknown

    export const usePostApiContato = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiContato>>, TError,{data: ContatoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiContato>>,
        TError,
        {data: ContatoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiContatoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const putApiContato = (
    contatoDTO: ContatoDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/Contato`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: contatoDTO
    },
      options);
    }
  


export const getPutApiContatoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiContato>>, TError,{data: ContatoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiContato>>, TError,{data: ContatoDTO}, TContext> => {

const mutationKey = ['putApiContato'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiContato>>, {data: ContatoDTO}> = (props) => {
          const {data} = props ?? {};

          return  putApiContato(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiContatoMutationResult = NonNullable<Awaited<ReturnType<typeof putApiContato>>>
    export type PutApiContatoMutationBody = ContatoDTO
    export type PutApiContatoMutationError = unknown

    export const usePutApiContato = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiContato>>, TError,{data: ContatoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiContato>>,
        TError,
        {data: ContatoDTO},
        TContext
      > => {

      const mutationOptions = getPutApiContatoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiContatoSelect = (
    filtroSelectDTO: FiltroSelectDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Contato/select`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroSelectDTO, signal
    },
      options);
    }
  


export const getPostApiContatoSelectMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiContatoSelect>>, TError,{data: FiltroSelectDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiContatoSelect>>, TError,{data: FiltroSelectDTO}, TContext> => {

const mutationKey = ['postApiContatoSelect'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiContatoSelect>>, {data: FiltroSelectDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiContatoSelect(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiContatoSelectMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContatoSelect>>>
    export type PostApiContatoSelectMutationBody = FiltroSelectDTO
    export type PostApiContatoSelectMutationError = unknown

    export const usePostApiContatoSelect = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiContatoSelect>>, TError,{data: FiltroSelectDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiContatoSelect>>,
        TError,
        {data: FiltroSelectDTO},
        TContext
      > => {

      const mutationOptions = getPostApiContatoSelectMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    