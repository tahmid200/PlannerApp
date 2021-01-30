
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import { MoreComponentScreen, TimerScreen, ScheduleScreen, HabitScreen } from './Screens/Index';
import AddButton from './Component/AddButton';

//creating the bottom navigators -- this will be changed to fit our needs
const TabNavigator = createBottomTabNavigator(
  {
    MoreComponent: {
      screen: MoreComponentScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome5 name='bars' size={24} color='#CDCCCE' />
      }
    },
    Timer: {
      screen: TimerScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome5 name='hourglass' size={24} color='#CDCCCE' />
      }
    },
    //add button goes here due to it being in the middle of the navigation tab
    Add: {
      screen: AddButton,
      navigationOptions: {
        tabBarIcon: <AddButton />
      }
    },
    Schedule: {
      screen: ScheduleScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome5 name='calendar-alt' size={24} color='#CDCCCE' />
      }
    },
    Habit: {
      screen: HabitScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome5 name='brain' size={24} color='#CDCCCE' />
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
);

export default createAppContainer(TabNavigator);


























/*
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HomePage from './Component/HomePage';


//-----------------TEST----------------------------
export default function App() {
  return (
    <View style={styles.container}>
      <HomePage name='Tahmid' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//----------------------------------------------------
*/
