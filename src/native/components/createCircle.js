// import React, { Component } from 'react';
// import {
//     Container, Content, Form, Item, Input, Label, H3,
//     Textarea, Radio, Right, Left, Text, ListItem, Button, Picker,
//     Icon, Toast, Root, DatePicker
// } from 'native-base';
// import { StyleSheet, AsyncStorage } from 'react-native';

// export default class CreateCircle extends Component {
//     static navigationOptions = {
//         title: 'Create a Circle'
//     };
//     constructor() {
//         super();
//         this.state = {
//             circleName: ''
//         }

//         this.initialState = this.state;
//     }

//     componentDidMount() {

//     }

//     createCircle() {
//         console.log("this.state", this.state)
//     }

//     render() {
//         var { navigate } = this.props.navigation;
//         return (
//             <Root>

//                 <Container style={styles.container} >
//                     <Content>

//                         <H3 style={{ textAlign: 'center', marginTop: 10 }} >Enter Circle Name</H3>
//                         <Form {...this.props} style={{ marginTop: -20 }} >
//                             <Item floatingLabel>
//                                 <Label>Name</Label>
//                                 <Input
//                                     {...this.props} //inherit all props of Input like maxLength etc
//                                     maxLength={50}
//                                     returnKeyType='next'
//                                     required
//                                     value={this.state.circleName}
//                                     onChangeText={(circleName) => this.setState({ circleName })}
//                                 />
//                             </Item>

//                             <Button onPress={() => this.addPatient()} full  ><Text> Create</Text></Button>
//                         </Form>
//                     </Content>
//                 </Container>
//             </ Root>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         padding: 10
//         // alignItems: 'center',
//         // justifyContent: 'center',
//     },
// });

import React, { Component } from 'react';
import { Container, Spinner, Content, Text, Item, Input, Button, Toast } from 'native-base';
import { Dimensions } from 'react-native';
import * as firebase from 'firebase';


const { height, width } = Dimensions.get('window');

class CreateCircle extends Component {
    constructor() {
        super();
        this.state = {
            circleName: '',
            loading: false,
        }
        this.gotoCirleList = this.gotoCirleList.bind(this);
        console.disableYellowBox = true;
    }

    gotoCirleList() {
        var { navigate } = this.props.navigation;
        navigate("signin", { name: "Naveed Aheer", website: "naveedaheer.com" })
    }

    addcircle() {
        this.setState({ loading: true })
        console.log(this.state.circleName);
        const { circleName } = this.state;
        var db = firebase.auth().currentUser.uid;
        var key = firebase.database().ref('Circle/').push().key;
        let circle = {
            circleName,
            admin: db,
            key1: key,
            members: [db]
        }
        firebase.database().ref('Circle/' + key).set(circle).then(() => {
            this.setState({ loading: false })
            Toast.show({
                text: 'Circle Created Successfully',
                position: 'bottom',
                type: 'success',
                duration: 5000,
            });
            this.gotoCirleList();
        })

    }

    render() {
        return (
            <Container style={{ flex: 1, paddingTop: 50, justifyContent: 'center', alignItems: 'center', }} >
                <Content>
                    <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Create a Circle</Text>
                    <Item style={{ marginTop: 30 }} >
                        <Input onChangeText={(circleName) => this.setState({ circleName })} placeholder='Enter Circle Name' />
                    </Item>
                    <Button onPress={this.addcircle.bind(this)} full >
                        <Text>Create</Text>
                    </Button>
                    {this.state.loading ? <Spinner /> : <Text />}
                </Content>
            </Container>
        )
    }
}

export default CreateCircle;