/*
* Naveed Aheer
 * https://github.com/naveedaheer/family-tracker-react-native
 */

import React, { Component } from 'react';


import { Container, StyleProvider } from 'native-base';
import getTheme from './src/native-base-theme/components';
import aheerTracker from './src/native-base-theme/variables/aheerTracker';
import Navigation from './src/native/components/navigator';
import * as firebase from 'firebase';


export default class App extends Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDd6Rt8INnhP-jXxiL7Z7JAlHOIEKavRkU",
      authDomain: "signup-in-react.firebaseapp.com",
      databaseURL: "https://signup-in-react.firebaseio.com",
      projectId: "signup-in-react",
      storageBucket: "signup-in-react.appspot.com",
      messagingSenderId: "98996124308"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (

      <StyleProvider style={getTheme(aheerTracker)} >

        <Container>
          <Navigation />
        </Container>

      </StyleProvider>

    );
  }
}

