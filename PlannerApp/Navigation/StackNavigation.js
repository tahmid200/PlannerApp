import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, TimerScreen, ScheduleScreen, HabitScreen } from '../Screens/Index';

//stack navigators will be used for stacking all the bottom tab navigators
//each bottom tab button will have its own stacks of screens 
const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#584375",
    },
    headerTintColor: "white",
    headerBackTitle: "black",
};

const ScheduleStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Schedule" component={ScheduleScreen} />
            <Stack.Screen name="Habit" component={HabitScreen} />
        </Stack.Navigator>
    );
}

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

export { ScheduleStackNavigator, HomeStackNavigator };