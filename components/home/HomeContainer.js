import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { withTheme  } from 'react-native-paper';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e2asd72',
      title: 'Third Item',
    },
  ];


const HomeContainer = props => {
    const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    

    return (
        <View style={[styles.container,{paddingHorizontal: props.theme.sizes.horizontal}]}>
            <FlatList
                horizontal={props.horizontal}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
      item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

})

export default withTheme(HomeContainer)