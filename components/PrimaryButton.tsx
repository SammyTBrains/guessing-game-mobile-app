import { ReactNode } from "react";
import { Text, View } from "react-native";

interface PrimaryButtonProps {
  children: ReactNode;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
};

export default PrimaryButton;
