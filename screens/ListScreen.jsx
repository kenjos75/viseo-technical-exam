import React, { useEffect, useState, useContext } from 'react'

import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native'

//import github context
import GithubContext from '../contexts/github.context'

//import list item from entities
import ListItem from '../entities/ListItem'

function ListScreen(props){

  //extract the results, and hasSearch data from github context
  let { results, hasSearch } = useContext(GithubContext)

  function renderItem({item}) {
      return (<ListItem {...item} navigation={props.navigation} />)
  }

  //use flatlist to render list of items
  return (
    <FlatList
      ListHeaderComponent={(props) => (<View style={{flex: 1}}><Text style={{color: 'black', fontSize: 24}}>Repositories</Text></View>)}
      data={results}
      style={{flex: 1, padding: 15}}
      renderItem={(e)=>renderItem(e)}
      />
  )
}

export default ListScreen
