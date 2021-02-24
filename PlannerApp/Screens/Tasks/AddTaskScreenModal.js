import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Text } from 'react-native-elements';
import Modal from 'react-native-modal';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native';

import AddTask from '../Tasks/AddTask';
import { Platform } from 'react-native';


export const AddTaskScreenModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            {/*<Button onPress={() => { setModalVisible(true) }}
                buttonStyle={styles.buttonStyle}
                icon={
                    <FontAwesome5 name='plus' size={24} color='#FFF' />
                } />
            */}
            <TouchableHighlight onPress={() => { setModalVisible(true) }}
                activeOpacity='0'
                underlayColor='#584375'>
                <View style={styles.buttonStyle}>
                    <FontAwesome5 name='plus' size={24} color='#FFF' />
                </View>
            </TouchableHighlight>
            <View style={styles.container}>
                <Modal
                    backdropOpacity={0.3}
                    isVisible={modalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                    style={styles.contentView}
                >
                    <View style={styles.content}>
                        <Text style={styles.contentTitle}>Hi 👋!</Text>
                        <Text>Hello from Overlay!</Text>
                        <AddTask />
                    </View>
                </Modal>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 17,
        borderTopLeftRadius: 17,
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    contentView: {
        justifyContent: 'flex-end',
        margin: 0,


        backgroundColor: 'white',
        marginHorizontal: 0,
        marginBottom: 50,
        marginTop: Platform.OS === 'ios' ? 14 : 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        overflow: 'hidden',
    },
    buttonStyle: {
        height: 76,
        width: 76,
        backgroundColor: '#704375',
        alignItems: 'center',
        justifyContent: 'center',
        top: -27,
        padding: 15,
        //position: 'absolute',
        shadowColor: '#704375',
        shadowRadius: 10,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        borderWidth: 4,
        borderColor: '#ebebeb',
        borderRadius: 50,
        zIndex: 0,
    },
});