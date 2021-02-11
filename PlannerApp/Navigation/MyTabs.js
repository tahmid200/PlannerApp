import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

import { TimerScreen, HabitScreen } from '../Screens/Index';
import AddButton from '../Component/AddButton';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { HomeStackNavigator, ScheduleStackNavigator } from './StackNavigation';


const TabNavigator = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <TabNavigator.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#b488db',
                inactiveTintColor: '#CDCCCE',
                showLabel: false,
                style: { backgroundColor: '#584375' },
            }}
        >
            <TabNavigator.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5 name='home' size={24} color={color} />
                    ),
                }}
            />
            <TabNavigator.Screen
                name="Timer"
                component={TimerScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5 name='hourglass' size={24} color={color} />
                    ),
                }}
            />
            <TabNavigator.Screen
                name="AddButton"
                component={TimerScreen}
                options={{
                    tabBarIcon: () => (<AddButton />),
                }}
            />
            <TabNavigator.Screen
                name="Schedule"
                component={ScheduleStackNavigator}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5 name='calendar-alt' size={24} color={color} />
                    ),
                }}
            />
            <TabNavigator.Screen
                name="Habit"
                component={HabitScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5 name='brain' size={24} color={color} />
                    ),
                }}
            />

        </TabNavigator.Navigator>
    );
}

const styles = StyleSheet.create({
    iconColorChange: {
        color: 'black',
    }
});

export default MyTabs;