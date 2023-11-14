# Rate Repository App

This is an application developed with React Native, following the material in [Full Stack Open](https://fullstackopen.com/en/part10/introduction_to_react_native).

The application enables sorting and filtering reviewed repositories, user registration, logging in and creating a review for a repository.

## Usage

- npm start
  
## Tech

- **Routing**: using `NativeRouter` in the `react-router-native` library. Usage:

    ```
    Install: npm install react-router-native.

    Display the router in App.js.

    Add the routes in Main.jsx.
    ```
- **Form state management**: using `Formik` library. Component `useField` for the state's fields.

    Install:
    ```
    npm install formik
    ```
    Usage:
    ```
    1. Display the form:
        <TextInput />.
    2. Form data transition:
        <Formik initialValues={} onSubmit={}>
            {(handleSubmit) => <Form onSubmit={handleSubmit} /> }
        </Formik>
    ```
- **Form validation**: using `validationSchema` prop provided by `Yup` library.

- **Apollo Client with graphql library** ([Corresponding part](https://fullstackopen.com/en/part10/communicating_with_server#graph-ql-and-apollo-client)):

    Install:
    ```
    npm install @apollo/client graphql
    npm install @expo/metro-config@0.4.0
    ```

    Add configuration to *metro.config.js* file in the root dir:
    ```
    const { getDefaultConfig } = require('@expo/metro-config');

    const defaultConfig = getDefaultConfig(__dirname);

    defaultConfig.resolver.sourceExts.push('cjs');

    module.exports = defaultConfig;
    ```

    Create Apollo Client: 
    
    *src dir -> utils dir -> apolloClient.js*:
    ```
    Find the content from the corresponding link above.
    ```

    Provide the Apollo Client using the ApolloProvider context: 
    
    *App.js*:
    ```
    Find the content from the corresponding link above.
    ```

    


