import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { AppNavigation } from '../types/Navigation'

const Feature01 = () => {
    const { navigate } = useNavigation<AppNavigation>()
    return <>
        <View style={{
            alignItems: "flex-end",
            justifyContent: "space-between",
            height: "100%",
            padding: 50,
        }}>
            {/* 👆 Flex direction is column so in horizontal alignItems will work and vertical justifyContent will work. */}
            <View style={{ alignItems: "center", gap: 20 }}>
                <Avatar.Image
                    size={200}
                    source={{ uri: "https://images.unsplash.com/photo-1775027814764-46b4d7b45767?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Nnx8fGVufDB8fHx8fA%3D%3D" }} />
                <Text style={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Text>
            </View>
            <Button
                mode='contained'
                onPress={() => navigate("feature02")}
            >
                Next
            </Button>
        </View>
    </>
}

export default Feature01

const styles = StyleSheet.create({})