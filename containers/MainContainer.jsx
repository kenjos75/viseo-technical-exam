import React, { useState, useEffect, useContext } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import MainNavigator from '../navigators/MainNavigator'
import LoginScreen from '../screens/LoginScreen'

//import user context
import UserContext from '../contexts/user.context'

function MainContainer () {

  //check if the user is currently logged in
  let { isLoggedIn, user } = useContext(UserContext)

  return (
      <>
      {
        isLoggedIn &&
        <MainNavigator />
      }
      {
        !isLoggedIn &&
        <LoginScreen />
      }
      </>
  )

}

export default MainContainer
