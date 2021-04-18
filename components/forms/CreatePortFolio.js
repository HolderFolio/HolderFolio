import React, {useState} from 'react';
import {  StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
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
        <TextInput
            label="name"
            value={name}
            onChangeText={name => setName(name)}
        />
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