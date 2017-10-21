import React, { Component } from 'react';
import {
    Container, Content, Form, Item, Input, Label, H3,
    Textarea, Radio, Right, Left, Text, ListItem, Button, Picker,
    Icon, Toast, Root, DatePicker,
} from 'native-base';
import { StyleSheet, AsyncStorage } from 'react-native';
import * as fb from 'firebase';

export default class AddPatient extends Component {
    static navigationOptions = {
        title: 'Create Account'
    };
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
        }
        console.disableYellowBox = true
        this.initialState = this.state;
        this.createAccount = this.createAccount.bind(this);
        this.gotoSignin = this.gotoSignin.bind(this);
    }

    componentDidMount() {
    }

    gotoSignin() {
        var { navigate } = this.props.navigation;
        navigate("signin", { name: "Naveed Aheer", website: "naveedaheer.com" })
    }

    createAccount() {
        let data = this.state;
        if (!data.name) {
            alert('Please type your name')
        } else if (!data.email) {
            alert('Please type your email')
        } else if (!data.password) {
            alert('Please type your password')
        } else {
            fb.auth().createUserWithEmailAndPassword(data.email, data.password).then((authData) => {
                fb.database().ref('userData').push({ name: data.name, email: data.email, uid: authData.uid }).then((inner) => {
                    Toast.show({
                        text: 'Account Created Successfully',
                        position: 'bottom',
                        type: 'success',
                        duration: 5000,
                    });
                    this.setState(this.initialState);
                    this.gotoSignin();
                })
            })
        }
    }

    render() {
        var { navigate } = this.props.navigation;
        return (
            <Root>

                <Container style={styles.container} >
                    <Content>
                        <H3 style={{ textAlign: 'center', marginTop: 10 }} >Create Account</H3>
                        <Form {...this.props} style={{ margin: 20 }} >
                            <Item floatingLabel>
                                <Label>Name</Label>
                                <Input
                                    {...this.props} //inherit all props of Input like maxLength etc
                                    maxLength={50}
                                    returnKeyType='next'
                                    required
                                    value={this.state.name}
                                    onChangeText={(name) => this.setState({ name })}
                                />
                            </Item>


                            <Item floatingLabel >
                                <Label>Email</Label>
                                <Input type='text'
                                    {...this.props}
                                    maxLength={30}
                                    returnKeyType='next'
                                    value={this.state.email}
                                    onChangeText={(email) => this.setState({ email })}
                                />
                            </Item>

                            <Item floatingLabel last>
                                <Label >Password</Label>
                                <Input
                                    {...this.props} //inherit props of text area
                                    maxLength={50}
                                    returnKeyType='next'
                                    secureTextEntry
                                    value={this.state.password}
                                    onChangeText={(password) => this.setState({ password })}
                                />
                            </Item>

                            <Button style={{ margin: 20 }} onPress={() => this.createAccount()} full ><Text> Create Account </Text></Button>
                        </Form>
                        <Item style={{ textAlign: 'center' }} >
                            <Text>or</Text>
                        </Item>
                        <Button style={{ margin: 20 }}
                            full
                            onPress={
                                () => navigate("signin", { name: "Naveed Aheer", website: "naveedaheer.com" })
                            }
                            title='view'
                        ><Text>Login</Text></Button>

                    </Content>
                </Container>
            </ Root>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
