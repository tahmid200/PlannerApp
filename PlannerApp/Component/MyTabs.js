import React from 'react';
import { createAppContainer } from 'react-navigation';
//import {TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

import { MoreComponentScreen, TimerScreen, ScheduleScreen, HabitScreen } from '../Screens/Index';
import AddButton from './AddButton';
import { TouchableOpacity } from 'react-native';


const TabNavigator = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <TabNavigator.Navigator
            initialRouteName="Homepage"
            tabBarOptions={{
                /*activeBackgroundColor: '#e91e63',*/
                showLabel: false,
            }}
        >
            <TabNavigator.Screen
                name="MoreComponent"
                component={MoreComponentScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5 name='bars' size={24} color='#CDCCCE' />
                    ),
                }}
            />
            <TabNavigator.Screen
                name="Timer"
                component={TimerScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5 name='hourglass' size={24} color='#CDCCCE' />
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
                component={ScheduleScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5 name='calendar-alt' size={24} color='#CDCCCE' />
                    ),
                }}
            />
            <TabNavigator.Screen
                name="Habit"
                component={HabitScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5 name='brain' size={24} color='#CDCCCE' />
                    ),
                }}
            />

        </TabNavigator.Navigator>
    );
}