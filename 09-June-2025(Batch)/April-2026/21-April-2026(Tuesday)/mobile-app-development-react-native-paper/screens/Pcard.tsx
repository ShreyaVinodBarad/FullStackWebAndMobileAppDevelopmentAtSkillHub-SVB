import { StyleSheet } from 'react-native'
import React from 'react'
import { Button, Card, Text } from 'react-native-paper'

const Pcard = () => {
    return <>
        <Card>
            <Card.Title title="Card Title" subtitle="Card Subtitle" />
            <Card.Content>
                <Text variant="titleLarge">Card title</Text>
                <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>
    </>
}

export default Pcard

const styles = StyleSheet.create({})
/*
👆
- For above code refer this link: https://oss.callstack.com/react-native-paper/docs/components/Card/
*/ 