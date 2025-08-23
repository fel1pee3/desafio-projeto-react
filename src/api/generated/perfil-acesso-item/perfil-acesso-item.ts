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
  FiltroPerfilAcessoItemDTO,
  PerfilAcessoItemDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const getApiPerfilAcessoItemId = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/PerfilAcessoItem/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiPerfilAcessoItemIdQueryKey = (id?: number,) => {
    return [`/api/PerfilAcessoItem/${id}`] as const;
    }

    
export const getGetApiPerfilAcessoItemIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiPerfilAcessoItemId>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItemId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiPerfilAcessoItemIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiPerfilAcessoItemId>>> = ({ signal }) => getApiPerfilAcessoItemId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItemId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiPerfilAcessoItemIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPerfilAcessoItemId>>>
export type GetApiPerfilAcessoItemIdQueryError = unknown


export function useGetApiPerfilAcessoItemId<TData = Awaited<ReturnType<typeof getApiPerfilAcessoItemId>>, TError = unknown>(
 id: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItemId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiPerfilAcessoItemId>>,
          TError,
          Awaited<ReturnType<typeof getApiPerfilAcessoItemId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiPerfilAcessoItemId<TData = Awaited<ReturnType<typeof getApiPerfilAcessoItemId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItemId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiPerfilAcessoItemId>>,
          TError,
          Awaited<ReturnType<typeof getApiPerfilAcessoItemId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiPerfilAcessoItemId<TData = Awaited<ReturnType<typeof getApiPerfilAcessoItemId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItemId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiPerfilAcessoItemId<TData = Awaited<ReturnType<typeof getApiPerfilAcessoItemId>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItemId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiPerfilAcessoItemIdQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getApiPerfilAcessoItem = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/PerfilAcessoItem`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiPerfilAcessoItemQueryKey = () => {
    return [`/api/PerfilAcessoItem`] as const;
    }

    
export const getGetApiPerfilAcessoItemQueryOptions = <TData = Awaited<ReturnType<typeof getApiPerfilAcessoItem>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItem>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiPerfilAcessoItemQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiPerfilAcessoItem>>> = ({ signal }) => getApiPerfilAcessoItem(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItem>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiPerfilAcessoItemQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPerfilAcessoItem>>>
export type GetApiPerfilAcessoItemQueryError = unknown


export function useGetApiPerfilAcessoItem<TData = Awaited<ReturnType<typeof getApiPerfilAcessoItem>>, TError = unknown>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItem>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiPerfilAcessoItem>>,
          TError,
          Awaited<ReturnType<typeof getApiPerfilAcessoItem>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiPerfilAcessoItem<TData = Awaited<ReturnType<typeof getApiPerfilAcessoItem>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItem>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiPerfilAcessoItem>>,
          TError,
          Awaited<ReturnType<typeof getApiPerfilAcessoItem>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiPerfilAcessoItem<TData = Awaited<ReturnType<typeof getApiPerfilAcessoItem>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItem>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiPerfilAcessoItem<TData = Awaited<ReturnType<typeof getApiPerfilAcessoItem>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItem>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiPerfilAcessoItemQueryOptions(options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const postApiPerfilAcessoItem = (
    perfilAcessoItemDTO: PerfilAcessoItemDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/PerfilAcessoItem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: perfilAcessoItemDTO, signal
    },
      options);
    }
  


export const getPostApiPerfilAcessoItemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiPerfilAcessoItem>>, TError,{data: PerfilAcessoItemDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiPerfilAcessoItem>>, TError,{data: PerfilAcessoItemDTO}, TContext> => {

const mutationKey = ['postApiPerfilAcessoItem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiPerfilAcessoItem>>, {data: PerfilAcessoItemDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiPerfilAcessoItem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiPerfilAcessoItemMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPerfilAcessoItem>>>
    export type PostApiPerfilAcessoItemMutationBody = PerfilAcessoItemDTO
    export type PostApiPerfilAcessoItemMutationError = unknown

    export const usePostApiPerfilAcessoItem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiPerfilAcessoItem>>, TError,{data: PerfilAcessoItemDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiPerfilAcessoItem>>,
        TError,
        {data: PerfilAcessoItemDTO},
        TContext
      > => {

      const mutationOptions = getPostApiPerfilAcessoItemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId = (
    perfilId: number,
    funcionalidadeId: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/PerfilAcessoItem/perfil/${perfilId}/funcionalidade/${funcionalidadeId}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeIdQueryKey = (perfilId?: number,
    funcionalidadeId?: number,) => {
    return [`/api/PerfilAcessoItem/perfil/${perfilId}/funcionalidade/${funcionalidadeId}`] as const;
    }

    
export const getGetApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId>>, TError = unknown>(perfilId: number,
    funcionalidadeId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeIdQueryKey(perfilId,funcionalidadeId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId>>> = ({ signal }) => getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId(perfilId,funcionalidadeId, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(perfilId && funcionalidadeId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId>>>
export type GetApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeIdQueryError = unknown


export function useGetApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId<TData = Awaited<ReturnType<typeof getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId>>, TError = unknown>(
 perfilId: number,
    funcionalidadeId: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId>>,
          TError,
          Awaited<ReturnType<typeof getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId<TData = Awaited<ReturnType<typeof getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId>>, TError = unknown>(
 perfilId: number,
    funcionalidadeId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId>>,
          TError,
          Awaited<ReturnType<typeof getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId<TData = Awaited<ReturnType<typeof getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId>>, TError = unknown>(
 perfilId: number,
    funcionalidadeId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId<TData = Awaited<ReturnType<typeof getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId>>, TError = unknown>(
 perfilId: number,
    funcionalidadeId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiPerfilAcessoItemPerfilPerfilIdFuncionalidadeFuncionalidadeIdQueryOptions(perfilId,funcionalidadeId,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const postApiPerfilAcessoItemPerfil = (
    filtroPerfilAcessoItemDTO: FiltroPerfilAcessoItemDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/PerfilAcessoItem/perfil`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroPerfilAcessoItemDTO, signal
    },
      options);
    }
  


export const getPostApiPerfilAcessoItemPerfilMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiPerfilAcessoItemPerfil>>, TError,{data: FiltroPerfilAcessoItemDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiPerfilAcessoItemPerfil>>, TError,{data: FiltroPerfilAcessoItemDTO}, TContext> => {

const mutationKey = ['postApiPerfilAcessoItemPerfil'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiPerfilAcessoItemPerfil>>, {data: FiltroPerfilAcessoItemDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiPerfilAcessoItemPerfil(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiPerfilAcessoItemPerfilMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPerfilAcessoItemPerfil>>>
    export type PostApiPerfilAcessoItemPerfilMutationBody = FiltroPerfilAcessoItemDTO
    export type PostApiPerfilAcessoItemPerfilMutationError = unknown

    export const usePostApiPerfilAcessoItemPerfil = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiPerfilAcessoItemPerfil>>, TError,{data: FiltroPerfilAcessoItemDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiPerfilAcessoItemPerfil>>,
        TError,
        {data: FiltroPerfilAcessoItemDTO},
        TContext
      > => {

      const mutationOptions = getPostApiPerfilAcessoItemPerfilMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const putApiPerfilAcessoItemLiberarAcessosPerfilIdPerfil = (
    idPerfil: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/PerfilAcessoItem/LiberarAcessos/perfil/${idPerfil}`, method: 'PUT'
    },
      options);
    }
  


export const getPutApiPerfilAcessoItemLiberarAcessosPerfilIdPerfilMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiPerfilAcessoItemLiberarAcessosPerfilIdPerfil>>, TError,{idPerfil: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiPerfilAcessoItemLiberarAcessosPerfilIdPerfil>>, TError,{idPerfil: number}, TContext> => {

const mutationKey = ['putApiPerfilAcessoItemLiberarAcessosPerfilIdPerfil'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiPerfilAcessoItemLiberarAcessosPerfilIdPerfil>>, {idPerfil: number}> = (props) => {
          const {idPerfil} = props ?? {};

          return  putApiPerfilAcessoItemLiberarAcessosPerfilIdPerfil(idPerfil,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiPerfilAcessoItemLiberarAcessosPerfilIdPerfilMutationResult = NonNullable<Awaited<ReturnType<typeof putApiPerfilAcessoItemLiberarAcessosPerfilIdPerfil>>>
    
    export type PutApiPerfilAcessoItemLiberarAcessosPerfilIdPerfilMutationError = unknown

    export const usePutApiPerfilAcessoItemLiberarAcessosPerfilIdPerfil = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiPerfilAcessoItemLiberarAcessosPerfilIdPerfil>>, TError,{idPerfil: number}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiPerfilAcessoItemLiberarAcessosPerfilIdPerfil>>,
        TError,
        {idPerfil: number},
        TContext
      > => {

      const mutationOptions = getPutApiPerfilAcessoItemLiberarAcessosPerfilIdPerfilMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const deleteApiPerfilAcessoItemBloquearAcessosPerfilIdPerfil = (
    idPerfil: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/PerfilAcessoItem/BloquearAcessos/perfil/${idPerfil}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiPerfilAcessoItemBloquearAcessosPerfilIdPerfilMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiPerfilAcessoItemBloquearAcessosPerfilIdPerfil>>, TError,{idPerfil: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiPerfilAcessoItemBloquearAcessosPerfilIdPerfil>>, TError,{idPerfil: number}, TContext> => {

const mutationKey = ['deleteApiPerfilAcessoItemBloquearAcessosPerfilIdPerfil'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiPerfilAcessoItemBloquearAcessosPerfilIdPerfil>>, {idPerfil: number}> = (props) => {
          const {idPerfil} = props ?? {};

          return  deleteApiPerfilAcessoItemBloquearAcessosPerfilIdPerfil(idPerfil,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiPerfilAcessoItemBloquearAcessosPerfilIdPerfilMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiPerfilAcessoItemBloquearAcessosPerfilIdPerfil>>>
    
    export type DeleteApiPerfilAcessoItemBloquearAcessosPerfilIdPerfilMutationError = unknown

    export const useDeleteApiPerfilAcessoItemBloquearAcessosPerfilIdPerfil = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiPerfilAcessoItemBloquearAcessosPerfilIdPerfil>>, TError,{idPerfil: number}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiPerfilAcessoItemBloquearAcessosPerfilIdPerfil>>,
        TError,
        {idPerfil: number},
        TContext
      > => {

      const mutationOptions = getDeleteApiPerfilAcessoItemBloquearAcessosPerfilIdPerfilMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiPerfilAcessoItemAcessoFuncionalidade = (
    funcionalidade: string,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<string[]>(
      {url: `/api/PerfilAcessoItem/Acesso/${funcionalidade}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiPerfilAcessoItemAcessoFuncionalidadeQueryKey = (funcionalidade?: string,) => {
    return [`/api/PerfilAcessoItem/Acesso/${funcionalidade}`] as const;
    }

    
export const getGetApiPerfilAcessoItemAcessoFuncionalidadeQueryOptions = <TData = Awaited<ReturnType<typeof getApiPerfilAcessoItemAcessoFuncionalidade>>, TError = unknown>(funcionalidade: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItemAcessoFuncionalidade>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiPerfilAcessoItemAcessoFuncionalidadeQueryKey(funcionalidade);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiPerfilAcessoItemAcessoFuncionalidade>>> = ({ signal }) => getApiPerfilAcessoItemAcessoFuncionalidade(funcionalidade, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(funcionalidade), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItemAcessoFuncionalidade>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiPerfilAcessoItemAcessoFuncionalidadeQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPerfilAcessoItemAcessoFuncionalidade>>>
export type GetApiPerfilAcessoItemAcessoFuncionalidadeQueryError = unknown


export function useGetApiPerfilAcessoItemAcessoFuncionalidade<TData = Awaited<ReturnType<typeof getApiPerfilAcessoItemAcessoFuncionalidade>>, TError = unknown>(
 funcionalidade: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItemAcessoFuncionalidade>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiPerfilAcessoItemAcessoFuncionalidade>>,
          TError,
          Awaited<ReturnType<typeof getApiPerfilAcessoItemAcessoFuncionalidade>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiPerfilAcessoItemAcessoFuncionalidade<TData = Awaited<ReturnType<typeof getApiPerfilAcessoItemAcessoFuncionalidade>>, TError = unknown>(
 funcionalidade: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItemAcessoFuncionalidade>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiPerfilAcessoItemAcessoFuncionalidade>>,
          TError,
          Awaited<ReturnType<typeof getApiPerfilAcessoItemAcessoFuncionalidade>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiPerfilAcessoItemAcessoFuncionalidade<TData = Awaited<ReturnType<typeof getApiPerfilAcessoItemAcessoFuncionalidade>>, TError = unknown>(
 funcionalidade: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItemAcessoFuncionalidade>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiPerfilAcessoItemAcessoFuncionalidade<TData = Awaited<ReturnType<typeof getApiPerfilAcessoItemAcessoFuncionalidade>>, TError = unknown>(
 funcionalidade: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiPerfilAcessoItemAcessoFuncionalidade>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiPerfilAcessoItemAcessoFuncionalidadeQueryOptions(funcionalidade,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



