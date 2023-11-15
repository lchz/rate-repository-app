import { gql } from "@apollo/client";

export const SIGN_IN = gql`
    mutation Authenticate {
        authenticate(credentials: { username: "zch", password: "12345" }) {
            accessToken
        }
    }
`