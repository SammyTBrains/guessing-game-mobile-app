import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/color";

type Props = { children: ReactNode; style?: {} };

const InstructionText = (props: Props) => {
  return (
    //props.style on the right means we want incoming style to be able to override default style
    <Text style={[styles.instructionText, props.style]}>{props.children}</Text>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
