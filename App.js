import { StatusBar } from 'expo-status-bar'
import React from 'react'
import MainContainer from './containers/MainContainer'
import { Provider } from 'react-redux'

import {
  StyleSheet,
  Text,
  View
} from 'react-native'

//import our store
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  )
}
