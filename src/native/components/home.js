import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Subtitle, Text } from 'native-base';

export default class HeaderComponent extends Component {
    render() {
        var { navigate } = this.props.navigation;
        
        return (
            <Container>
                <Header>

                    <Body>

                        <Title>Aheer Tracker</Title>
                        <Subtitle>Track your beloved</Subtitle>

                    </Body>

                </Header>
                <Button
                    full
                    secondary
                    onPress={
                        () => navigate("createCircle", { name: "Naveed Aheer", website: "naveedaheer.com" })
                    }
                    title='create'
                ><Text>Create Circle</Text></Button>

                <Button
                    full
                    secondary
                    onPress={
                        () => navigate("viewCircle", { name: "Naveed Aheer", website: "naveedaheer.com" })
                    }
                    title='view'
                ><Text>View Circle</Text></Button>
            </Container>
        );
    }
}