import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

//Show Invalid Number alert in video

//Show Invalid Number alert in video

//Show Invalid Number alert in video

//Show Invalid Number alert in video

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
