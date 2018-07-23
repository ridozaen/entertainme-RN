import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

class DetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            title: '',
            overview: '',
            poster_path: '',
            popularity: 0,
            tags: [],

        };
    }
    componentDidFocus(){

    }
    componentDidMount() {
        if (this.props.navigation.state.params) {
            const { _id, title, overview, poster_path, popularity } = this.props.navigation.state.params
            this.setState({
                _id,
                title,
                overview,
                poster_path,
                popularity
            })
        }
    }
    render() {
        return (
        <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>{this.state.title}</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: (this.state.poster_path) ? this.state.poster_path : 'image.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  {this.state.overview}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="star" />
                  <Text>{this.state.popularity} stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
        );
    }
}

export default DetailScreen;