import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({ uri: `${import.meta.env.BASE_URL}graphql` }),
  cache: new InMemoryCache(),
});
