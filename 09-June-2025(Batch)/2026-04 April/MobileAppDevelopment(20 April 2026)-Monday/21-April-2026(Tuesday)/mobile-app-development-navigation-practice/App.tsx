import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Login'
import Landing from './screens/Landing'

const App = () => {
  const Stack = createNativeStackNavigator()
  return <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* 👆 screenOptions={{ headerShown: false }} means: Hide the header for ALL screens in this navigator. */}
        <Stack.Screen
          name='login'
          component={Login}
        />

        <Stack.Screen
          name='landing'
          component={Landing}
        // options={{ headerShown: false }}
        />
        {/* 
        👆 options={{ headerShown: false }} means: Hide the top header (navigation bar) for this screen.
        */}
      </Stack.Navigator>
    </NavigationContainer>
  </>
}

export default App

const styles = StyleSheet.create({})