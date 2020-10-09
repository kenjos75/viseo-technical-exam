import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking
} from 'react-native'

function RepoDetailsComponent(props) {

  //extract the data from the parent repo item
  let { full_name, language, forks, avatar_url, html_url, stargazers_count } = props.route.params

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <View style={{paddingTop: 5}}>
          <Image resizeMode="contain" source={{uri: avatar_url}} style={styles.imageMain} />
        </View>
        <View style={styles.mainContent}>
          <Text style={styles.field}>Name: {full_name}</Text>
          <Text style={styles.field}>Language: {language}</Text>
          <Text style={styles.field}>Forks: {forks}</Text>
          <Text style={styles.field}>Stars: {stargazers_count}</Text>
          <TouchableOpacity style={styles.buttonLink} onPress={() => {

              //open repository url in default browser
              Linking.openURL(html_url)
            }}>
            <Text style={styles.buttonLinkText}>
              Open in Browser
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

}

//set stylesheets here
let ListItemStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 15
  },
  mainContent: {
    flex: 1,
    height: 30,
    flexDirection: 'column',
    paddingLeft: 10,
    marginTop: 5
  },
  field: {
    color: 'white'
  },
  imageMain: {
    height: 60,
    width: 60
  },
  buttonLinkText: {
    color: 'white',
    width: '100%',
    textAlign: 'center',
    paddingTop: 5
  },
  buttonLink: {
    backgroundColor: 'green',
    width: 150,
    height: 30,
    borderRadius: 15,
    marginTop: 10
  },
  item: {
    backgroundColor: 'rgb(68,68,68)',
    flex: 1,
    flexDirection: 'row',
    height: 150,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 30
  }
})

let styles = StyleSheet.create(ListItemStyleSheet)

export default RepoDetailsComponent
