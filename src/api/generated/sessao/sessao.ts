import {
  useQuery
} from '@tanstack/react-query';
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryClient,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const getApiSessaoValidar = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Sessao/validar`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiSessaoValidarQueryKey = () => {
    return [`/api/Sessao/validar`] as const;
    }

    
export const getGetApiSessaoValidarQueryOptions = <TData = Awaited<ReturnType<typeof getApiSessaoValidar>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiSessaoValidar>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiSessaoValidarQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiSessaoValidar>>> = ({ signal }) => getApiSessaoValidar(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiSessaoValidar>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiSessaoValidarQueryResult = NonNullable<Awaited<ReturnType<typeof getApiSessaoValidar>>>
export type GetApiSessaoValidarQueryError = unknown


export function useGetApiSessaoValidar<TData = Awaited<ReturnType<typeof getApiSessaoValidar>>, TError = unknown>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiSessaoValidar>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiSessaoValidar>>,
          TError,
          Awaited<ReturnType<typeof getApiSessaoValidar>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiSessaoValidar<TData = Awaited<ReturnType<typeof getApiSessaoValidar>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiSessaoValidar>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiSessaoValidar>>,
          TError,
          Awaited<ReturnType<typeof getApiSessaoValidar>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiSessaoValidar<TData = Awaited<ReturnType<typeof getApiSessaoValidar>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiSessaoValidar>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiSessaoValidar<TData = Awaited<ReturnType<typeof getApiSessaoValidar>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiSessaoValidar>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiSessaoValidarQueryOptions(options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



