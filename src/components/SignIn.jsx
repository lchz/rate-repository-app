import { Pressable, StyleSheet, View, Text } from 'react-native';
// import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from "formik";
import * as yup from 'yup';

import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import { ApolloClient } from '@apollo/client';
import { useApolloClient,  } from "@apollo/client";


const styles = StyleSheet.create({
    flexContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        height: 50,
        width: 330, 
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 3,

    },
    inputBox2: {
        backgroundColor: theme.colors.myBlue,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
    },
    signInText: {
        color: 'white',
        fontWeight: 'bold',
    }
})

const initialValues = {
    username: '',
    password: ''
}

const validationSchema = yup.object().shape({
    username: yup.string()
                 .min(3, "The length of username must be at least 3 characters.")
                 .required('Username is required.'),
    password: yup.string()
                .min(5, "The length of password must be at least 5 characters.")
                .required("Password is required."),
})

const SignInForm = ({onSubmit}) => {
    // console.log('two styles:', [styles.inputBox, styles.inputBox2])
    return (
        <View style={styles.flexContainer}>
            <FormikTextInput name='username' style={styles.inputBox} placeholder=' Enter username' />
            <FormikTextInput name='password' style={styles.inputBox} secureTextEntry={true} placeholder=' Enter password' />

            <Pressable onPress={onSubmit} >
                <View style={[styles.inputBox, styles.inputBox2]}>
                    <Text style={styles.signInText}>Sign in</Text>
                </View>
            </Pressable>

        </View>
    )
}

const SignIn = () => {
    const [signIn] = useSignIn()
    const client = useApolloClient()

    const onSubmit = async (values) => {
        const {username, password} = values
        try {
            const {data} = await signIn({username, password})
            // data : ApolloClient
            if (data) {
                client.resetStore()
            }
            
            console.log('Sign in data:', data)
        } catch (e) {
            console.log('Sign in error:', e)
        }
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            { ({handleSubmit}) => <SignInForm onSubmit={handleSubmit}/> }
        </Formik>
    )
}


export default SignIn;
