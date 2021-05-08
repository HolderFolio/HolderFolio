import React from 'react';
import { StyleSheet, View, FlatList, Text,Button } from 'react-native';
import { withTheme  } from 'react-native-paper';
import { useSelector } from 'react-redux';


const HeaderExchange = props => {
  const isPortFolio = useSelector(state => state.PortFolio.postFolioList)
  const { container, item, header, price, chartAsset, } = styles

    const Item = ({ title }) => (
        <View style={item}>
          <View style={header}></View>
          <View style={price}>
            <Text title={title} onPress={() => handlePress(title)}  >{title}</Text>
          </View>
          <View style={chartAsset}></View>
        </View>
      );

    const renderItem = ({ item }) => (
        <Item  key={item._id} title={item.name} />
      );

    return (
        <View style={[container]}>
            <FlatList
                horizontal={props.horizontal}
                data={isPortFolio && isPortFolio['data'] && isPortFolio['data'].data}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    height: 130,
    width: 100,
    borderRadius: 25,
    marginHorizontal: 10,
    backgroundColor: 'green',
  },
  header : {
    flex: 1,
    backgroundColor: 'black',
  },
  price : {
    flex: 2,
    backgroundColor: 'blue',
  },
  chartAsset : {
    flex: 3,
    backgroundColor: 'gray',
  },

})

export default withTheme(HeaderExchange)