import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const About = () => {
    const handlePress = () => console.log("Pressed!")
    const handleLongPress = () => console.log("Long Pressed!")
    return (
        <View>
            <Pressable onPress={handlePress} onLongPress={handleLongPress}>
                <Text>About</Text>
            </Pressable>

            <TouchableOpacity onPress={handlePress}>
                <Text>TouchableOpacity</Text>
            </TouchableOpacity>
        </View>
    )
}

export default About

const styles = StyleSheet.create({})
/*
1) Pressable
- It is a component used to make anything clickable / touchable (like a button).
2) onPress
- Runs when you tap once.
3) onLongPress
- Runs when you press and hold for a few seconds.
4) TouchableOpacity
- It is a clickable component that becomes slightly transparent (faded) when you press it.
*/ 