import { useField } from "formik";
import { StyleSheet, Text } from "react-native";
import TextInput from "./TextInput";


const styles = StyleSheet.create({
    errorText: {
        marginTop: 5,
        color: '#d73a4a',
        marginHorizontal: 10,
    },
    inputBoxBorder: {
        borderColor: '#d73a4a',
    }
})

const FormikTextInput = ({name, style, ...props}) => {
    const [field, meta, helpers] = useField(name)
    const showError = meta.touched && meta.error

    // Change color of the border of the input box if error occur

    return (
        <>
            <TextInput 
                onChangeText = {value => helpers.setValue(value)}
                onBlur = {() => helpers.setTouched(true)}
                value = {field.value}
                error = {showError}
                style = {[style, showError && styles.inputBoxBorder]}
                {...props} 
            />
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </>
    )
}

export default FormikTextInput;