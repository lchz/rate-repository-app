import Constants from 'expo-constants';
import {Text, StyleSheet, View, Platform, Alert} from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepoList from './RepositoryList';
// import Text from './Text';
import AppBar from './AppBar';
import SignIn from './SignIn';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e1e4e8',
        fontFamily: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            default: 'System'
        }),
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 10
    },

})

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar title='Repositories'></AppBar>

            <Routes>
                <Route path='/' element={<RepoList />} />
                <Route path='/signin' element={<SignIn />} />

                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </View>
    )
}

export default Main;