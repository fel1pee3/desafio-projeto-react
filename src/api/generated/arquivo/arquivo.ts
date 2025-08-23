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

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postApiArquivo = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Arquivo`, method: 'POST', signal
    },
      options);
    }
  


export const getPostApiArquivoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiArquivo>>, TError,void, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiArquivo>>, TError,void, TContext> => {

const mutationKey = ['postApiArquivo'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiArquivo>>, void> = () => {
          

          return  postApiArquivo(requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiArquivoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiArquivo>>>
    
    export type PostApiArquivoMutationError = unknown

    export const usePostApiArquivo = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiArquivo>>, TError,void, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiArquivo>>,
        TError,
        void,
        TContext
      > => {

      const mutationOptions = getPostApiArquivoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    export const getApiArquivoDownloadIdArquivo = (
    idArquivo: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Arquivo/download/${idArquivo}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetApiArquivoDownloadIdArquivoQueryKey = (idArquivo?: number,) => {
    return [`/api/Arquivo/download/${idArquivo}`] as const;
    }

    
export const getGetApiArquivoDownloadIdArquivoQueryOptions = <TData = Awaited<ReturnType<typeof getApiArquivoDownloadIdArquivo>>, TError = unknown>(idArquivo: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiArquivoDownloadIdArquivo>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiArquivoDownloadIdArquivoQueryKey(idArquivo);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiArquivoDownloadIdArquivo>>> = ({ signal }) => getApiArquivoDownloadIdArquivo(idArquivo, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(idArquivo), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiArquivoDownloadIdArquivo>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiArquivoDownloadIdArquivoQueryResult = NonNullable<Awaited<ReturnType<typeof getApiArquivoDownloadIdArquivo>>>
export type GetApiArquivoDownloadIdArquivoQueryError = unknown


export function useGetApiArquivoDownloadIdArquivo<TData = Awaited<ReturnType<typeof getApiArquivoDownloadIdArquivo>>, TError = unknown>(
 idArquivo: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiArquivoDownloadIdArquivo>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiArquivoDownloadIdArquivo>>,
          TError,
          Awaited<ReturnType<typeof getApiArquivoDownloadIdArquivo>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiArquivoDownloadIdArquivo<TData = Awaited<ReturnType<typeof getApiArquivoDownloadIdArquivo>>, TError = unknown>(
 idArquivo: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiArquivoDownloadIdArquivo>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiArquivoDownloadIdArquivo>>,
          TError,
          Awaited<ReturnType<typeof getApiArquivoDownloadIdArquivo>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiArquivoDownloadIdArquivo<TData = Awaited<ReturnType<typeof getApiArquivoDownloadIdArquivo>>, TError = unknown>(
 idArquivo: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiArquivoDownloadIdArquivo>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetApiArquivoDownloadIdArquivo<TData = Awaited<ReturnType<typeof getApiArquivoDownloadIdArquivo>>, TError = unknown>(
 idArquivo: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiArquivoDownloadIdArquivo>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiArquivoDownloadIdArquivoQueryOptions(idArquivo,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



