import { StatusBar } from 'expo-status-bar'
import React, { useState, useContext } from 'react'
import MainContainer from './containers/MainContainer'

import {
  StyleSheet,
  Text,
  View
} from 'react-native'

//import contexts
import UserContext from './contexts/user.context'
import GithubContext from './contexts/github.context'

export default function App() {

  //object cache the context
  const usedUserContext = useContext(UserContext)
  const usedGithubContext = useContext(GithubContext)

  //use hook to set state of the isLoggedIn
  const [isLoggedIn, checkLogin] = useState(usedUserContext.isLoggedIn)


  //use hook to set state of the results
  const [results, checkResults] = useState(usedGithubContext.results)

  //set default implementation of setting of login state
  const setLogin = () => checkLogin(true)

  //set default implementation of github fetch results
  const setResults = (getResults) => checkResults(getResults)

  return (
      <UserContext.Provider value={{isLoggedIn, setLogin}}>
        <GithubContext.Provider value={{results, setResults}}>
            <MainContainer />
        </GithubContext.Provider>
      </UserContext.Provider>
  )
}
