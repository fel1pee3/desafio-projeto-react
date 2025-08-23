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
  FiltroMenuDTO
} from '../guardia.schemas';

import { customInstance } from '../../mutator/custom-instance';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



export const postApiMenu = (
    filtroMenuDTO: FiltroMenuDTO,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<null>(
      {url: `/api/Menu`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filtroMenuDTO, signal
    },
      options);
    }
  


export const getPostApiMenuMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiMenu>>, TError,{data: FiltroMenuDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiMenu>>, TError,{data: FiltroMenuDTO}, TContext> => {

const mutationKey = ['postApiMenu'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiMenu>>, {data: FiltroMenuDTO}> = (props) => {
          const {data} = props ?? {};

          return  postApiMenu(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiMenuMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMenu>>>
    export type PostApiMenuMutationBody = FiltroMenuDTO
    export type PostApiMenuMutationError = unknown

    export const usePostApiMenu = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiMenu>>, TError,{data: FiltroMenuDTO}, TContext>, request?: SecondParameter<typeof customInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiMenu>>,
        TError,
        {data: FiltroMenuDTO},
        TContext
      > => {

      const mutationOptions = getPostApiMenuMutationOptions(options);

      return useMutation(mutationOptions , queryClient);
    }
    