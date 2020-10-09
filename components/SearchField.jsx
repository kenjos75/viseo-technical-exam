import React, { useContext, useState } from 'react'

import {
  View,
  TextInput
} from 'react-native'

//import github context
import GithubContext from '../contexts/github.context'

//import github service
import githubService from '../services/github.services'

function SearchField() {

  //search a repository
  function search(getValue, setResults) {
    //do a repository search
    githubService.search(getValue).then(({results}) => {
      //if success then set the results to github context
      setResults(results)
    }).catch( e => {
      //catch errors here
    })
  }

  return (

      //wrap inside github consumer to use the setResults method
      <GithubContext.Consumer>
        {
          ({setResults}) => {
            return (
              //set only inline style since we are not going to really add many styles
              <View style={{width: 300, height: 25,backgroundColor: 'white', borderRadius: 30}}>
                <TextInput onChangeText={value => search(value, setResults)} style={{width: '100%',paddingLeft: 15,paddingTop: 5}} placeholder="Search repository here :)" />
              </View>
            )
          }
        }
      </GithubContext.Consumer>
  )

}

export default SearchField
