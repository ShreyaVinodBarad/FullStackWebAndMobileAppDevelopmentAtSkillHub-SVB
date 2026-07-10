import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { AppNavigation } from '../types/Navigation'

const Login = () => {
    const { navigate } = useNavigation<AppNavigation>()
    return <>
        <View style={{ height: "100%", justifyContent: "center", padding: 20 }}>
            <Card>
                <Card.Content style={{ gap: 20 }}>
                    <TextInput
                        mode='outlined'
                        placeholder='example@gmail.com'
                    />
                    <TextInput
                        mode='outlined'
                        secureTextEntry
                        placeholder='******'
                    />
                    <Button
                        mode='contained-tonal'
                        onPress={() => navigate("landing")}
                    >
                        Login
                    </Button>
                </Card.Content>
            </Card>
        </View>
    </>
}

export default Login

const styles = StyleSheet.create({})