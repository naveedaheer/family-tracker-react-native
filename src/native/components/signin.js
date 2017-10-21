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
        title: 'Home'
    };
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
        console.disableYellowBox = true
        this.initialState = this.state;
        this.signin = this.signin.bind(this);
        this.gotoHome = this.gotoHome.bind(this);
    }

    componentDidMount() {
    }

    gotoHome() {
        var { navigate } = this.props.navigation;
        navigate("home", { name: "Naveed Aheer", website: "naveedaheer.com" })
    }

    signin() {
        let data = this.state;
        if (!data.email) {
            alert('Please type your email')
        } else if (!data.password) {
            alert('Please type your password')
        } else {
            fb.auth().signInWithEmailAndPassword(data.email, data.password).then((authData) => {
                Toast.show({
                    text: 'Account Created Successfully',
                    position: 'bottom',
                    type: 'success',
                    duration: 5000,
                });
                this.setState(this.initialState);
                this.gotoHome();
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

                            <Button style={{ margin: 20 }} onPress={() => this.signin()} full ><Text>Login</Text></Button>
                        </Form>
                        <Item style={{ textAlign: 'center' }} >
                            <Text>or</Text>
                        </Item>
                        <Button style={{ margin: 20 }}
                            full
                            onPress={
                                () => navigate("signup", { name: "Naveed Aheer", website: "naveedaheer.com" })
                            }
                            title='view'
                        ><Text>Signup</Text></Button>

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
