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

 const Signup = () => {
  const [checked, setChecked] = useState(false)
  const navigation = useNavigation<NavigationProp<any>>();
 
  const handleBackPress = () => {
    navigation.goBack();
  };
 
  return (
    <View style={styles.container}>
      <Header title="Sign Up" onBackPress={handleBackPress} />
      <Input label="Name" placeholder="John Doe"/>
      <Input label="Email" placeholder="some@one.com"/>
      <Input isPassword label="Password" placeholder="******"/>
      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked}/>
        <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms & Privacy</Text></Text>
      </View>
      <Button title="Sign in" onPress={() => console.log('Sign Up pressed')} />
      <Seperator text='Or sign up with' />
    </View>
  );
};
 
 export default Signup;