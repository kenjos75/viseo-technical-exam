import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native'

//extract only necessary item properties
function ListItem({stargazers_count,full_name, owner: {avatar_url}, language, forks, html_url, navigation}) {
  return (
      <TouchableOpacity onPress={()=>{navigation.navigate('RepoDetails',{full_name, avatar_url, language, forks, html_url, stargazers_count})}} style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image resizeMode="contain" source={{uri: avatar_url}} style={styles.imageMain} />
        </View>
        <View style={styles.details}>
          <Text style={styles.field}>Name: {full_name}</Text>
          <Text style={styles.field}>Language: {language}</Text>
          <Text style={styles.field}>Stars: {stargazers_count}</Text>
        </View>
      </TouchableOpacity>
  )
}

//set stylesheets here
let ListItemStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgb(68,68,68)',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 15
  },
  imageMain: {
    height: 60,
    width: 60
  },
  imageWrapper: {
    paddingTop: 5
  },
  field: {
    color: 'white'
  },
  details: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 10,
    marginTop: 5
  }
})
let styles = StyleSheet.create(ListItemStyleSheet)

export default ListItem
