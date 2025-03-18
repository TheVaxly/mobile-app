import styles from "./styles";
 import { Image, TouchableOpacity } from "react-native"
 
 const Google = () => {
   return (
     <TouchableOpacity activeOpacity={0.6} style={styles.container}>
       <Image style={styles.image} source={require("@/assets/images/google.png")} />
     </TouchableOpacity>
   )
 }
 
 export default Google;