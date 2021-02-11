import React from 'react';
import { View, StatusBar } from 'react-native';

// creating the screens which displays the current tasks
//status bar is the notification bar on the phones
export default Screen = ({ name }) => (
    <View style={{ flex: 1, backgroundColor: "#ebebeb" }}>
        <StatusBar barStyle="default" />
    </View>
)