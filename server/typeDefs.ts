export const typeDefs = `#graphql
    type Category {
        name: String
    }

    type Joke {
        id: String
        url: String
        value: String
        icon_url: String
        created_at: String
        updated_at: String
        categories: [String]
    }

    type Query {
        getCategories: [Category]
        getRandomJoke(category: String): Joke
    }
`