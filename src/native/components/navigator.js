import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation'
import Home from './home';
import CreateCircle from './createCircle';
import ViewCircle from './viewCircle';
import Signup from './signup';
import Signin from './signin';

const Navigation = StackNavigator({
    // signup: { screen: Signup },
    // signin: { screen: Signin },
    home: { screen: Home },
    createCircle: { screen: CreateCircle },
    viewCircle: { screen: ViewCircle }
});

export default Navigation;