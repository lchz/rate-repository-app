import {Text, StyleSheet, View, Image} from 'react-native';
import Constants from 'expo-constants';
// import {Text} from './Text';
import theme from '../theme.js';


const styles = StyleSheet.create({
    // container: {
    //     marginTop: Constants.statusBarHeight,
    //     flexGrow: 1,
    //     flexShrink: 1,
    //     marginLeft: 5
    // },
    flexContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        padding: 5
    },
    flexItemA: {
        flex: 2,
        // backgroundColor: 'red'
    },
    flexItemB: {
        flex: 1,
        backgroundColor: 'orange'
    },
    flexTopContainer: {
        flexDirection: 'row',
        // rowGap: 5,
        // justifyContent: 'space-around'
    },
    flexImage: {
        flex: 0,
        width: 50,
        height: 50,
        borderRadius: 4,
    },
    
    flexTopRightContainer: {
        flex: 5
    },
    flexTopRightItem: {
        flex: 1
    },

    textName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    textDesc: {
        color: 'pink'
    },
    textLangContainer: {
        // backgroundColor: 'blue',
        flexDirection: 'row',
    },
    textLangItem: {
        flex: 0,
        backgroundColor: theme.colors.myBlue,
        color: 'white',
        justifyContent: 'space-around',
        padding: 3,
        borderRadius: 4,
    }
})


const Item = ({repo}) => {
    return (
        <View style={styles.flexContainer}>

            <View style={styles.flexItemA}>

                <View style={styles.flexTopContainer}>
                    <Image style={styles.flexImage} source={{uri: repo.ownerAvatarUrl,}} />
                    <View style={styles.flexTopRightContainer}>
                        {/* <Text style={styles.flexTopRightItem}>{repo.fullName}</Text>
                        <Text style={styles.flexTopRightItem}>{repo.description}</Text>
                        <Text style={styles.flexTopRightItem}>{repo.language}</Text> */}
                        
                        <Text style={styles.textName}>{repo.fullName}</Text>
                        <Text style={styles.textDesc}>{repo.description}</Text>
                        <View style={styles.textLangContainer}>
                            <Text style={styles.textLangItem}>{repo.language}</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.flexItemB}>
                <Text>Description: {repo.description}</Text>
            </View>
        </View>

        // <View style={styles.container}>
        //     <Text>Full name: {repo.fullName}</Text>
        //     <Text>Description: {repo.description}</Text>
        //     <Text>Language: {repo.language}</Text>
        //     <Text>Stars: {repo.stargazersCount}</Text>
        //     <Text>Forks: {repo.forksCount}</Text>
        //     <Text>Reviews: {repo.reviewCount}</Text>
        //     <Text>Rating: {repo.ratingAverage}</Text>
        // </View>
    )
}

export default Item;