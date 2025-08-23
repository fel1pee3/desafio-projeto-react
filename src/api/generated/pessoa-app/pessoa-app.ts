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
  PessoaAppDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const getIntegracaoPessoaAppTokenIdentificador = (
    token: string,
    identificador: string,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/integracao/PessoaApp/${token}/${identificador}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetIntegracaoPessoaAppTokenIdentificadorQueryKey = (token?: string,
    identificador?: string,) => {
    return [`/integracao/PessoaApp/${token}/${identificador}`] as const;
    }

    
export const getGetIntegracaoPessoaAppTokenIdentificadorQueryOptions = <TData = Awaited<ReturnType<typeof getIntegracaoPessoaAppTokenIdentificador>>, TError = unknown>(token: string,
    identificador: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getIntegracaoPessoaAppTokenIdentificador>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetIntegracaoPessoaAppTokenIdentificadorQueryKey(token,identificador);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getIntegracaoPessoaAppTokenIdentificador>>> = ({ signal }) => getIntegracaoPessoaAppTokenIdentificador(token,identificador, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(token && identificador), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getIntegracaoPessoaAppTokenIdentificador>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetIntegracaoPessoaAppTokenIdentificadorQueryResult = NonNullable<Awaited<ReturnType<typeof getIntegracaoPessoaAppTokenIdentificador>>>
export type GetIntegracaoPessoaAppTokenIdentificadorQueryError = unknown


export function useGetIntegracaoPessoaAppTokenIdentificador<TData = Awaited<ReturnType<typeof getIntegracaoPessoaAppTokenIdentificador>>, TError = unknown>(
 token: string,
    identificador: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getIntegracaoPessoaAppTokenIdentificador>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getIntegracaoPessoaAppTokenIdentificador>>,
          TError,
          Awaited<ReturnType<typeof getIntegracaoPessoaAppTokenIdentificador>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetIntegracaoPessoaAppTokenIdentificador<TData = Awaited<ReturnType<typeof getIntegracaoPessoaAppTokenIdentificador>>, TError = unknown>(
 token: string,
    identificador: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getIntegracaoPessoaAppTokenIdentificador>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getIntegracaoPessoaAppTokenIdentificador>>,
          TError,
          Awaited<ReturnType<typeof getIntegracaoPessoaAppTokenIdentificador>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetIntegracaoPessoaAppTokenIdentificador<TData = Awaited<ReturnType<typeof getIntegracaoPessoaAppTokenIdentificador>>, TError = unknown>(
 token: string,
    identificador: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getIntegracaoPessoaAppTokenIdentificador>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetIntegracaoPessoaAppTokenIdentificador<TData = Awaited<ReturnType<typeof getIntegracaoPessoaAppTokenIdentificador>>, TError = unknown>(
 token: string,
    identificador: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getIntegracaoPessoaAppTokenIdentificador>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetIntegracaoPessoaAppTokenIdentificadorQueryOptions(token,identificador,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const postIntegracaoPessoaApp = (
    pessoaAppDTO: PessoaAppDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/integracao/PessoaApp`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: pessoaAppDTO, signal
    },
      options);
    }
  


export const getPostIntegracaoPessoaAppMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postIntegracaoPessoaApp>>, TError,{data: PessoaAppDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postIntegracaoPessoaApp>>, TError,{data: PessoaAppDTO}, TContext> => {

const mutationKey = ['postIntegracaoPessoaApp'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postIntegracaoPessoaApp>>, {data: PessoaAppDTO}> = (props) => {
          const {data} = props ?? {};

          return  postIntegracaoPessoaApp(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostIntegracaoPessoaAppMutationResult = NonNullable<Awaited<ReturnType<typeof postIntegracaoPessoaApp>>>
    export type PostIntegracaoPessoaAppMutationBody = PessoaAppDTO
    export type PostIntegracaoPessoaAppMutationError = unknown

    export const usePostIntegracaoPessoaApp = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postIntegracaoPessoaApp>>, TError,{data: PessoaAppDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postIntegracaoPessoaApp>>,
        TError,
        {data: PessoaAppDTO},
        TContext
      > => {

      const mutationOptions = getPostIntegracaoPessoaAppMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    