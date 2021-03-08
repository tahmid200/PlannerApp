import React from 'react';
import { StyleSheet, View, Platform, TouchableHighlight } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

//https://github.com/maxs15/react-native-modalbox

export const AddTaskScreenModal = () => {

    const navigation = useNavigation();
    return (
        <>
            <TouchableHighlight onPress={() => navigation.navigate('AddTask')}
                activeOpacity='0'
                underlayColor='#584375'>
                <View style={styles.buttonStyle}>
                    <FontAwesome5 name='plus' size={24} color='#FFF' />
                </View>
            </TouchableHighlight>
            <View style={styles.container}>
            </View>

        </>
    );
}
const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#ebebeb',
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

        justifyContent: 'flex-start',
        margin: 0,
        backgroundColor: '#ebebeb',
        marginHorizontal: 0,
        marginBottom: 0,
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
        position: 'relative',
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