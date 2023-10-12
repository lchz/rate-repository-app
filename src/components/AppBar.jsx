import { View, StyleSheet, Text, Pressable, Alert } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme.js'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    // ...
  },
  flexContainer: {
    display: 'flex',
    alignContent: 'center',
    backgroundColor: theme.colors.appBarBackgroundColor,
    height: 100,
  },
  flexItem: {
    flexGrow: 1,
    paddingLeft: 10,
    marginTop: 50,
  },
  textColor: {
    color: '#fcfcfc',
    fontSize: 24,
  }
});

const AppBar = ({content}) => {
  return (
    <View style={styles.flexContainer}>
        <View style={styles.flexItem}>

            <Pressable onPress={() => Alert.alert('You pressed title!')}>
              <Text style={styles.textColor}>{content}</Text>
            </Pressable>

        </View>
    </View>
  );
};

export default AppBar;