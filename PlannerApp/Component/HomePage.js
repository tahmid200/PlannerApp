import React from 'react';
import { Text, View } from 'react-native';

function HomePage(props) {
    return (

        <View style={{ alignItems: 'center' }}>
            <Text> Hi {props.name}! </Text>
        </View>
    );
}

export default HomePage;