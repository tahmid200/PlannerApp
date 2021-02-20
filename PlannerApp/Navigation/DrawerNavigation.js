import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ScheduleStackNavigator } from "./StackNavigation";
import HomeTabs from "./HomeTabs";

const Drawer = createDrawerNavigator();
//will display additional features that are not on the bottom tab
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerStyle={{ backgroundColor: '#ebebeb' }} >
            <Drawer.Screen name="Home" component={HomeTabs} />
            <Drawer.Screen name="Schedule" component={ScheduleStackNavigator} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;