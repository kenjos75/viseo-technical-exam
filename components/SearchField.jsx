import React,{useState,useContext} from 'react'

import {
  View,
  TextInput,
  Dimensions,
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
      if (results!==null && results.length > 0)
        setResults(results)
    }).catch( e => {
      //catch errors here
    })
  }


  //set default width
  const width = Dimensions.get('window').width
  return (

      //wrap inside github consumer to use the setResults method
      <GithubContext.Consumer>
        {
          ({setResults}) => {
            return (
              //set only inline style since we are not going to really add many styles
              <View style={{width: width * 0.95,height: 25,backgroundColor: 'white', borderRadius: 30}}>
                <TextInput onChangeText={value => search(value, setResults)} style={{width: '100%',paddingLeft: 15,paddingTop: 5}} placeholder="Search repository here :)" />
              </View>
            )
          }
        }
      </GithubContext.Consumer>
  )

}

export default SearchField
