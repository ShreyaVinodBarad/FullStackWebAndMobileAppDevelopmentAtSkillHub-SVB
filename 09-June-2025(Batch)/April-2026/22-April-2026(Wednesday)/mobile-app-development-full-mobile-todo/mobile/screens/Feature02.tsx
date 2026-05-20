import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { AppNavigation } from '../types/Navigation'

const Feature02 = () => {
    const { navigate } = useNavigation<AppNavigation>()
    return <>
        <View style={{
            alignItems: "flex-end",
            justifyContent: "space-between",
            height: "100%",
            padding: 50
        }}>
            {/* 👆 Flex direction is column so in horizontal alignItems will work and vertical justifyContent will work. */}
            <View style={{ alignItems: "center", gap: 20 }}>
                <Avatar.Image
                    size={200}
                    source={{ uri: "https://plus.unsplash.com/premium_photo-1670624654509-bc6ea3222917?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTV8fHxlbnwwfHx8fHw%3D" }} />
                <Text style={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Text>
            </View>
            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                <Button
                    mode='outlined'
                    onPress={() => navigate("feature01")}
                >
                    Previous
                </Button>
                <Button
                    mode='contained'
                    onPress={() => navigate("feature03")}
                >
                    Next
                </Button>
            </View>
        </View>
    </>
}

export default Feature02

const styles = StyleSheet.create({})