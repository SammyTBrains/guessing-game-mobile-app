import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/color";
import PrimaryButton from "../components/ui/PrimaryButton";

type Props = {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
};

//Show Invalid Number alert in video

//Show Invalid Number alert in video

//Show Invalid Number alert in video

//Show Invalid Number alert in video
const GameOverScreen = (props: Props) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summayText}>
        Your phone needed{" "}
        <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
        guess the number{" "}
        <Text style={styles.highlight}>{props.userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={props.onStartNewGame}>
        Start New Game
      </PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summayText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
