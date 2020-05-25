import React, { ReactNode } from "react";
import { useState } from "react";
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
import { Header } from "../components/header";
import { Card } from "../components/card";
import { Colors } from "../constants/colors";
import { Input } from "../components/input";
import { NumberContainer } from "../components/numberContainer";

interface Props {onStartGame: (a: number) => void}
type initialNumber = number | undefined;

export const StartGameScreen = (props: Props) => {
  const [value, setValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<initialNumber>(); // Allow to use undefined as the initial state

  const numberInputHandler = (text: string) => {
    setValue(text.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    // Confirm button handler
    const chosenNumber = parseInt(value);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      resetInputHandler();

      return;
    }
    setConfirmed(true);
    setValue("");
    setSelectedNumber(chosenNumber);

  };
  const startGame = () => {
    props.onStartGame(selectedNumber as number);
  }
  let confirmedOutput: ReactNode;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.container}>
        <Text>The chosen number</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" onPress={startGame} />
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new game</Text>
        <Card style={{ width: 300, maxWidth: "80%", alignItems: "center" }}>
          <Text>Select a number</Text>
          <Input
            value={value}
            keyboardType="numeric"
            maxLength={2}
            style={styles.input}
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                color={Colors.accent}
                title="Confirm"
                onPress={confirmInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={Colors.primary}
                title="Reset"
                onPress={resetInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 15,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    width: 100,
    shadowColor: "black",
    shadowOpacity: 0.1,
  },
  input: {
    // Custom prop along with the generic stle in the actual component
    width: 50,
    textAlign: "center",
  },
  container: {
    marginTop: 10,
    alignItems: "center",
  },
});
