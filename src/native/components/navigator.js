import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation'
import Home from './home';
import CreateCircle from './createCircle';
import ViewCircle from './viewCircle';

const Navigation = StackNavigator({
    home: { screen: Home },    
    createCircle: { screen: CreateCircle },
    viewCircle: { screen: ViewCircle }    
});

export default Navigation;