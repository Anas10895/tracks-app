import React from 'react'
import {
  createAppContainer,
  createStackNavigator,
  createBottomTapNavigator,
  createSwitchNavigator
} from 'react-navigation'
import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'

const switchNavigator = createSwitchNavigator({
  loginFlow:createStackNavigator({
    Signup:SignupScreen,
    Signin:SigninScreen
  }),
  mainFlow:createBottomTapNavigator({
    trackListFlow:createStackNavigator({
      TrackDetail:TrackDetailScreen,
      TrackList:TrackListScreen
    }),
    TrackCreate:TrackCreateScreen,
    Account:AccountScreen
  })
});

export default createAppContainer(switchNavigator)