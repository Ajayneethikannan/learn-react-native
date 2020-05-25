import React, {ReactNode} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Colors } from '../constants/colors';


interface Props {
    children?: ReactNode;
    textStyle?: object;
}


export const NumberContainer = (props: Props) => {
    return <View style={styles.number}>
        <Text style={props.textStyle}>
            {props.children}
        </Text>
    </View>
}

const styles = StyleSheet.create({
  number:{
    borderWidth: 2,
    borderColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center'
  }  
});