import { TouchableOpacity, Image, Text, View } from "react-native";
import styles from "./styles";
import { colors } from "@/utils/colour";

const CategoryBox = ({ title, image, onPress, isSelected }: { title: string, image: string, onPress?: () => void, isSelected?: boolean }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <View style={[styles.imageContainer, isSelected ? {backgroundColor: colors.black} : {}]}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
          <Text style={[styles.title, isSelected ? { color: colors.blue } : {}]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryBox;