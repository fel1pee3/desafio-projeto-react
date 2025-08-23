import { defineConfig } from 'orval';

export default defineConfig({
  guardia: {
    output: {
      target: './src/api/generated/guardia.ts',
      client: 'react-query',
      mode: 'tags-split',
      mock: false,
      clean: true,
      override: {
        header: false,
        mutator: {
          path: './src/api/mutator/custom-instance.ts',
          name: 'customInstance',
        },
        query: {
          useQuery: true,
          useInfinite: false,
        },
      },
    },
    input: {
      target: 'https://beta.guardia-api.box3.work/swagger/v1/swagger.json',
    },
  },
});