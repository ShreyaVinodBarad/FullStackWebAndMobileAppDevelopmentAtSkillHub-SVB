import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Feature01 from './screens/Feature01'
import Feature02 from './screens/Feature02'
import Feature03 from './screens/Feature03'
import Login from './screens/Login'
import Landing from './screens/Landing'

const App = () => {
  const Stack = createNativeStackNavigator()
  return <>
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='feature01' component={Feature01} />
          <Stack.Screen name='feature02' component={Feature02} />
          <Stack.Screen name='feature03' component={Feature03} />
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='landing' component={Landing} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  </>
}

export default App

const styles = StyleSheet.create({})