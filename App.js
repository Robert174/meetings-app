import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MeetingsScreen from './src/screens/MeetingsScreen';
import MakeMeetingScreen from './src/screens/MakeMeetingScreen';
import ProfileScreen from './src/screens/ProfileScreen'
//import { createStackNavigator } from 'react-navigation';


export default class App extends Component {
  render() {
    return (
      <MeetingsScreen/>
    );
  }
}

/*
const AppStackNavigator = createStackNavigator(
  {
    Meetings: MeetingsScreen,
    MakeMeeting: MakeMeetingScreen,
  },
  {
    initialRouteName: 'Meetings',
  }
);
*/