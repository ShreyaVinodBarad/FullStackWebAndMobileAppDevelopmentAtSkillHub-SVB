import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Pbutton = () => {
    return <>
        <Button>Default</Button>
        <Button mode='outlined' loading>Outlined</Button>
        {/*                        👆 loading Prop: Shows loading icon */}
        <Button mode='contained'>Contained</Button>
        <Button icon="account" mode='contained-tonal'>Contained-Tonal</Button>
        <Button mode='elevated'>Elevated</Button>
        <Button mode='text'>Text</Button>
    </>
}

export default Pbutton

const styles = StyleSheet.create({})
/*
👆
- For above code refer this link: https://oss.callstack.com/react-native-paper/docs/components/Button/
- You can get all icon on this link: https://oss.callstack.com/react-native-paper/docs/guides/icons
*/ 