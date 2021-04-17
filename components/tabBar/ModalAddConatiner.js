import React from 'react';
import {  Text, View} from 'react-native';
import { withTheme, List, } from 'react-native-paper';
import { useSelector, useDispatch } from "react-redux";
import { toggleTabAddBottom } from '../../redux/system/system-action';

import {useRoute, useNavigation } from '@react-navigation/native';

const SideMenu = ({ style, navigation })   => {
    const route = useRoute();
    console.log(route)
    // console.log(navigation)
    // const navigation2 = useNavigation();
    const toggle = useSelector(state => state.syteme.TabAddBottomToggle)
   
    const dispatch = useDispatch()
 
    const handlePress = () => {
        navigation.navigate('addapi')
      dispatch(toggleTabAddBottom(toggle))
  }
    return (
        <View style={style} >
            <View >
                <List.Item
                    title="Add Api"
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => handlePress()}
                />
                <List.Item
                    title="Add Asset"
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigation.navigate('add-asset')}
                />
                <List.Item
                    title="Add custom"
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigation.navigate('add-custom')}
                />
            </View >
        </View >
    )
}

export default withTheme(SideMenu)