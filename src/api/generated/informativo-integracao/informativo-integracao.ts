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
  FiltroPaginacaoDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postIntegracaoInformativoIntegracaoListagem = (
    filtroPaginacaoDTO: FiltroPaginacaoDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/integracao/InformativoIntegracao/listagem`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroPaginacaoDTO, signal
    },
      options);
    }
  


export const getPostIntegracaoInformativoIntegracaoListagemMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postIntegracaoInformativoIntegracaoListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postIntegracaoInformativoIntegracaoListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext> => {

const mutationKey = ['postIntegracaoInformativoIntegracaoListagem'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postIntegracaoInformativoIntegracaoListagem>>, {data: FiltroPaginacaoDTO}> = (props) => {
          const {data} = props ?? {};

          return  postIntegracaoInformativoIntegracaoListagem(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostIntegracaoInformativoIntegracaoListagemMutationResult = NonNullable<Awaited<ReturnType<typeof postIntegracaoInformativoIntegracaoListagem>>>
    export type PostIntegracaoInformativoIntegracaoListagemMutationBody = FiltroPaginacaoDTO
    export type PostIntegracaoInformativoIntegracaoListagemMutationError = unknown

    export const usePostIntegracaoInformativoIntegracaoListagem = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postIntegracaoInformativoIntegracaoListagem>>, TError,{data: FiltroPaginacaoDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postIntegracaoInformativoIntegracaoListagem>>,
        TError,
        {data: FiltroPaginacaoDTO},
        TContext
      > => {

      const mutationOptions = getPostIntegracaoInformativoIntegracaoListagemMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    