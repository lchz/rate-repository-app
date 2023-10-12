import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    columnContainer: {
        flexDirection:'column', 
        flex:1, justifyContent: 'space-around', 
        alignItems: 'center'
    }
})

const customNumber = (count) => {
    if (count > 1000) {
        return (count/1000).toFixed(1) + 'k'
    } 
    return count
}

const Count = ({item}) => {
    return(
        <View style={styles.columnContainer}>
            <Text style={{flex:1, fontWeight:'bold'}}>{customNumber(item.count)}</Text>
            <Text style={{flex:1, }}>{item.id}</Text>
        </View>
    )
}

export default Count;