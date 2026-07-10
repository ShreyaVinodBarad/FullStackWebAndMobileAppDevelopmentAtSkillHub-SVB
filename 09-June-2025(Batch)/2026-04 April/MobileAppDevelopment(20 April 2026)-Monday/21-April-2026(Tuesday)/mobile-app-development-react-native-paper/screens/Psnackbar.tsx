import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Snackbar } from 'react-native-paper';

const Psnackbar = () => {
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);
    return <>
        <View style={{ margin: 20 }}>
            <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
            <Snackbar
                visible={visible}
                /*
                👆 
                visible={true} - Snackbar will show (appear)
                visible={false} 👉 Snackbar will hide (not appear)
                */
                onDismiss={onDismissSnackBar}
                // 👆 onDismiss = Snackbar closed - automatically after few seconds
                action={{
                    label: 'Undo',
                    onPress: () => {
                        // Do something
                    },
                }}>
                Hey there! I'm a Snackbar.
            </Snackbar>
        </View >
    </>
}

export default Psnackbar

const styles = StyleSheet.create({})
/*
👆
- For above code refer this link: https://oss.callstack.com/react-native-paper/docs/components/Snackbar

- Snackbar (in React Native Paper):
It is a small message popup at the bottom of the screen.
*/ 