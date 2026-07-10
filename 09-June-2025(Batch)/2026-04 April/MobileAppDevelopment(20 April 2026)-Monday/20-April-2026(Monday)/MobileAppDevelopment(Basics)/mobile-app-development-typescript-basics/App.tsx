import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Basic from './screens/Basic'
import { StatusBar } from 'expo-status-bar'
import ToDo from './screens/ToDo'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'


const App = () => {
  /*
  👆
  - Creating a function component named App
  - This is your main app
  */

  const Stack = createNativeStackNavigator()
  // 👆 Creates a stack system (screens open one over another)

  return <NavigationContainer>
    {/* 
    👆 
    - Required wrapper for navigation
    - Without this, navigation won’t work
    */}

    {/* <Basic /> */}

    {/* <StatusBar hidden={true}></StatusBar> */}
    {/*
    👆
    StatusBar → controls the top bar of mobile (time, battery, network)
    hidden={true} → hides that top bar
    */}

    {/* <ToDo /> */}
    <Stack.Navigator>
      {/* 👆 Holds all screens */}
      <Stack.Screen name='home' component={Basic} />
      {/* 
      👆
      - Creates another screen "home"
      - Shows Basic component
      */}
      <Stack.Screen name='todo' component={ToDo} />
      {/* 
      👆
      - Creates a screen named "todo"
      - Shows ToDo component
      */}
    </Stack.Navigator>

  </NavigationContainer>
  {/* 
    👆
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  */}
}

export default App

const styles = StyleSheet.create({})

/*
1) rnfes
- Shortcut to quickly create a React Native component template.
--------------------------------------------------------
*/ 