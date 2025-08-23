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
  ConfiguracaoDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const getApiConfiguracaoLogo = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Configuracao/logo`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiConfiguracaoLogoQueryKey = () => {
    return [`/api/Configuracao/logo`] as const;
    }

    
export const getGetApiConfiguracaoLogoQueryOptions = <TData = Awaited<ReturnType<typeof getApiConfiguracaoLogo>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiConfiguracaoLogo>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiConfiguracaoLogoQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiConfiguracaoLogo>>> = ({ signal }) => getApiConfiguracaoLogo(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiConfiguracaoLogo>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiConfiguracaoLogoQueryResult = NonNullable<Awaited<ReturnType<typeof getApiConfiguracaoLogo>>>
export type GetApiConfiguracaoLogoQueryError = unknown


export function useGetApiConfiguracaoLogo<TData = Awaited<ReturnType<typeof getApiConfiguracaoLogo>>, TError = unknown>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiConfiguracaoLogo>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiConfiguracaoLogo>>,
          TError,
          Awaited<ReturnType<typeof getApiConfiguracaoLogo>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiConfiguracaoLogo<TData = Awaited<ReturnType<typeof getApiConfiguracaoLogo>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiConfiguracaoLogo>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiConfiguracaoLogo>>,
          TError,
          Awaited<ReturnType<typeof getApiConfiguracaoLogo>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiConfiguracaoLogo<TData = Awaited<ReturnType<typeof getApiConfiguracaoLogo>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiConfiguracaoLogo>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiConfiguracaoLogo<TData = Awaited<ReturnType<typeof getApiConfiguracaoLogo>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiConfiguracaoLogo>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiConfiguracaoLogoQueryOptions(options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getApiConfiguracao = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Configuracao`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiConfiguracaoQueryKey = () => {
    return [`/api/Configuracao`] as const;
    }

    
export const getGetApiConfiguracaoQueryOptions = <TData = Awaited<ReturnType<typeof getApiConfiguracao>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiConfiguracao>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiConfiguracaoQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiConfiguracao>>> = ({ signal }) => getApiConfiguracao(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiConfiguracao>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiConfiguracaoQueryResult = NonNullable<Awaited<ReturnType<typeof getApiConfiguracao>>>
export type GetApiConfiguracaoQueryError = unknown


export function useGetApiConfiguracao<TData = Awaited<ReturnType<typeof getApiConfiguracao>>, TError = unknown>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiConfiguracao>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiConfiguracao>>,
          TError,
          Awaited<ReturnType<typeof getApiConfiguracao>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiConfiguracao<TData = Awaited<ReturnType<typeof getApiConfiguracao>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiConfiguracao>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiConfiguracao>>,
          TError,
          Awaited<ReturnType<typeof getApiConfiguracao>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiConfiguracao<TData = Awaited<ReturnType<typeof getApiConfiguracao>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiConfiguracao>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiConfiguracao<TData = Awaited<ReturnType<typeof getApiConfiguracao>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiConfiguracao>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiConfiguracaoQueryOptions(options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const postApiConfiguracao = (
    configuracaoDTO: ConfiguracaoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Configuracao`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: configuracaoDTO, signal
    },
      options);
    }
  


export const getPostApiConfiguracaoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiConfiguracao>>, TError,{data: ConfiguracaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiConfiguracao>>, TError,{data: ConfiguracaoDTO}, TContext> => {

const mutationKey = ['postApiConfiguracao'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiConfiguracao>>, {data: ConfiguracaoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiConfiguracao(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiConfiguracaoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiConfiguracao>>>
    export type PostApiConfiguracaoMutationBody = ConfiguracaoDTO
    export type PostApiConfiguracaoMutationError = unknown

    export const usePostApiConfiguracao = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiConfiguracao>>, TError,{data: ConfiguracaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiConfiguracao>>,
        TError,
        {data: ConfiguracaoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiConfiguracaoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    