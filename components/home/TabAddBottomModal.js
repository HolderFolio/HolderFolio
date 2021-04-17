import React, { useEffect, useState} from 'react';
import { useSelector } from "react-redux";

import Modal from "react-native-modal";
import TabAddBottomContant from './TabAddBottomContant';

const TabAddBottomModal = props => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
    
      useEffect(() => {
 
        toggleModal()
    }, [isModalVisible])
    return (
        <Modal
        style={{height: '30%'}}
        isVisible={isModalVisible}
        // animationIn="slideInUp" // Has others, we want slide in from the left
        // animationOut="slideOutDown" // When discarding the drawer
        // // swipeDirection="down" // Discard the drawer with swipe to left
        // useNativeDriver // Faster animation
        // // style={{backgroundColor: props.theme.colors.background}}
        // hideModalContentWhileAnimating // Better performance, try with/without
        // onBackButtonPress
        // propagateSwipe // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
    >
      <TabAddBottomContant />
    </Modal>
    );
}

export default TabAddBottomModal;