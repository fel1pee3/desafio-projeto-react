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
  FiltroSelectViaturaDTO,
  FiltroViaturaDTO,
  ViaturaDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postApiViaturaListagem = (
    filtroViaturaDTO: FiltroViaturaDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Viatura/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroViaturaDTO, signal
    },
      options);
    }
  


export const getPostApiViaturaListagemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiViaturaListagem>>, TError,{data: FiltroViaturaDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiViaturaListagem>>, TError,{data: FiltroViaturaDTO}, TContext> => {

const mutationKey = ['postApiViaturaListagem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiViaturaListagem>>, {data: FiltroViaturaDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiViaturaListagem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiViaturaListagemMutationResult = NonNullable<Awaited<ReturnType<typeof postApiViaturaListagem>>>
    export type PostApiViaturaListagemMutationBody = FiltroViaturaDTO
    export type PostApiViaturaListagemMutationError = unknown

    export const usePostApiViaturaListagem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiViaturaListagem>>, TError,{data: FiltroViaturaDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiViaturaListagem>>,
        TError,
        {data: FiltroViaturaDTO},
        TContext
      > => {

      const mutationOptions = getPostApiViaturaListagemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiViaturaId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Viatura/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiViaturaIdQueryKey = (id?: number,) => {
    return [`/api/Viatura/${id}`] as const;
    }

    
export const getGetApiViaturaIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiViaturaId>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiViaturaId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiViaturaIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiViaturaId>>> = ({ signal }) => getApiViaturaId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiViaturaId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiViaturaIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiViaturaId>>>
export type GetApiViaturaIdQueryError = unknown


export function useGetApiViaturaId<TData = Awaited<ReturnType<typeof getApiViaturaId>>, TError = unknown>(
 id: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiViaturaId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiViaturaId>>,
          TError,
          Awaited<ReturnType<typeof getApiViaturaId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiViaturaId<TData = Awaited<ReturnType<typeof getApiViaturaId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiViaturaId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiViaturaId>>,
          TError,
          Awaited<ReturnType<typeof getApiViaturaId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiViaturaId<TData = Awaited<ReturnType<typeof getApiViaturaId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiViaturaId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiViaturaId<TData = Awaited<ReturnType<typeof getApiViaturaId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiViaturaId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiViaturaIdQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const deleteApiViaturaId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/Viatura/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiViaturaIdMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiViaturaId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiViaturaId>>, TError,{id: number}, TContext> => {

const mutationKey = ['deleteApiViaturaId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiViaturaId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiViaturaId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiViaturaIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiViaturaId>>>
    
    export type DeleteApiViaturaIdMutationError = unknown

    export const useDeleteApiViaturaId = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiViaturaId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiViaturaId>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiViaturaIdMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiViatura = (
    viaturaDTO: ViaturaDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Viatura`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: viaturaDTO, signal
    },
      options);
    }
  


export const getPostApiViaturaMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiViatura>>, TError,{data: ViaturaDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiViatura>>, TError,{data: ViaturaDTO}, TContext> => {

const mutationKey = ['postApiViatura'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiViatura>>, {data: ViaturaDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiViatura(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiViaturaMutationResult = NonNullable<Awaited<ReturnType<typeof postApiViatura>>>
    export type PostApiViaturaMutationBody = ViaturaDTO
    export type PostApiViaturaMutationError = unknown

    export const usePostApiViatura = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiViatura>>, TError,{data: ViaturaDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiViatura>>,
        TError,
        {data: ViaturaDTO},
        TContext
      > => {

      const mutationOptions = getPostApiViaturaMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const putApiViatura = (
    viaturaDTO: ViaturaDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/Viatura`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: viaturaDTO
    },
      options);
    }
  


export const getPutApiViaturaMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiViatura>>, TError,{data: ViaturaDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiViatura>>, TError,{data: ViaturaDTO}, TContext> => {

const mutationKey = ['putApiViatura'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiViatura>>, {data: ViaturaDTO}> = (props) => {
          const {data} = props ?? {};

          return  putApiViatura(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiViaturaMutationResult = NonNullable<Awaited<ReturnType<typeof putApiViatura>>>
    export type PutApiViaturaMutationBody = ViaturaDTO
    export type PutApiViaturaMutationError = unknown

    export const usePutApiViatura = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiViatura>>, TError,{data: ViaturaDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiViatura>>,
        TError,
        {data: ViaturaDTO},
        TContext
      > => {

      const mutationOptions = getPutApiViaturaMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiViaturaSelect = (
    filtroSelectViaturaDTO: FiltroSelectViaturaDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Viatura/Select`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroSelectViaturaDTO, signal
    },
      options);
    }
  


export const getPostApiViaturaSelectMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiViaturaSelect>>, TError,{data: FiltroSelectViaturaDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiViaturaSelect>>, TError,{data: FiltroSelectViaturaDTO}, TContext> => {

const mutationKey = ['postApiViaturaSelect'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiViaturaSelect>>, {data: FiltroSelectViaturaDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiViaturaSelect(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiViaturaSelectMutationResult = NonNullable<Awaited<ReturnType<typeof postApiViaturaSelect>>>
    export type PostApiViaturaSelectMutationBody = FiltroSelectViaturaDTO
    export type PostApiViaturaSelectMutationError = unknown

    export const usePostApiViaturaSelect = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiViaturaSelect>>, TError,{data: FiltroSelectViaturaDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiViaturaSelect>>,
        TError,
        {data: FiltroSelectViaturaDTO},
        TContext
      > => {

      const mutationOptions = getPostApiViaturaSelectMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    