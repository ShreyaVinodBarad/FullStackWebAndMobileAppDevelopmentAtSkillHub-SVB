import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Switch } from 'react-native-paper';

const Pswitch = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
}

export default Pswitch

const styles = StyleSheet.create({})
/*
👆
- For above code refer this link: https://oss.callstack.com/react-native-paper/docs/components/Switch/
*/ 