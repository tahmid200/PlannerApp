
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MainStackNavigator } from "./Navigation/StackNavigation";
import AddButton from './Component/AddButton';
import HomeTabs from './Navigation/HomeTabs';
import DrawerNavigation from './Navigation/DrawerNavigation';

/*
colors
purple: #584375
white: #ebebeb
grey: #CDCCCE
red-purple: #704375
*/
const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}
export default App;

/*
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
