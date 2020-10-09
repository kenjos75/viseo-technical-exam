import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import MainContainer from './containers/MainContainer'

import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import UserContext from './contexts/user.context';

export default function App() {

  //use hook to set state of the isLoggedIn
  const [isLoggedIn, checkLogin] = useState(false)

  //set default implementation of setting of login state
  const setLogin = () => checkLogin(true)


  return (
      <UserContext.Provider value={{isLoggedIn, setLogin}}>
        <MainContainer />
      </UserContext.Provider>
  )
}
