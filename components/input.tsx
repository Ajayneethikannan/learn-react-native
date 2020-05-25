import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

// Not the recommended use of indexed types but. This is a wrong practise

interface Props { // We are using indexed types here so that we can forward some props to the inside components
[key: string]: string | object | number | Function
}

export const Input = (props: Props) => { // ...props allow us to forward the other input properties
    return <TextInput {...props} style={{...styles.input, ...(props.style as object)}}/>
}

const styles = StyleSheet.create({
input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    marginVertical: 5
}
})
