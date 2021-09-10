import React from "react";
import { Modal, Text, View } from "react-native";
import styles from './styles';

const NoInternetModal = (props: any) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={!props.show}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Connect to the Internet</Text>
                </View>
            </View>
        </Modal>
    );
};

export default NoInternetModal;