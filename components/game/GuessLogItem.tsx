import { StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/color";

type Props = { roundNumber: number; guess: number };

const GuessLogItem = (props: Props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{props.roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {props.guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",

    //Android
    elevation: 4,

    //IOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
