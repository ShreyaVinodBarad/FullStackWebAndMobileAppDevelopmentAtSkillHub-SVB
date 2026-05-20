import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card, TextInput } from 'react-native-paper'
import z from "zod"

const Home = () => {
    const schema = 
    return <View style={{ padding: 20, marginTop: 20 }}>
        <Card>
            <Card.Content style={{ gap: 20 }}>
                <TextInput
                    mode='outlined'
                    placeholder='Enter task...'
                />
                <TextInput
                    mode='outlined'
                    placeholder='Enter description...'
                />
                <TextInput
                    mode='outlined'
                    placeholder='Enter priority...'
                />
                <Button
                    mode='contained'
                >
                    Add Task
                </Button>
            </Card.Content>
        </Card>
    </View>
}

export default Home

const styles = StyleSheet.create({})