import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Header } from "./components/header";
import { StartGameScreen, GameScreen } from "./screens";
import { GameOverScreen } from "./screens/GameOverScreen";

type initialNumber = number | undefined;

export default function App() {
  const [userNumber, setUserNumber] = useState<initialNumber>();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (num: number) => {
    setUserNumber(num);
  };
  const gameOver = (numOfRounds: number) => {
    setGuessRounds(numOfRounds);
  };
  const restart = () => {
    setGuessRounds(0);
    setUserNumber(undefined);
  }
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    // When the computer hasnt started
    content = <GameScreen num={userNumber} gameOver={gameOver} />;
  } else if (userNumber && guessRounds >0) {
    content = <GameOverScreen restart = {restart}
    tries={guessRounds} num={userNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title={"Guess a number"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
});
