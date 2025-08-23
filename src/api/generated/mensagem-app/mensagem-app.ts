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
  FiltroMensagemAppDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postIntegracaoMensagemAppListagem = (
    filtroMensagemAppDTO: FiltroMensagemAppDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/integracao/MensagemApp/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroMensagemAppDTO, signal
    },
      options);
    }
  


export const getPostIntegracaoMensagemAppListagemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postIntegracaoMensagemAppListagem>>, TError,{data: FiltroMensagemAppDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postIntegracaoMensagemAppListagem>>, TError,{data: FiltroMensagemAppDTO}, TContext> => {

const mutationKey = ['postIntegracaoMensagemAppListagem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postIntegracaoMensagemAppListagem>>, {data: FiltroMensagemAppDTO}> = (props) => {
          const {data} = props ?? {};

          return  postIntegracaoMensagemAppListagem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostIntegracaoMensagemAppListagemMutationResult = NonNullable<Awaited<ReturnType<typeof postIntegracaoMensagemAppListagem>>>
    export type PostIntegracaoMensagemAppListagemMutationBody = FiltroMensagemAppDTO
    export type PostIntegracaoMensagemAppListagemMutationError = unknown

    export const usePostIntegracaoMensagemAppListagem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postIntegracaoMensagemAppListagem>>, TError,{data: FiltroMensagemAppDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postIntegracaoMensagemAppListagem>>,
        TError,
        {data: FiltroMensagemAppDTO},
        TContext
      > => {

      const mutationOptions = getPostIntegracaoMensagemAppListagemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    