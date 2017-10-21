import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation'
import Home from './home';
import CreateCircle from './createCircle';
import ViewCircle from './viewCircle';
import Signup from './signup';
import Signin from './signin';
import CircleList from './circleList';
import InviteMember from './inviteMember';

const Navigation = StackNavigator({
    signup: { screen: Signup },
    signin: { screen: Signin },
    home: { screen: Home },
    circleList: { screen: CircleList },
    createCircle: { screen: CreateCircle },
    inviteMember: { screen: InviteMember },
    // viewCircle: { screen: ViewCircle }
});

export default Navigation;