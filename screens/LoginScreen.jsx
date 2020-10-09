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


  function onLayout() {

    let dimensionWidth = Dimensions.get('window').width
    let dimensionHeight = Dimensions.get('window').height

    if (dimensionWidth !== width || dimensionHeight !== height) {
        setWidth(dimensionWidth)
        setHeight(dimensionHeight)
    }
  }

  let [username, setUsername] = useState(null)
  let [password, setPassword] = useState(null)
  let [width, setWidth] = useState(Dimensions.get('window').width)
  let [height, setHeight] = useState(Dimensions.get('window').height)


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
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  )

}
let LoginStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'black',
    paddingLeft: 15,
    paddingRight: 15
  },
  title: {
    fontSize: 24,
    color: 'white'
  },
  titleWrapper: {
    flex: 1
  },
  inputFieldPlaceHolder: {
     fontSize: 18,
    color: '#778EA9'
  },
  inputFieldWrapper: {
    flex: 1,
    height: 30,
    width: '100%',
    backgroundColor: 'white'
  },
  inputField: {
    height:30,
    width: '100%',
  }
})

let styles = StyleSheet.create(LoginStyleSheet)

export default LoginScreen
