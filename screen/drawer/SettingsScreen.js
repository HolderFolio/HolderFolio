import * as React from 'react';
import { View, Text, Button} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { toggleDrawerAction} from '../../redux/system/system-action';

const SettingsScreen = navigation => {
const dispatch = useDispatch();
const toggle = useSelector(state => state.syteme.drawerNav)

  const navigatorOpenClose = () => {
    dispatch(toggleDrawerAction(toggle))
    return  navigation.navigation.goBack()
}

  return (
    <View style={{backgroundColor: 'red', width: 200, height: 200}}>
        <Text>TEST SettingsScreen </Text>
        <Button
        onPress={() => navigatorOpenClose()}
        title="Go to notifications"
      />
    </View>
  );
};

export default SettingsScreen;