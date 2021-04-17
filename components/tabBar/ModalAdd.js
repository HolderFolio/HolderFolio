import React, { useEffect } from 'react';
import { StyleSheet, StatusBar  } from 'react-native';
import { withTheme } from 'react-native-paper';
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-native-modal";

import ModalAddConatiner from './ModalAddConatiner';
import { toggleTabAddBottom } from '../../redux/system/system-action';

const ModalAdd = ({navigation}) => {
  const toggle = useSelector(state => state.syteme.TabAddBottomToggle)
  // const dispatch = useDispatch()
  const { sideMenuStyle } = styles
  const toggleButton = () => {
    dispatch(toggleTabAddBottom(toggle))
}

    return (
      <Modal
          isVisible={toggle}
          onBackdropPress={() => toggleButton()}
          animationIn="slideInUp"
          animationType="slide"
          transparent={true}
          backdropOpacity={0}
        //   animationOut="slideOutLeft" // When discarding the drawer
        //   swipeDirection="bottom" // Discard the drawer with swipe to left
          useNativeDriver // Faster animation
        //   style={[sideMenuStyle, {backgroundColor: props.theme.colors.background}]}
          hideModalContentWhileAnimating // Better performance, try with/without
          propagateSwipe // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
      >
        <ModalAddConatiner style={styles.sideMenuStyle} navigation={navigation}/>  
      </Modal>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    sideMenuStyle: {
    position: 'absolute',
      backgroundColor: '#F0F3F5',
      width: '100%',
      bottom: "5%"
      
    }
  });

export default withTheme(ModalAdd)
