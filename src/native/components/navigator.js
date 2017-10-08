import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation'
import CreateCircle from './createCircle';


const Navigation = StackNavigator({
    createCircle: { screen: CreateCircle },
});

export default Navigation;