import React, { Component } from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import HomeScreen from '../components/HomeScreen'
import DetailScreen from '../components/DetailScreen'

const RootStack = createStackNavigator({
    Home: HomeScreen,
    Detail: DetailScreen
},
    { initialRouteName: 'Home' }
)

export default class StackNavigation extends Component {
    render() {
        return (
            <RootStack />
        )
    }
}