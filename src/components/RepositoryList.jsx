import { FlatList, View, StyleSheet, Dimensions } from 'react-native';
import Item from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import myStyleSheet from '../styleSheet';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  repoListContainer: {
    marginBottom: 10
  }
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const {repositories} = useRepositories();

  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node)
                                       : []
  return (
    <View style={styles.repoListContainer}>
      <FlatList
        style={{maxHeight: Dimensions.get('window').height-myStyleSheet.footStyle.height-myStyleSheet.appBarStyle.height}}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem = {({item}) => <Item repo={item} />}
        keyExtractor = {item => item.id}
      />

    </View>
  );
};

export default RepositoryList;