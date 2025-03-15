import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    alignItems: "center",
    backgroundColor: "#FFF",
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
    color: "#FCA34D",
    textDecorationLine: "underline",
  },
  buttonContainer: {
    marginTop: 80,
    gap: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  signInText: {
    color: "#4F63AC",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;