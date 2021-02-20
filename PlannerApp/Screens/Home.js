import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { color } from "react-native-reanimated";
//the main screen which displays the tasks
const Home = () => {
    return (
        <View style={styles.center}>
            <Text style={styles.text}>This is the Tasks screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: '#ebebeb'
    },
    text: {
        color: 'black',
    }
});

export default Home;