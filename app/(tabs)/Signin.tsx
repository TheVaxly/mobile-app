import { View } from "react-native";
import Header from "@/components/AuthHeader/index";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import Input from "@/components/Input";
import styles from "./styles";
import { useState } from "react";
import { Text } from "react-native";
import Button from "@/components/Button";
import Seperator from "@/components/Separator";
import Google from "@/components/Google/index";
import { SafeAreaView } from "react-native-safe-area-context";

 const Signin = () => {
  const [checked, setChecked] = useState(false)
  const navigation = useNavigation<NavigationProp<any>>();
 
  const handleBackPress = () => {
    navigation.goBack();
  };
 
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.container}>
            <Header title="Sign In" onBackPress={handleBackPress} />
            <Input label="Email" placeholder="some@one.com"/>
            <Input isPassword label="Password" placeholder="******"/>
            <Button title="Sign in" onPress={() => console.log('Sign in pressed')} />
            <Seperator text='Or sign in with' />
            <Google />
            <Text style={styles.footerText}>Don't have an account? 
                <Text style={styles.footerLink}> Sign up</Text>
            </Text>
        </View>
    </SafeAreaView>
  );
};
 
 export default Signin;