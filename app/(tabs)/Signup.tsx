import { View } from "react-native";
import Header from "@/components/AuthHeader/index";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import Input from "@/components/Input";

 const Signup = () => {
   const navigation = useNavigation<NavigationProp<any>>();
 
   const handleBackPress = () => {
     navigation.goBack();
   };
 
   return (
     <View>
       <Header title="Sign Up" onBackPress={handleBackPress} />
       <Input label="Name" placeholder="John Doe"/>
       <Input label="Email" placeholder="some@one.com"/>
       <Input isPassword label="Password" placeholder="******"/>
     </View>
   );
 };
 
 export default Signup;