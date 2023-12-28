import * as Api from './Api.js'

type Params = {
  category: string
}

export const resolvers = {
  Query: {
    getCategories: async () => Api.getCategories(),
    getRandomJoke: async (_: any, { category }: Params) => Api.getRandomJoke(category),
  },
};