import React, { ReactNode } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

interface Props {
  children: ReactNode;
  style?: object
}

export const Card = (props: Props) => { // Making use of composability here
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {

    shadowColor: "rgb(0,0,0)",
    shadowRadius: 6,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: "white",
    elevation: 2, // For android
    padding: 20,
    borderRadius: 10,
  },
});
