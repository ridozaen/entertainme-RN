import React, { Component } from 'react';
import { FlatList, View, Image } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Separator, Body, Thumbnail, Left } from 'native-base'
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getDetail = this.getDetail.bind(this)
        this.renderItem = this.renderItem.bind(this)
    }
    renderItem({ item }) {
        return (
            <ListItem thumbnail>
                <Left style={{paddingTop:8, paddingBottom:8}}>
                    <Thumbnail square source={{ uri: (item.poster_path)?item.poster_path: 'http://www.cbtsavannah.org/wp-content/themes/bethlehem/assets/images/placeholder.png' }}
                     />
                </Left>
                <Body>
                <Text onPress={() => this.getDetail(item)}>{item.title}</Text>
                </Body>
            </ListItem>
        )
    }

    getDetail(item) {
        this.props.navigation.navigate('Detail', item)
    }

    render() {
        { if (this.props.data.loading) return <Text>Loading ....</Text> }
        return (
            <Container>
                <List>
                <ListItem itemHeader>
                    <Text>MOVIES</Text>
                </ListItem>
                <FlatList
                    data={this.props.data.movies}
                    renderItem={this.renderItem}
                    keyExtractor={item => item._id}
                />
                <ListItem itemHeader>
                    <Text>TV SERIES</Text>
                </ListItem>
                <FlatList
                    data={this.props.data.tvseries}
                    renderItem={this.renderItem}
                    keyExtractor={item => item._id}
                />
                </List>
            </Container>
        );
    }
}

const queries = gql`
query{
    movies {
      _id
      title
      poster_path
      popularity
      overview
    }
    tvseries {
      _id
      title:name
      popularity
      poster_path
      overview
    }
  }`

export default graphql(queries, {})(HomeScreen);