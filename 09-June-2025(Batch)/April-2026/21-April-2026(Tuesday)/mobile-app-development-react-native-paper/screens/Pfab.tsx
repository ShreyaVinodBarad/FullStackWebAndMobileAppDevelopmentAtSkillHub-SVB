import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FAB } from 'react-native-paper'

const Pfab = () => {
    return <>
        <FAB
            icon="plus"
            onPress={() => console.log('Pressed')}
            label='Plus Icon'
        />
    </>
}

export default Pfab

const styles = StyleSheet.create({})
/*
👆
FAB (Floating Action Button) in React Native Paper:
- It is a round button that floats on the screen (usually at bottom right).

- For above code refer this link: https://oss.callstack.com/react-native-paper/docs/components/FAB/
*/ 