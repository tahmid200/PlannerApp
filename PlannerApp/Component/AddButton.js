import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Animated } from 'react-native';
import { FontAwesome5, Feather } from '@expo/vector-icons';

export default function AddButton() {

    let buttonSize = new Animated.Value(1);
    let mode = new Animated.Value(0);


    let handlePress = () => {
        console.log('+ pressed');
        Animated.sequence([
            Animated.timing(buttonSize, {
                toValue: 0.95,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(buttonSize, {
                toValue: 1,
                useNativeDriver: true,
            }),
            Animated.timing(mode, {
                toValue: mode._value === 0 ? 1 : 0,
                useNativeDriver: false,
            })
        ]).start();
    };
    //---------------------
    //scale the button size
    const sizeStyle = { transform: [{ scale: buttonSize }] };
    //for rotating the '+' icon
    const rotation = mode.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '45deg']
    });
    //creating the secondary button animation
    /*
    const dailyButtonX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-24, -100]
    });
    const dailyButtonY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, -100]
    });
    const upcomingButtonX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-24, -24]
    });
    const upcomingButtonY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, -150]
    });
    const weeklyButtonX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-24, 50]
    });
    const weeklyButtonY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, -100]
    });
    */
    return (
        //viewing the button
        <View style={{ position: 'absolute', alignItems: 'center' }}>
            {/*
            <Animated.View style={{ position: 'absolute', left: dailyButtonX, top: dailyButtonY }}>
                <View style={styles.secondaryButton}>
                    <Text style={{ color: '#FFF' }}>D</Text>
                </View>
            </Animated.View>
            <Animated.View style={{ position: 'absolute', left: upcomingButtonX, top: upcomingButtonY }}>
                <View style={styles.secondaryButton}>
                    <Text size={24} color='#FFF'>U</Text>
                </View>
            </Animated.View>
            <Animated.View style={{ position: 'absolute', left: weeklyButtonX, top: weeklyButtonY }}>
                <View style={styles.secondaryButton}>
                    <Text size={24} color='#FFF'>W</Text>
                </View>
            </Animated.View>
            */}
            <Animated.View style={[styles.button, sizeStyle]}>
                <TouchableHighlight onPress={handlePress} underlayColor='#704375'>
                    <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                        <FontAwesome5 name='plus' size={24} color='#FFF' />
                    </Animated.View>
                </TouchableHighlight>
            </Animated.View>
        </View>
    );

}
//the border and the color of the add button
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#704375',
        alignItems: 'center',
        justifyContent: 'center',
        width: 72,
        height: 72,
        borderRadius: 36,
        position: 'absolute',
        top: -50,
        padding: 10,
        shadowColor: '#704375',
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        borderWidth: 3,
        borderColor: '#ebebeb'
    },
    //styles of the smaller buttons 
    secondaryButton: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#704375',
    },
});
