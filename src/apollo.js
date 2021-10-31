import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://movieql-beomki.herokuapp.com/",
  cache: new InMemoryCache({
    typePolicies: {
      Movie: {
        fields: {
          isLiked: {
            merge(existing, incoming) {
              return existing ? existing : incoming;
            },
          },
        },
      },
    },
  }),
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      toggleLikeMovie: (_, { id }, { cache }) => {
        cache.modify({
          id: `Movie:${id}`,
          fields: { isLiked: (isLiked) => !isLiked },
        });
      },
    },
  },
});

export default client;
