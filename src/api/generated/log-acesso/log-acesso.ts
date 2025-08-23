import {
  useMutation
} from '@tanstack/react-query';
import type {
  MutationFunction,
  QueryClient,
  UseMutationOptions,
  UseMutationResult
} from '@tanstack/react-query';

import type {
  LogAcessoDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postApiLogAcesso = (
    logAcessoDTO: LogAcessoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/LogAcesso`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: logAcessoDTO, signal
    },
      options);
    }
  


export const getPostApiLogAcessoMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiLogAcesso>>, TError,{data: LogAcessoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiLogAcesso>>, TError,{data: LogAcessoDTO}, TContext> => {

const mutationKey = ['postApiLogAcesso'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiLogAcesso>>, {data: LogAcessoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiLogAcesso(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiLogAcessoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiLogAcesso>>>
    export type PostApiLogAcessoMutationBody = LogAcessoDTO
    export type PostApiLogAcessoMutationError = unknown

    export const usePostApiLogAcesso = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiLogAcesso>>, TError,{data: LogAcessoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiLogAcesso>>,
        TError,
        {data: LogAcessoDTO},
        TContext
      > => {

      const mutationOptions = getPostApiLogAcessoMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    