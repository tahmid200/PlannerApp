import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

import { TimerScreen, HabitScreen, AddTaskScreen } from '../Screens/Index';
import AddButton from '../Component/AddButton';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { FocusStackNavigator, HabitStackNavigator, HomeStackNavigator, ScheduleStackNavigator } from './StackNavigation';
import { AddTaskScreenModal } from '../Screens/Tasks/AddTaskScreenModal';


const TabNavigator = createBottomTabNavigator();

const Testing = () => {
    return null;
}
const HomeTabs = (props) => {


    return (
        <TabNavigator.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#b488db',
                inactiveTintColor: '#CDCCCE',
                allowFontScaling: true,
                showLabel: false,
                labelStyle: { fontSize: 16, paddingTop: 5 },
                tabStyle: { paddingTop: 5 },
                style: { height: 50, backgroundColor: '#584375' },
            }}
        >

            <TabNavigator.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5 name='tasks' size={24} color={color} />
                    ),
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
                name="AddButton"
                //component={AddTaskScreen}
                component={Testing}
                options={{
                    tabBarButton: () => (<AddTaskScreenModal />),
                }}
            />

            <TabNavigator.Screen
                name="Focus"
                component={FocusStackNavigator}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5 name='bell-slash' size={24} color={color} />
                    ),
                }}
            />
            <TabNavigator.Screen
                name="Habit"
                component={HabitStackNavigator}
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

export default HomeTabs;

