import React, {useState} from 'react';
import {  StyleSheet, View, Picker } from 'react-native';
import { TextInput, Button, List } from 'react-native-paper';
import { useDispatch } from "react-redux";
import { PortfolioAction } from '../../redux/portfolio/portfolio-action';


const CreatePortFolio = ({navigation})   => {
    const [name, setName] = useState('');
    const dispatch = useDispatch()

    const handlePress = () => {
        dispatch(PortfolioAction.createPortFolioAction(name)).then(res => {
            navigation.navigate('TabNav', {screen: 'PortFolio'})
        })
    }

    return (
    <View style={styles.container}>
          <List.Section>
    <List.Subheader>Some title</List.Subheader>
    <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
    <List.Item
      title="Second Item"
      left={() => <List.Icon color="#000" icon="folder" />}
    />
  </List.Section>
        <TextInput
            label="name"
            value={name}
            onChangeText={name => setName(name)}
        />
        <TextInput
            label="name"
            value={name}
            onChangeText={name => setName(name)}
        />
        <TextInput
            label="name"
            value={name}
            onChangeText={name => setName(name)}
        />
        <TextInput
            label="name"
            value={name}
            onChangeText={name => setName(name)}
        />
        <Button icon="camera" mode="contained" onPress={() => handlePress()}>
            Press me
        </Button>
        <Button icon="camera" mode="contained" onPress={() => handlePress()}>
            Press me
        </Button>
    </View>
    );
  };


const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent: 'center',
    },
})

export default CreatePortFolio