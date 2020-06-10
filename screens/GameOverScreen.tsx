import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export const GameOverScreen: React.FC<{ tries: number, num: number }> = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over !!</Text>
      <Text>The Computer guessed the number ({props.num}) in {props.tries} !!</Text>
        <Button title={"Replay the game"} onPress={()=> {}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
