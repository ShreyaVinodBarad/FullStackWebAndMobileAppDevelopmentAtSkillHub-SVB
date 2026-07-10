import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import Pbutton from './screens/Pbutton'
import Pcard from './screens/Pcard'
import Pavatar from './screens/Pavatar'
import Pdrawer from './screens/Pdrawer'
import Pfab from './screens/Pfab'
import Pswitch from './screens/Pswitch'
import Psurface from './screens/Psurface'
import Psnackbar from './screens/Psnackbar'

const App = () => {
  return <>
    <PaperProvider>
      <View style={{ margin: 30 }}>
        {/* <Pbutton /> */}
        {/* <Pcard /> */}
        {/* <Pavatar /> */}
        {/* <Pdrawer /> */}
        {/* <Pfab /> */}
        {/* <Pswitch /> */}
        {/* <Psurface /> */}
        <Psnackbar />
      </View>
    </PaperProvider>
  </>
}

export default App

const styles = StyleSheet.create({})

/*
1) <PaperProvider>
- It is a wrapper that enables React Native Paper styles and features in your app.
*/ 