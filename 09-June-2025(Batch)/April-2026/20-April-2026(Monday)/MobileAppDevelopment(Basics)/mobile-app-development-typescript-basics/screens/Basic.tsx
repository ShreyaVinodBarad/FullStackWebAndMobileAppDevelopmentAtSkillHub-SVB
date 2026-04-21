import { ActivityIndicator, Button, Image, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Basic = () => {
    const [count, setCount] = useState(100)
    const [showModal, setShowModal] = useState(false)

    const { navigate } = useNavigation()
    /*
    👆
    - useNavigation() is a hook from React Navigation
    - It gives you access to navigation functions
    navigate => navigate is used to move to another screen
    */

    return (
        // <View style={{ margin: 20 }}> 👉 Inline Style
        <View style={styles.screenMargin}>
            <TextInput
                // 👆 Input box to type something (like a textbox)
                placeholder='Enter number...'
                // 👆 Shows hint text inside input
                keyboardType='number-pad'
                // 👆 Opens number keyboard on mobile
                onChangeText={val => console.log(val)} // 👉 When user types → value is printed in console
            />

            <Text style={styles.countFontSize}>{count}</Text>
            {/* 
            👆 
            - Displays value of count on screen
            - Uses style from styles.fontSize
            */}

            <Button
                // 👆 Creates a button
                title='Click Me'
                // 👆 Text shown on button
                onPress={() => setCount(count + 1)} // 👉 When button is clicked → increase count by 1
            />

            <Image
                // 👆 Used to display an image on screen
                src='https://plus.unsplash.com/premium_photo-1670624654509-bc6ea3222917?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
                // 👆 URL of the image (from internet)
                height={200}
                // 👆 Sets image height to 200
                style={styles.topMarin}
            />

            <ActivityIndicator
                size="large"
                // 👆 Spinner size large/small
                style={styles.topMarin}
            >
            </ActivityIndicator>
            {/* 👆 Shows a loading spinner */}

            <Button
                title='Open Modal'
                onPress={() => setShowModal(true)} // 👉 When clicked → opens the modal (sets showModal = true)
            />
            <Modal
                // 👆 Creates a popup/modal screen
                visible={showModal}
                // 👆 Modal shows only when showModal is true
                animationType='slide' // 👉 Modal opens with slide animation
            >
                <View>
                    {/* 👆 Container inside modal */}
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </Text>
                    <Button
                        title='Close Modal'
                        onPress={() => setShowModal(false)} // 👉 When clicked → closes modal (showModal = false)
                    />
                </View>
            </Modal>
            <Button
                title='Go to ToDo Screen'
                onPress={() => navigate("todo")}
            /*
            👆
            - It is a function used to move (switch) to another screen
            - "todo" → must match the name you gave in your navigator
            - Example:
            <Stack.Screen name="todo" component={ToDo} />
            */
            />
        </View>
    )
}

export default Basic

const styles = StyleSheet.create({
    screenMargin: {
        margin: 20
        // backgroundColor: "lightpink",
        // height: 600
    },
    countFontSize: { fontSize: 100 },
    topMarin: { marginTop: 20 }
})