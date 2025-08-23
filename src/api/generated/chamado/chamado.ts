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
  ChamadoDTO,
  FiltroChamadoDTO,
  FiltroSelectDTO,
  GetApiChamadoRejeitrarParams
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postApiChamadoListagem = (
    filtroChamadoDTO: FiltroChamadoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Chamado/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroChamadoDTO, signal
    },
      options);
    }
  


export const getPostApiChamadoListagemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiChamadoListagem>>, TError,{data: FiltroChamadoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiChamadoListagem>>, TError,{data: FiltroChamadoDTO}, TContext> => {

const mutationKey = ['postApiChamadoListagem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiChamadoListagem>>, {data: FiltroChamadoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiChamadoListagem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiChamadoListagemMutationResult = NonNullable<Awaited<ReturnType<typeof postApiChamadoListagem>>>
    export type PostApiChamadoListagemMutationBody = FiltroChamadoDTO
    export type PostApiChamadoListagemMutationError = unknown

    export const usePostApiChamadoListagem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiChamadoListagem>>, TError,{data: FiltroChamadoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiChamadoListagem>>,
        TError,
        {data: FiltroChamadoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiChamadoListagemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiChamadoMapa = (
    filtroChamadoDTO: FiltroChamadoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Chamado/mapa`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroChamadoDTO, signal
    },
      options);
    }
  


export const getPostApiChamadoMapaMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiChamadoMapa>>, TError,{data: FiltroChamadoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiChamadoMapa>>, TError,{data: FiltroChamadoDTO}, TContext> => {

const mutationKey = ['postApiChamadoMapa'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiChamadoMapa>>, {data: FiltroChamadoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiChamadoMapa(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiChamadoMapaMutationResult = NonNullable<Awaited<ReturnType<typeof postApiChamadoMapa>>>
    export type PostApiChamadoMapaMutationBody = FiltroChamadoDTO
    export type PostApiChamadoMapaMutationError = unknown

    export const usePostApiChamadoMapa = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiChamadoMapa>>, TError,{data: FiltroChamadoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiChamadoMapa>>,
        TError,
        {data: FiltroChamadoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiChamadoMapaMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiChamadoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Chamado/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiChamadoIdQueryKey = (id?: number,) => {
    return [`/api/Chamado/${id}`] as const;
    }

    
export const getGetApiChamadoIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiChamadoId>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChamadoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiChamadoIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiChamadoId>>> = ({ signal }) => getApiChamadoId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiChamadoId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiChamadoIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiChamadoId>>>
export type GetApiChamadoIdQueryError = unknown


export function useGetApiChamadoId<TData = Awaited<ReturnType<typeof getApiChamadoId>>, TError = unknown>(
 id: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChamadoId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiChamadoId>>,
          TError,
          Awaited<ReturnType<typeof getApiChamadoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiChamadoId<TData = Awaited<ReturnType<typeof getApiChamadoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChamadoId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiChamadoId>>,
          TError,
          Awaited<ReturnType<typeof getApiChamadoId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiChamadoId<TData = Awaited<ReturnType<typeof getApiChamadoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChamadoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiChamadoId<TData = Awaited<ReturnType<typeof getApiChamadoId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChamadoId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiChamadoIdQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const deleteApiChamadoId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/Chamado/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiChamadoIdMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiChamadoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiChamadoId>>, TError,{id: number}, TContext> => {

const mutationKey = ['deleteApiChamadoId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiChamadoId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiChamadoId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiChamadoIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiChamadoId>>>
    
    export type DeleteApiChamadoIdMutationError = unknown

    export const useDeleteApiChamadoId = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiChamadoId>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiChamadoId>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiChamadoIdMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const postApiChamado = (
    chamadoDTO: ChamadoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Chamado`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: chamadoDTO, signal
    },
      options);
    }
  


export const getPostApiChamadoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiChamado>>, TError,{data: ChamadoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiChamado>>, TError,{data: ChamadoDTO}, TContext> => {

const mutationKey = ['postApiChamado'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiChamado>>, {data: ChamadoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiChamado(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiChamadoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiChamado>>>
    export type PostApiChamadoMutationBody = ChamadoDTO
    export type PostApiChamadoMutationError = unknown

    export const usePostApiChamado = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiChamado>>, TError,{data: ChamadoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiChamado>>,
        TError,
        {data: ChamadoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiChamadoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiChamadoRejeitrar = (
    params?: GetApiChamadoRejeitrarParams,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Chamado/Rejeitrar`, method: 'GET',
        params, signal
    },
      options);
    }
  

export const getGetApiChamadoRejeitrarQueryKey = (params?: GetApiChamadoRejeitrarParams,) => {
    return [`/api/Chamado/Rejeitrar`, ...(params ? [params]: [])] as const;
    }

    
export const getGetApiChamadoRejeitrarQueryOptions = <TData = Awaited<ReturnType<typeof getApiChamadoRejeitrar>>, TError = unknown>(params?: GetApiChamadoRejeitrarParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChamadoRejeitrar>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiChamadoRejeitrarQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiChamadoRejeitrar>>> = ({ signal }) => getApiChamadoRejeitrar(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiChamadoRejeitrar>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiChamadoRejeitrarQueryResult = NonNullable<Awaited<ReturnType<typeof getApiChamadoRejeitrar>>>
export type GetApiChamadoRejeitrarQueryError = unknown


export function useGetApiChamadoRejeitrar<TData = Awaited<ReturnType<typeof getApiChamadoRejeitrar>>, TError = unknown>(
 params: undefined |  GetApiChamadoRejeitrarParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChamadoRejeitrar>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiChamadoRejeitrar>>,
          TError,
          Awaited<ReturnType<typeof getApiChamadoRejeitrar>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiChamadoRejeitrar<TData = Awaited<ReturnType<typeof getApiChamadoRejeitrar>>, TError = unknown>(
 params?: GetApiChamadoRejeitrarParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChamadoRejeitrar>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiChamadoRejeitrar>>,
          TError,
          Awaited<ReturnType<typeof getApiChamadoRejeitrar>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiChamadoRejeitrar<TData = Awaited<ReturnType<typeof getApiChamadoRejeitrar>>, TError = unknown>(
 params?: GetApiChamadoRejeitrarParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChamadoRejeitrar>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiChamadoRejeitrar<TData = Awaited<ReturnType<typeof getApiChamadoRejeitrar>>, TError = unknown>(
 params?: GetApiChamadoRejeitrarParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiChamadoRejeitrar>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiChamadoRejeitrarQueryOptions(params,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const postApiChamadoSelectBairro = (
    filtroSelectDTO: FiltroSelectDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Chamado/select/bairro`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroSelectDTO, signal
    },
      options);
    }
  


export const getPostApiChamadoSelectBairroMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiChamadoSelectBairro>>, TError,{data: FiltroSelectDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiChamadoSelectBairro>>, TError,{data: FiltroSelectDTO}, TContext> => {

const mutationKey = ['postApiChamadoSelectBairro'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiChamadoSelectBairro>>, {data: FiltroSelectDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiChamadoSelectBairro(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiChamadoSelectBairroMutationResult = NonNullable<Awaited<ReturnType<typeof postApiChamadoSelectBairro>>>
    export type PostApiChamadoSelectBairroMutationBody = FiltroSelectDTO
    export type PostApiChamadoSelectBairroMutationError = unknown

    export const usePostApiChamadoSelectBairro = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiChamadoSelectBairro>>, TError,{data: FiltroSelectDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiChamadoSelectBairro>>,
        TError,
        {data: FiltroSelectDTO},
        TContext
      > => {

      const mutationOptions = getPostApiChamadoSelectBairroMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    