import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import { AppTabNavigator } from './components/AppTabNavigator';

import LoginScreen from './screens/LoginScreen';


export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen: LoginScreen},
})

const AppContainer =  createAppContainer(switchNavigator);
