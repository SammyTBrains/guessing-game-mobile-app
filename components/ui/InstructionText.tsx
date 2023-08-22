import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/color";

type Props = { children: ReactNode };

const InstructionText = (props: Props) => {
  return <Text style={styles.instructionText}>{props.children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
