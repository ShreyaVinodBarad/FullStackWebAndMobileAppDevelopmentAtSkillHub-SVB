import { StyleSheet, Text, View } from 'react-native'
/*
👆
Importing components from React Native:
View → like a container (div)
Text → used to show text
StyleSheet → used for styling
*/
import React from 'react'
/*
👆
- Importing React
- Needed to create components
*/

const TemplateDetails = () => {
    // 👆 Whatever you write here will be shown on screen
    <View>
        {/* 👆 A container (like a box) to hold elements */}
        <Text>TemplateDetails</Text>
        {/* 👆 Displays the text "TemplateDetails" on screen */}
    </View>
}

export default TemplateDetails

const styles = StyleSheet.create({})
/*
👆
- Creating styles object
- Currently empty (no styling added yet)
*/