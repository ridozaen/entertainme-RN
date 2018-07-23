import React, { Component } from 'react';
import { FlatList, View, Image } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Separator, Body, Thumbnail, Left } from 'native-base'
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getDetail(item) {
        this.props.navigation.navigate('Detail', item)
    }

    render() {
        { if (this.props.data.loading) return <Text>Loading ....</Text> }
        return (
            <Container>
                <Text>sajdiasjdka</Text>
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