import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Card } from "../components/card";

export const GameOverScreen: React.FC<{
  tries: number;
  num: number;
  restart: () => void;
}> = (props) => {
  return (
    <Card style={styles.screen}>
      <Text>Game Over !!</Text>
      <Text>
        The Computer guessed the number ({props.num}) in {props.tries} moves!!
      </Text>
      <Button title={"Replay the game"} onPress={props.restart} />
    </Card>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});
