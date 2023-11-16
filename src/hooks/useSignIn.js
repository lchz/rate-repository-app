import { useContext } from "react";
import { SIGN_IN } from "../graphql/mutations"
import { useApolloClient, useMutation } from "@apollo/client";
import useAuthStorage from "./useAuthStorage";


const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN)

    const authStorage = useAuthStorage()

    const signIn = async ({username, password}) => {
        const res = await mutate({variables: {credentials: {username, password}}})
        await authStorage.setAccessToken(res.data.authenticate.accessToken)
        // const check = await authStorage.getAccessToken()
        // console.log('check token:', check)

        return res
    }

    return [signIn, result]
}

export default useSignIn;
