import Constants from 'expo-constants';
import {Text, StyleSheet, View} from 'react-native';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 5
    },

})

const Main = () => {
    console.log("Main---")
    return (
        <View style={styles.container}>

            <Text style={styles.header}>Rate Repository Application</Text>

            <View style={styles.container}>
                <RepositoryList />
            </View>
        </View>
        
    )
}

export default Main;