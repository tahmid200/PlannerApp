import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, FocusScreen, ScheduleScreen, HabitScreen, AddTaskScreen } from '../Screens/Index';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity, View } from "react-native";
import AddTask from '../Screens/Tasks/AddTask'

//stack navigators will be used for stacking all the bottom tab navigators
//each bottom tab button will have its own stacks of screens
const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#584375",
        height: 80,
    },
    headerTintColor: "white",
    headerBackTitle: "black",
    headerTitleStyle: { alignSelf: 'center' }

};
const openDrawer = {
    headerRight: () => (
        <View>
            <TouchableOpacity onPress={() => alert('this is a button')}>
                <FontAwesome5
                    name='bars'
                    size={24}
                    color='#fff'
                //onPress={() => alert('this is a button')}
                />
            </TouchableOpacity>
        </View>
    )
};

const ScheduleStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Schedule"
                component={ScheduleScreen}
            //options={openDrawer}
            />
            {/*<Stack.Screen name="Habit" component={HabitScreen} />*/}
        </Stack.Navigator>
    );
}

const AddTaskStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="AddTask"
                component={AddTask}
            />
        </Stack.Navigator>
    );
}

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Tasks"
                component={HomeScreen}
            //options={openDrawer}
            />
        </Stack.Navigator>
    );
}
const HabitStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Habit"
                component={HabitScreen}
            //options={openDrawer}
            />
        </Stack.Navigator>
    );
}
const FocusStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Focus"
                component={FocusScreen}
            //options={openDrawer}
            />
        </Stack.Navigator>
    );
}

export { AddTaskStackNavigator, ScheduleStackNavigator, HomeStackNavigator, HabitStackNavigator, FocusStackNavigator };