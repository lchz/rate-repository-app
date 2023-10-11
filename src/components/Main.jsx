import Constants from 'expo-constants';
import {Text as NativeText, StyleSheet, View} from 'react-native';
import RepoList from './RepositoryList';
import Text from './Text';
import AppBar from './AppBar';

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#e1e4e8',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        // alignContent: center,
        textAlign: 'center',
        // marginLeft: 20,
        // marginTop: 10
        paddingTop: 10
    },


})

const Main = () => {
    console.log("Main---")
    return (
        <>
        <View style={styles.container}>
            <AppBar content='Repositories'></AppBar>
            <View style={styles.container}>
                <RepoList />
            </View>
        </View>

        {/* <View>
            <Text>Simple text</Text>
            <Text style={{ paddingBottom: 10 }}>Text with custom style</Text>
            <Text fontWeight="bold" fontSize="subheading">
                Bold subheading
            </Text>
            <Text color="textSecondary">Text with secondary color</Text>
            <Text color="textPrimary">Text with pink color</Text>

        </View> */}
        </>

    )
}

export default Main;