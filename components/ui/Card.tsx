import { ReactNode } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import Colors from "../../constants/color";

type Props = { children: ReactNode };

const Card = (props: Props) => {
  return <View style={styles.inputContainer}>{props.children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,

    //Android
    elevation: 4,

    //IOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
