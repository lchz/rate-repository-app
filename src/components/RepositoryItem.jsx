import {Text, StyleSheet, View, Image, FlatList} from 'react-native';
import Constants from 'expo-constants';
// import {Text} from './Text';
import theme from '../theme.js';
import Count from './Count';


const styles = StyleSheet.create({

    flexContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        padding: 10,
    },
    flexItemA: {
        flex: 2,
        flexDirection: 'row',

    },
    flexItemB: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
    },
    flexImage: {
        width: 50,
        height: 50,
        borderRadius: 4,
    },
    flexTopRightContainer: {
        flex: 5,
        flexDirection: 'column',
        paddingLeft: 15,
        gap: 5,
    },
    flexTopRightItem: {
        flex: 1
    },
    textName: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold'
    },
    textDesc: {
        flex: 1,
        color: 'pink'
    },
    textLangContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textLangItem: {
        backgroundColor: theme.colors.myBlue,
        padding: 5,
        borderRadius: 4,
    },
})


const Item = ({repo}) => {

    const DATA = [
        {
            id: 'Stars',
            count: repo.stargazersCount
        },
        {
            id: 'Forks',
            count: repo.forksCount
        },
        {
            id: 'Reviews',
            count: repo.reviewCount
        },
        {
            id: 'Rating',
            count: repo.ratingAverage
        }
    
    ]

    const showColumns = []
    for (let i = 0; i < DATA.length; i++) {
        const element = DATA[i];
        showColumns.push(<Count key={element.id} item={element} />)
    }        
    

    return (
        <View style={styles.flexContainer}>

            <View style={styles.flexItemA}>
                <Image style={styles.flexImage} source={{uri: repo.ownerAvatarUrl,}} />
                <View style={styles.flexTopRightContainer}>

                    <Text style={styles.textName}>{repo.fullName}</Text>
                    <Text style={styles.textDesc}>{repo.description}</Text>
                    <View style={styles.textLangContainer}>
                        <View style={styles.textLangItem}>
                            <Text style={{color:'white'}}>{repo.language}</Text>
                        </View>
                    </View>

                </View>
            </View>

            <View style={styles.flexItemB}>
                {showColumns}
            </View>
        </View>

    )
}

export default Item;