import React, {Component} from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../components/HomeScreen'
import FormScreen from '../components/FormScreen'
import DetailScreen from '../components/DetailScreen'
import StackNavigation from '../router/StackNavigation'

const RootBottom = createBottomTabNavigator(
    {
      Home: StackNavigation,
      Add: FormScreen
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'Add') {
            iconName = `ios-options${focused ? '' : '-outline'}`;
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  );

export default class BottomNavigation extends Component{
    render(){
      return(
        <RootBottom />
      )
    }
  }