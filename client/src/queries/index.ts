import { gql } from '@apollo/client'

export const GET_RANDOM_JOKE = gql `
    query GetRandomJoke($category: String!) {
        getRandomJoke(category: $category) {
            id
            value
            icon_url
        }
    }
`;

export const GET_CATEGORIES = gql `
    query GetCategory {
        getCategories {
            name
        }
    }
`;