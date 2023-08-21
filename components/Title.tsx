import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

type Props = { children: ReactNode };

const Title = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#B8BF1D",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#B8BF1D",
    padding: 12,
  },
});
