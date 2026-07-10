import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const Login = () => {
    const { navigate } = useNavigation<NavigationProp<{ landing: undefined }>>()
    /*
    👆
    This line means:
    a) useNavigation() → gives you navigation functions
    b) <NavigationProp<{ landing: undefined }>> → tells TypeScript:
    “There is a screen called landing and it takes no data”
    c) { navigate } → we are taking only the navigate function
    */
    return <>
        <View>
            <TextInput placeholder='Enter email...' />
            <TextInput secureTextEntry placeholder='Enter password...' />
            {/* 👆 secureTextEntry means: Hide the text while typing (for passwords) */}
            <Button
                title='Login'
                onPress={() => navigate("landing")}
            />
        </View>
    </>
}

export default Login

const styles = StyleSheet.create({})