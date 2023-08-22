import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

type Props = { children: ReactNode };

const Title = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%", //kicks in if 300 pixels set on width is greater than 80%
    width: 300,
  },
});
