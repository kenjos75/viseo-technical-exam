import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

//import ListScreen component
import ListScreen from '../screens/ListScreen'

//immport Repo Details component
import RepoDetailsComponent from '../screens/RepoDetailsComponent'

//import search field
import SearchField from '../components/SearchField'

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
        headerTitle: (props) => <SearchField />,
        headerStyle: {
          backgroundColor: '#1B232E',
          shadowColor: 'transparent'
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
      <ListScreenStack.Screen
      headerMode="float"
      options={({ navigation,title }) => ({
        headerLayoutPreset: 'center',
        headerLeft: (props) => <View style={{flex: 1, paddingLeft: 15,paddingTop: 10}}><TouchableOpacity onPress={() => {navigation.goBack()}}><Text style={{color: 'white'}}> Go Back</Text></TouchableOpacity></View>,
        headerTitle: (props) => <View style={{flex: 1,paddingTop: 10}}><Text style={{color: 'white'}}>Repository Details</Text></View>,
        headerStyle: {
          backgroundColor: '#1B232E',
          shadowColor: 'transparent'
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
      name='RepoDetails' component={RepoDetailsComponent} />
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
