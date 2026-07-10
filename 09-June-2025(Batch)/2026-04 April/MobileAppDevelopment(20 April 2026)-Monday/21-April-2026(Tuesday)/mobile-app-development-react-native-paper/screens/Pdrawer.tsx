import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from 'react-native-paper'

const Pdrawer = () => {
    const [active, setActive] = React.useState('')
    return <>
        <Drawer.Section title="Some title">
            <Drawer.Item
                label="First Item"
                active={active === 'first'}
                onPress={() => setActive('first')}
            />
            <Drawer.Item
                label="Second Item"
                active={active === 'second'}
                onPress={() => setActive('second')}
            />
        </Drawer.Section>
    </>
}

export default Pdrawer

const styles = StyleSheet.create({})
/*
👆
- For above code refer this link: https://oss.callstack.com/react-native-paper/docs/components/Drawer/DrawerSection
*/ 