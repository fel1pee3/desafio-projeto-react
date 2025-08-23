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
  ChamadoAppDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postIntegracaoChamadoApp = (
    chamadoAppDTO: ChamadoAppDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/integracao/ChamadoApp`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: chamadoAppDTO, signal
    },
      options);
    }
  


export const getPostIntegracaoChamadoAppMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postIntegracaoChamadoApp>>, TError,{data: ChamadoAppDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postIntegracaoChamadoApp>>, TError,{data: ChamadoAppDTO}, TContext> => {

const mutationKey = ['postIntegracaoChamadoApp'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postIntegracaoChamadoApp>>, {data: ChamadoAppDTO}> = (props) => {
          const {data} = props ?? {};

          return  postIntegracaoChamadoApp(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostIntegracaoChamadoAppMutationResult = NonNullable<Awaited<ReturnType<typeof postIntegracaoChamadoApp>>>
    export type PostIntegracaoChamadoAppMutationBody = ChamadoAppDTO
    export type PostIntegracaoChamadoAppMutationError = unknown

    export const usePostIntegracaoChamadoApp = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postIntegracaoChamadoApp>>, TError,{data: ChamadoAppDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postIntegracaoChamadoApp>>,
        TError,
        {data: ChamadoAppDTO},
        TContext
      > => {

      const mutationOptions = getPostIntegracaoChamadoAppMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    