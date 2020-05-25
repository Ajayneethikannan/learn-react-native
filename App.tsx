import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";

import { Header } from "./components/header";
import { StartGameScreen, GameScreen } from "./screens";

type initialNumber = number | undefined;

export default function App() {
  const [userNumber, setUserNumber] = useState<initialNumber>();
  const startGameHandler = (num: number) => {
    setUserNumber(num);
  }
  let content = <StartGameScreen onStartGame={startGameHandler}/>;
  if(userNumber) {
    content = <GameScreen num={userNumber}/>
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
