import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import About from './About'
import Settings from './Settings'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Landing = () => {
    const Tab = createBottomTabNavigator()
    return <>
        <Tab.Navigator>
            <Tab.Screen
                name='home'
                component={Home}
                options={{ headerShown: false, tabBarIcon: () => <FontAwesome name="home" size={24} color="black" /> }}
            />
            <Tab.Screen
                name='about'
                component={About}
                options={{ tabBarIcon: () => <FontAwesome name="user" size={24} color="black" /> }}
            />
            <Tab.Screen
                name='settings'
                component={Settings}
                options={{ tabBarIcon: () => <MaterialCommunityIcons name="cog" size={24} color="black" /> }}
            />
        </Tab.Navigator>
    </>
    // 👆 No need for <NavigationComtainer></NavigationContaineras it is already there in App.tsx main file>
}

export default Landing

const styles = StyleSheet.create({})