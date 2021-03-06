import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props{
    title: string,
}

export const Header = (props: Props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 30,
        backgroundColor: '#f7287d',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
    }
})