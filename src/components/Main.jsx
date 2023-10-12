import Constants from 'expo-constants';
import {Text, StyleSheet, View} from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepoList from './RepositoryList';
// import Text from './Text';
import AppBar from './AppBar';
import SignIn from './SignIn';

const styles = StyleSheet.create({
    container: {
        // marginTop: Constants.statusBarHeight,
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
            <AppBar title='Repositories'></AppBar>

            <Routes>
                <Route path='/' element={<RepoList />} />
                <Route path='/signin' element={<SignIn />} />

                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </View>
        </>

    )
}

export default Main;