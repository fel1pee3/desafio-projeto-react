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



export const getWsIdentity = (
    identity: string,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/ws/${identity}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetWsIdentityQueryKey = (identity?: string,) => {
    return [`/ws/${identity}`] as const;
    }

    
export const getGetWsIdentityQueryOptions = <TData = Awaited<ReturnType<typeof getWsIdentity>>, TError = unknown>(identity: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getWsIdentity>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetWsIdentityQueryKey(identity);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getWsIdentity>>> = ({ signal }) => getWsIdentity(identity, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(identity), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getWsIdentity>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetWsIdentityQueryResult = NonNullable<Awaited<ReturnType<typeof getWsIdentity>>>
export type GetWsIdentityQueryError = unknown


export function useGetWsIdentity<TData = Awaited<ReturnType<typeof getWsIdentity>>, TError = unknown>(
 identity: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getWsIdentity>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getWsIdentity>>,
          TError,
          Awaited<ReturnType<typeof getWsIdentity>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetWsIdentity<TData = Awaited<ReturnType<typeof getWsIdentity>>, TError = unknown>(
 identity: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getWsIdentity>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getWsIdentity>>,
          TError,
          Awaited<ReturnType<typeof getWsIdentity>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetWsIdentity<TData = Awaited<ReturnType<typeof getWsIdentity>>, TError = unknown>(
 identity: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getWsIdentity>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetWsIdentity<TData = Awaited<ReturnType<typeof getWsIdentity>>, TError = unknown>(
 identity: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getWsIdentity>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetWsIdentityQueryOptions(identity,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



