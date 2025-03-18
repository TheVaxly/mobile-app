import { View } from "react-native";
import Header from "@/components/AuthHeader/index";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox";
import styles from "./styles";
import { useState } from "react";
import { Text } from "react-native";
import Button from "@/components/Button";
import Seperator from "@/components/Separator";

 const Signin = () => {
  const [checked, setChecked] = useState(false)
  const navigation = useNavigation<NavigationProp<any>>();
 
  const handleBackPress = () => {
    navigation.goBack();
  };
 
  return (
    <View style={styles.container}>
      <Header title="Sign In" onBackPress={handleBackPress} />
      <Input label="Email" placeholder="some@one.com"/>
      <Input isPassword label="Password" placeholder="******"/>
      <Button title="Sign in" onPress={() => console.log('Sign in pressed')} />
      <Seperator text='Or sign in with' />
      <Text style={styles.footerText}>Don't have an account? 
         <Text style={styles.footerLink}> Sign up</Text>
       </Text>
    </View>
  );
};
 
 export default Signin;