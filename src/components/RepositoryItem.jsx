import {Text, StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';


const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: 5
    },

})


const Item = ({repo}) => {
    return (
        <View style={styles.container}>
            <Text>Full name: {repo.fullName}</Text>
            <Text>Description: {repo.description}</Text>
            <Text>Language: {repo.language}</Text>
            <Text>Stars: {repo.stargazersCount}</Text>
            <Text>Forks: {repo.forksCount}</Text>
            <Text>Reviews: {repo.reviewCount}</Text>
            <Text>Rating: {repo.ratingAverage}</Text>
        </View>
    )
}

export default Item;