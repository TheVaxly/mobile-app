import { StyleSheet } from "react-native";
import { colors } from "../utils/colour";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain"
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: "underline",
  },
  buttonContainer: {
    marginTop: 80,
    gap: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  signInText: {
    color: colors.blue,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;