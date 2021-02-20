import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Button, Text, StyleSheet } from "react-native";
//contains the code to properly navigate to the habit page on button click
const Schedule = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.center}>
            <Text style={styles.text}>This is the Schedule screen</Text>
            <Button
                title="Go to Habit Screen"
                onPress={() => { navigation.navigate("Habit") }} // We added an onPress event which would navigate to the habit screen
            />
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
        color: 'black'
    }
});

export default Schedule;