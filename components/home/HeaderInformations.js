import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { withTheme, Button } from 'react-native-paper';
import Modal from "react-native-modal";
import { useSelector } from 'react-redux';


const HeaderInformations = props => {
  const isPortFolio = useSelector(state => state.PortFolio.postFolioList)
  const { container, item, header, price, chartAsset, modal,modalChildren } = styles

  const [toggle, setToggle] = useState(false)

  const Item = ({ title }) => (
    <Button  mode="contained" onPress={() => setToggle(!toggle)}>
    {title}
  </Button>
  );

const renderItem = ({ item }) => (
    <Item  key={item._id} title={item.name} />
  );

  return (
    <View style={[container]}>
      <Button mode="contained" onPress={() => setToggle(!toggle)}>
        PortFolio
      </Button>
      <Modal
        isVisible={toggle}
        onBackdropPress={() => setToggle(false)}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={modal}
        useNativeDriver
        swipeDirection='down'
      >

        <View style={modalChildren}>
        <FlatList
                horizontal={props.horizontal}
                data={isPortFolio && isPortFolio['data'] && isPortFolio['data'].data}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />

        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
  },
  modal: {
    paddingBottom: 50,
    backgroundColor: 'green',
    justifyContent: "flex-end"
  },
  modalChildren: {

  },
  item: {

  },
  header: {
    flex: 1,
    backgroundColor: 'black',
  },
  price: {
    flex: 2,
    backgroundColor: 'blue',
  },
  chartAsset: {
    flex: 3,
    backgroundColor: 'gray',
  },

})

export default withTheme(HeaderInformations)