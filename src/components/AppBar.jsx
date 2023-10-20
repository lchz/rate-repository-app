import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import theme from '../theme.js'
import myStyleSheet from '../styleSheet.js';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBarBackgroundColor,
    height: myStyleSheet.appBarStyle.height,
  },
  flexContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    // height: 150,
  },
  flexItem: {
    // flexGrow: 1,
    flex: 1,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  textColor: {
    color: '#fcfcfc',
    fontSize: 20,
  },
  // otherText: {
  //   color: '#fcfcfc',
  //   fontSize: 20,
  // }

});

const AppBar = ({title}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal >

        <View style={styles.flexContainer}>
            <View style={styles.flexItem}>
              <Link to='/'>
                <Text style={styles.textColor}>{title}</Text>
              </Link>
            </View>

            <View style={styles.flexItem}>
              <Link to='/signin'>
                <Text style={styles.textColor}>Sign in</Text>
              </Link>
            </View>
        </View>

      </ScrollView>
    </View>

  );
};

export default AppBar;