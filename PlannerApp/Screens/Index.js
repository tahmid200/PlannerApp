import React from 'react';
import Screen from './Screen';
import Schedule from './Schedule';
import Habit from './Habit';
import Home from './Home';
import Focus from './Focus';
//creating multiple screens on the bottom navigation
export const HomeScreen = () => <Home name='HomeScreen' />;
export const FocusScreen = () => <Focus name='Focus' />;
export const ScheduleScreen = () => <Schedule name='Schedule' />;
export const HabitScreen = () => <Habit name='Habit' />;