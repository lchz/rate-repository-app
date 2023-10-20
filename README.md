# Rate Repository App

This is an application developed with React Native, following the material in [Full Stack Open](https://fullstackopen.com/en/part10/introduction_to_react_native).

The application enables sorting and filtering reviewed repositories, user registration, logging in and creating a review for a repository.

## Tech

- Routing: using `NativeRouter` in the `react-router-native` library. Usage:

    ```
    Install: npm install react-router-native.

    Display the router in App.js.

    Add the routes in Main.jsx.
    ```
- Form state management: using `Formik` library. Component `useField` for the state's fields.

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
- Form validation: using `validationSchema` prop provided by `Yup` library.


## Usage

- npm start