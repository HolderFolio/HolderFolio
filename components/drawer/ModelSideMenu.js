import React from 'react';
import { StyleSheet, StatusBar  } from 'react-native';
import { withTheme } from 'react-native-paper';
import { useSelector } from "react-redux";
import Modal from "react-native-modal";

import SideMenu from "../drawer/SideMenu";

const ModelSideMenu = (props) => {
  const toggle = useSelector(state => state.syteme.drawerNav)
  const toggleTheme = useSelector(state => state.syteme.theme)
  const { sideMenuStyle } = styles

    return (
      <Modal
          isVisible={toggle}
          // onBackdropPress={props.toggleSideMenu} // Android back press
          // onSwipeComplete={props.toggleSideMenu} // Swipe to discard
          animationIn="slideInLeft" // Has others, we want slide in from the left
          animationOut="slideOutLeft" // When discarding the drawer
          swipeDirection="left" // Discard the drawer with swipe to left
          useNativeDriver // Faster animation
          style={[sideMenuStyle, {backgroundColor: props.theme.colors.background}]}
          hideModalContentWhileAnimating // Better performance, try with/without
          propagateSwipe // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
      >
        {/* <StatusBar backgroundColor={toggleTheme ? props.theme.colors.background : 'black'}/> */}
        <SideMenu navigation={props.navigation}/>  
      </Modal>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    sideMenuStyle: {
      margin: 0,
      paddingTop: 0,
      height: StatusBar.currentHeight
    }
  });

export default withTheme(ModelSideMenu)
