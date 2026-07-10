import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Surface } from 'react-native-paper'

const Psurface = () => {
    return <>
        <Surface elevation={4}>
            <Text>Surface</Text>
        </Surface>
    </>
}

export default Psurface

const styles = StyleSheet.create({})
/*
👆
- For above code refer this link: https://oss.callstack.com/react-native-paper/docs/components/Surface

- Surface (in React Native Paper):
It is a container (like a box/card) that has background + shadow (elevation).
*/ 