import React from 'react';
import Screen from './Screen';
import Schedule from './Schedule';
import Habit from './Habit';

//creating multiple screens on the bottom navigation
export const HomeScreen = () => <Screen name='HomeScreen' />;
export const TimerScreen = () => <Screen name='Timer' />;
export const ScheduleScreen = () => <Schedule name='Schedule' />;
export const HabitScreen = () => <Habit name='Habit' />;