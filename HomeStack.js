import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Home';
import LogIn from './LogIn';
import SignIn from './SignIn';
import Main from './Main';


const screens = {
  Home:{
    screen:Home,
    navigationOptions: {header: null,},
  },
  LogIn:{
    screen:LogIn,
    navigationOptions: {header: null,},
  },
  SignIn:{
    screen:SignIn,
    navigationOptions: {header: null,},
  },
  Main:{
    screen:Main,
    navigationOptions: {header: null,},
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);