import React, { useState, useContext, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'

//import user context
import UserContext from '../contexts/user.context'

function LoginScreen() {

  //set username , password states
  let [username, setUsername] = useState(null)
  let [password, setPassword] = useState(null)
  let [width, setWidth] = useState(Dimensions.get('window').width)
  let [height, setHeight] = useState(Dimensions.get('window').height)


  //listen on changes on layout
  function onLayout() {

    //get dimension width and height
    let dimensionWidth = Dimensions.get('window').width
    let dimensionHeight = Dimensions.get('window').height


    //set new width and height if the dimension does not match with the current set width, height
    if (dimensionWidth !== width || dimensionHeight !== height) {
        setWidth(dimensionWidth)
        setHeight(dimensionHeight)
    }
  }

  //login
  function login(callback) {

    if (username!=='' && password!=='') {
      //call the callback when the username and pasword is filled up
      callback()
    } else {
      alert('Please enter username and password.')
    }
  }

  return (
    <UserContext.Consumer>
      {
        ({ setLogin }) => {
          return (
            <KeyboardAvoidingView style={styles.container} behavior={ Platform.Os== "ios" ? "padding" : "height" }>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container} onLayout={()=>onLayout()}>
                  <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Viseo</Text>
                  </View>
                  <View style={styles.inputFieldWrapper}>
                    <TextInput style={styles.inputField} value={username} onChangeText={username => {setUsername(username)}} placeholderStyle={styles.inputFieldPlaceHolder} placeholder="Enter your username" placeholderTextColor="#778EA9" />
                  </View>
                  <View style={styles.inputFieldWrapper}>
                    <TextInput style={styles.inputField} value={password} onChangeText={password => {setPassword(password)}} placeholderStyle={styles.inputFieldPlaceHolder} placeholder="Enter your password" placeholderTextColor="#778EA9" secureTextEntry={true} />
                  </View>
                  <TouchableOpacity onPress={() => {login(setLogin)}} style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Login</Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          )
        }
      }

    </UserContext.Consumer>
  )

}

//set stylesheets here
let LoginStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  title: {
    fontSize: 60,
    color: 'white'
  },
  titleWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputFieldPlaceHolder: {
     fontSize: 18,
     color: '#778EA9'
  },
  buttonWrapper: {
    width: 200,
    height: 40,
    borderRadius: 30,
    marginTop: 30,
    backgroundColor: 'green'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    paddingTop: 10,
    textAlign: 'center'
  },
  inputFieldWrapper: {
    width: 300,
    height: 30,
    marginTop: 10,
    backgroundColor: 'white'
  },
  inputField: {
    height:30,
    paddingLeft: 15,
    fontSize: 18
  }
})

let styles = StyleSheet.create(LoginStyleSheet)

export default LoginScreen
