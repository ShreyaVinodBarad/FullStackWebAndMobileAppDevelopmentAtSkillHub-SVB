import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'

const Pavatar = () => {
    return <>
        <Avatar.Icon size={24} icon="folder" />
        <Avatar.Image size={24} source={{ uri: "https://images.unsplash.com/photo-1776722091903-097d6dab0455?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" }} />
        <Avatar.Text size={24} label="XD" />
    </>
}

export default Pavatar

const styles = StyleSheet.create({})
/*
👆
- For above code refer these links: 
https://oss.callstack.com/react-native-paper/docs/components/Avatar/AvatarIcon
https://oss.callstack.com/react-native-paper/docs/components/Avatar/AvatarImage
https://oss.callstack.com/react-native-paper/docs/components/Avatar/AvatarText
*/ 