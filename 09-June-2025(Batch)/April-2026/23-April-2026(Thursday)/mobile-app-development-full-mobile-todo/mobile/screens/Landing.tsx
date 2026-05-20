import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Complete from './Complete'
import Profile from './Profile'
import { AntDesign } from '@expo/vector-icons'
const Landing = () => {
    const Tab = createBottomTabNavigator()
    return <>
        <Tab.Navigator>
            <Tab.Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: () => <AntDesign name="home" size={24} color="black" />
                }}
            />
            <Tab.Screen
                name='complete'
                component={Complete}
                options={{
                    tabBarIcon: () => <AntDesign name="check" size={24} color="black" />
                }}
            />
            <Tab.Screen
                name='profile'
                component={Profile}
                options={{
                    tabBarIcon: () => <AntDesign name="profile" size={24} color="black" />
                }}
            />
        </Tab.Navigator>
    </>
}

export default Landing

const styles = StyleSheet.create({})