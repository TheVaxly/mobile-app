import { TouchableOpacity, Text, ViewStyle } from "react-native";
import styles from "./styles";

const Button = ({ title, onPress, style }: { title: string, onPress: () => void, style?: ViewStyle }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;  