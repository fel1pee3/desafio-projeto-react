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
  AuthAppDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postIntegracaoAuthApp = (
    authAppDTO: AuthAppDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/integracao/AuthApp`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: authAppDTO, signal
    },
      options);
    }
  


export const getPostIntegracaoAuthAppMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postIntegracaoAuthApp>>, TError,{data: AuthAppDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postIntegracaoAuthApp>>, TError,{data: AuthAppDTO}, TContext> => {

const mutationKey = ['postIntegracaoAuthApp'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postIntegracaoAuthApp>>, {data: AuthAppDTO}> = (props) => {
          const {data} = props ?? {};

          return  postIntegracaoAuthApp(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostIntegracaoAuthAppMutationResult = NonNullable<Awaited<ReturnType<typeof postIntegracaoAuthApp>>>
    export type PostIntegracaoAuthAppMutationBody = AuthAppDTO
    export type PostIntegracaoAuthAppMutationError = unknown

    export const usePostIntegracaoAuthApp = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postIntegracaoAuthApp>>, TError,{data: AuthAppDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postIntegracaoAuthApp>>,
        TError,
        {data: AuthAppDTO},
        TContext
      > => {

      const mutationOptions = getPostIntegracaoAuthAppMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    