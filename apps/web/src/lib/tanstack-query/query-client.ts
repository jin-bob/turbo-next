import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';

const queryCache = new QueryCache();

const mutationCache = new MutationCache();

const client = new QueryClient({
  queryCache,
  mutationCache,
});

export default client;
