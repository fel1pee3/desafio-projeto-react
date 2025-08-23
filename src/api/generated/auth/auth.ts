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
  LoginInputDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const getApiAuthLogado = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Auth/Logado`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiAuthLogadoQueryKey = () => {
    return [`/api/Auth/Logado`] as const;
    }

    
export const getGetApiAuthLogadoQueryOptions = <TData = Awaited<ReturnType<typeof getApiAuthLogado>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAuthLogado>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiAuthLogadoQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiAuthLogado>>> = ({ signal }) => getApiAuthLogado(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiAuthLogado>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiAuthLogadoQueryResult = NonNullable<Awaited<ReturnType<typeof getApiAuthLogado>>>
export type GetApiAuthLogadoQueryError = unknown


export function useGetApiAuthLogado<TData = Awaited<ReturnType<typeof getApiAuthLogado>>, TError = unknown>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAuthLogado>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiAuthLogado>>,
          TError,
          Awaited<ReturnType<typeof getApiAuthLogado>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiAuthLogado<TData = Awaited<ReturnType<typeof getApiAuthLogado>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAuthLogado>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiAuthLogado>>,
          TError,
          Awaited<ReturnType<typeof getApiAuthLogado>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiAuthLogado<TData = Awaited<ReturnType<typeof getApiAuthLogado>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAuthLogado>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiAuthLogado<TData = Awaited<ReturnType<typeof getApiAuthLogado>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiAuthLogado>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiAuthLogadoQueryOptions(options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const putApiAuthLogin = (
    loginInputDTO: LoginInputDTO,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<null>(
      {url: `/api/Auth/login`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: loginInputDTO
    },
      options);
    }
  


export const getPutApiAuthLoginMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiAuthLogin>>, TError,{data: LoginInputDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiAuthLogin>>, TError,{data: LoginInputDTO}, TContext> => {

const mutationKey = ['putApiAuthLogin'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiAuthLogin>>, {data: LoginInputDTO}> = (props) => {
          const {data} = props ?? {};

          return  putApiAuthLogin(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiAuthLoginMutationResult = NonNullable<Awaited<ReturnType<typeof putApiAuthLogin>>>
    export type PutApiAuthLoginMutationBody = LoginInputDTO
    export type PutApiAuthLoginMutationError = unknown

    export const usePutApiAuthLogin = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiAuthLogin>>, TError,{data: LoginInputDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiAuthLogin>>,
        TError,
        {data: LoginInputDTO},
        TContext
      > => {

      const mutationOptions = getPutApiAuthLoginMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    