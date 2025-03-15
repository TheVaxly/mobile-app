import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const Button = ({ title, onPress }: { title: string, onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;  