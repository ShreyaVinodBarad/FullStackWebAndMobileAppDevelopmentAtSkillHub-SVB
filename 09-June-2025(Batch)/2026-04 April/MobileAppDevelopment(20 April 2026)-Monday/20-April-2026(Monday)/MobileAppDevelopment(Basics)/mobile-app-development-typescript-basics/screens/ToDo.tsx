import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

type ToDoType = {
    title: string,
    desc: string
}

const ToDo = () => {
    const [toDoArray, setToDoArray] = useState<ToDoType[]>([])
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const handleAdd = () => {
        setToDoArray([...toDoArray, { title, desc }])
    }

    const handleDelete = (title: string) => {
        setToDoArray(toDoArray.filter(item => item.title !== title))
    }

    return <View style={styles.card}>
        <TextInput
            style={styles.formControl}
            placeholder='Enter title...'
            onChangeText={val => setTitle(val)}
        />
        <TextInput
            style={styles.formControl}
            placeholder='Enter description...'
            onChangeText={val => setDesc(val)}
        />
        <Button
            title='Add ToDo'
            onPress={handleAdd}
        />
        {
            toDoArray.map(item => <View style={styles.taskCard}>
                <Text>{item.title}</Text>
                <Button
                    title='Delete ToDo'
                    onPress={() => handleDelete(item.title)}
                />
            </View>
            )
        }
    </View>
}

export default ToDo

const styles = StyleSheet.create({
    card: { padding: 15, gap: 20 },
    formControl: { borderWidth: 1 },
    taskCard: {
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 4
    }
})

/*
1) Flex Property in React Native:
1) In React Native
By default:
display: flex;
flex-direction: column;
2) What it means
a) display: flex
- All items are arranged using flexbox (layout system)
- Helps in aligning and spacing elements easily
b) flex-direction: column
- Items are placed top to bottom (vertically)
--------------------------------------------------------
*/ 