import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import ListScreen from '../screens/ListScreen'


//create our main stack navigator
const Stack = createStackNavigator()

//create our list stack navigator
const ListScreenStack = createStackNavigator()


//create our main list screen stack callback
function ListScreenStackCallback() {
  return (
    <ListScreenStack.Navigator>
      <ListScreenStack.Screen
      headerMode="float"
      options={({ navigation,title }) => ({
        headerLayoutPreset: 'center',
        headerLeft: (props) => <View></View>,
        headerTitle: (props) => <View></View>,
        headerStyle: {
          backgroundColor: '#1B232E',
          shadowColor: 'transparent',
          paddingBottom: 10
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'white',
          fontWeight: 'bold',
          alignSelf: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          flex: 1
        },
        headerTintColor: 'transparent',
        headerRight: (props) => <View></View>
      })}
      name='ListScreen' component={ListScreen} />
    </ListScreenStack.Navigator>
  )
}

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
        name="Home"
        component={ListScreenStackCallback}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
