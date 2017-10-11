import React, { Component } from 'react';
import {
    Container, Content, Form, Item, Input, Label, H3,
    Textarea, Radio, Right, Left, Text, ListItem, Button, Picker,
    Icon, Toast, Root, DatePicker
} from 'native-base';
import { StyleSheet, AsyncStorage } from 'react-native';

export default class CreateCircle extends Component {
    static navigationOptions = {
        title: 'Create a Circle'
    };
    constructor() {
        super();
        this.state = {
            circleName: ''
        }

        this.initialState = this.state;
    }

    componentDidMount() {

    }

    createCircle() {
        console.log("this.state", this.state)
    }

    render() {
        var { navigate } = this.props.navigation;
        return (
            <Root>

                <Container style={styles.container} >
                    <Content>

                        <H3 style={{ textAlign: 'center', marginTop: 10 }} >Enter Circle Name</H3>
                        <Form {...this.props} style={{ marginTop: -20 }} >
                            <Item floatingLabel>
                                <Label>Name</Label>
                                <Input
                                    {...this.props} //inherit all props of Input like maxLength etc
                                    maxLength={50}
                                    returnKeyType='next'
                                    required
                                    value={this.state.circleName}
                                    onChangeText={(circleName) => this.setState({ circleName })}
                                />
                            </Item>

                            <Button onPress={() => this.addPatient()} full  ><Text> Create</Text></Button>
                        </Form>
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