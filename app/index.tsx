import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import Button from "../components/Button";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const navigation = useNavigation<NavigationProp<any>>();
 
  const handleSignUp = () => {
    navigation.navigate("signup");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/splash-image.png")}
        style={styles.image}
      />
      <Text style={styles.title}>You'll Find</Text>
      <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
      <Text style={styles.title}>Here!</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={handleSignUp} />
        <TouchableOpacity onPress={() => console.log('Sign In pressed')}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}