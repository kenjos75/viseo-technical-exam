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

    if (username!==null && password!==null) {

      //call the callback when the username and pasword is filled up
      callback()

    } else {
      //make sure that user fills up username and password
      alert('Please enter your email address and password.')
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
                    <Text style={[styles.title,{fontSize: 16}]}>Your #1 Github Fetcher</Text>
                  </View>
                  <View style={styles.inputFieldWrapper}>
                    <TextInput style={styles.inputField} value={username} onChangeText={username => {setUsername(username)}} placeholderStyle={styles.inputFieldPlaceHolder} placeholder="Enter your email address" placeholderTextColor="#778EA9" />
                  </View>
                  <View style={styles.inputFieldWrapper}>
                    <TextInput style={styles.inputField} value={password} onChangeText={password => {setPassword(password)}} placeholderStyle={styles.inputFieldPlaceHolder} placeholder="Enter your password" placeholderTextColor="#778EA9" secureTextEntry={true} />
                  </View>
                  <View style={styles.buttonWrapperContainer}>
                    <TouchableOpacity onPress={() => {login(setLogin)}} style={styles.buttonWrapper}>
                      <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.footer}>
                    <Text style={styles.footerText}>Kenneth John Rosales - React Native Exam</Text>
                  </View>
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
    paddingLeft: 15,
    paddingRight: 15,
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
  buttonWrapperContainer: {
    paddingLeft: 15,
    paddingRight: 15
  },
  buttonWrapper: {
    width: '100%',
    height: 40,
    borderRadius: 30,
    marginTop: 30,
    backgroundColor: 'green',
    shadowColor: '#00000066',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
    paddingTop: 10,
    textAlign: 'center'
  },
  inputFieldWrapper: {
    width: '100%',
    height: 30,
    marginTop: 20,
    borderRadius: 3,
    backgroundColor: 'white'
  },
  inputField: {
    height:30,
    paddingLeft: 15,
    fontSize: 18
  },
  footer: {
    width: '110%',
    paddingLeft: 15,
    paddingRight: 15,
    position: 'absolute',
    bottom: 10
  },
  footerText: {
    width: '100%',
    color: 'white',
    textAlign: 'center'
  }
})

let styles = StyleSheet.create(LoginStyleSheet)

export default LoginScreen
