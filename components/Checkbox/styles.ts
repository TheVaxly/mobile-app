import { colors } from "@/utils/colour";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius : 4,
    width: 22,
    height: 22,
  },
  innerContainer: {
    backgroundColor: colors.grey,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    width: 12,
    height: 9,
  },
});

export default styles;