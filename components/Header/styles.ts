import { colors } from "@/utils/colour";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 54,
    marginTop: 10,
    marginLeft: 10,
    position: "relative",
  },
  Icon: {
    width: 20,
    height: 20,
  },
  title: {
    color: colors.black,
    fontSize: 20,
    fontWeight: "500",
    paddingHorizontal: 16,
    flex: 1,
    textAlign: "center",
  },
  space: {
    width: 24,
  }
});

export default styles;