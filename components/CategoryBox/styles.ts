import { colors } from "@/utils/colour";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    alignItems: 'center',
    padding: 6,
    borderRadius: 12,
  },
  title: {
    color: colors.grey,
    marginTop: 8,
    textAlign: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
  imageContainer: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.lightGrey,
  }
});

export default styles;