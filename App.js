/*
* Naveed Aheer
 * https://github.com/naveedaheer/family-tracker-react-native
 */

import React, { Component } from 'react';


import { Container, StyleProvider, H2 } from 'native-base';
import getTheme from './src/native-base-theme/components';
import aheerTracker from './src/native-base-theme/variables/aheerTracker';
import Navigation from './src/native/components/navigator';



export default class App extends Component {
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

