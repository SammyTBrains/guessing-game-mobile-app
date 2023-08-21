import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface PrimaryButtonProps {
  children: ReactNode;
  onPress: () => void;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={props.onPress}
        android_ripple={{ color: "#630456" }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#720664",
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,

    //Android
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },

  //IOS
  pressed: {
    opacity: 0.75,
  },
});
