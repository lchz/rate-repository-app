import { gql } from "@apollo/client";


export const GET_REPOSITORIES = gql`
    query Repositories {
        repositories {
            edges {
                node {
                    id
                    description
                    forksCount
                    fullName
                    language
                    ratingAverage
                    reviewCount
                    stargazersCount
                    ownerAvatarUrl
                }
            }
        }
    }
`

export const ME = gql`
    query Me {
        me {
            username
            id
        }
    }
`