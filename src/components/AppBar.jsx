import { View, StyleSheet, Text, Pressable, Alert } from 'react-native';
import { Link } from 'react-router-native';

import Constants from 'expo-constants';
import theme from '../theme.js'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    // ...
  },
  flexContainer: {
    // display: 'flex',
    // alignContent: 'flex-end',
    alignItems: 'flex-end',
    // alignItems: 'baseline',

    flexDirection: 'row',
    backgroundColor: theme.colors.appBarBackgroundColor,
    height: 150,
  },
  flexItem: {
    flexGrow: 1,
    flex: 1,
    // paddingLeft: 10,
    // marginTop: 50,
    // backgroundColor:'green'
  },
  textColor: {
    color: '#fcfcfc',
    fontSize: 24,
    paddingLeft: 10,
    paddingBottom: 20,
  },
  otherText: {
    color: '#fcfcfc',
    fontSize: 16,
  }

});

const AppBar = ({title}) => {
  return (
    <View style={styles.flexContainer}>
        <View style={styles.flexItem}>
          <Link to='/'>
            <Text style={styles.textColor}>{title}</Text>
          </Link>
        </View>

        <View style={styles.flexItem}>
          <Link to='/signin'>
            <Text style={styles.otherText}>Sign in</Text>
          </Link>
        </View>

    </View>
  );
};

export default AppBar;