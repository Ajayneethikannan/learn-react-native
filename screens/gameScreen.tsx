import React, { ReactNode } from "react";
import { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import { Card } from "../components/card";
import { NumberContainer } from "../components/numberContainer"; // A simple reusable component

import { generateRandomBetween } from "../utils/generateRandomBetween";

interface Props {
  num: number;
}

export const GameScreen = (props: Props) => {
  const num = props.num;

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, num)
  );

  const currentHigh = useRef(100);
  const currentLow = useRef(1); // Stored detached from the function, same as useState, but the component does not re render

  const nextGuessHandler = (direction: boolean) => {
    if (
      (direction && currentGuess > num) ||
      (!direction && currentGuess < num)
    ) {
      Alert.alert("Liar!", "Help the computer in a fair way please", [
        { text: "Okay", style: "destructive" },
      ]);
      return;
    }
    if (direction) {
      // greater
      currentLow.current = currentGuess;
    } else {
      //lower
      currentHigh.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>The Computer's Guess is</Text>
      <NumberContainer textStyle={styles.text}>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="GREATER"
          onPress={nextGuessHandler.bind({}, true)}
        ></Button>
        <Button
          title="LOWER"
          onPress={nextGuessHandler.bind({}, false)}
        ></Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    maxWidth: "80%",
    width: 400,
  },
});
