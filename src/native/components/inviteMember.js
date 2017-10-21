import React, { Component } from 'react';
import { Container, Card, CardItem, Content, Spinner, Text, Item, Icon, Body, Input, Button, ListItem, List, Right, } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Dimensions } from 'react-native';
import * as firebase from 'firebase';

const { height, width } = Dimensions.get('window');
var key;
class Members extends Component {

    static navigationOptions = ({ navigation }) => ({
        key: navigation.state.params.groupKey
    });

    constructor() {
        super();
        this.state = {
            members: [],
            groupKey: key,
            rndmno: '',
            loading: true,
        }
    }

    componentWillMount() {
        this.setState({
            groupKey: key,
        })
        // console.log(this.props.circleName)
        const arr = [];
        // this.props.members.map((v, i) => {
        //     firebase.database().ref('FamilyTracker/' + v).on('value', (snap) => {
        //         const keys = snap.val()
        //         arr.push(snap.val())
        //         this.setState({
        //             members: arr,
        //             loading: false,
        //         })
        //     })
        // });
    }

    groupid(x) {
        // console.log(this.state.groupKey)
        var gk = this.state.groupKey;
        var gkl = this.state.groupKey.length;
        var g = x + 5;
        var res = gk.slice(x, g);
        this.setState({
            rndmno: res
        })

    }

    render() {
        const { members } = this.state;
        // console.log(this.state.groupKey)
        return (
            <Container style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', }} >

                <Card style={{ width: width - 50, height: height - 200 }} >
                    {
                        this.state.loading ? <Spinner color='red' /> :
                            members.map((v, i) => {
                                return (
                                    <CardItem key={i} >
                                        <Icon name="person" />
                                        <Text>{v.name}</Text>
                                    </CardItem>
                                )
                            })
                    }

                    <Grid>
                        <Row style={{ height: 50 }} >
                            <Col style={{ alignItems: 'center', }} >
                                <Text style={{ fontSize: 23, color: 'gray', opacity: .5, }} >{this.state.rndmno}</Text>
                            </Col>
                        </Row>
                        <Row style={{ height: 50 }}>
                            <Col>
                                <Button success rounded block
                                // goto mem in map
                                >
                                    <Text>Go To Map</Text>
                                </Button>
                            </Col>
                            <Col>
                                <Button info rounded block onPress={() => this.groupid(Math.floor((Math.random() * 10) + 8))} >
                                    <Text>Generate Key</Text>
                                </Button>
                            </Col>
                        </Row>
                    </Grid>
                </Card>

            </Container>
        )
    }
}

export default Members;