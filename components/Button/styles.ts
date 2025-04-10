import { StyleSheet } from "react-native";
import { colors } from "../../utils/colour";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderRadius: 8 ,
    width: "100%",
  },
  title: {
    color: colors.white,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  }
});

export default styles;