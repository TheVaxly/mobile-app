import { StyleSheet } from "react-native";
 import { colors } from "../../utils/colour";
 
 const styles = StyleSheet.create({
   container: {
     backgroundColor: colors.darkGrey,
     borderRadius: 14,
     width : '45%',
     alignSelf: 'center',
     justifyContent: 'center',
     alignItems: 'center',
     padding: 16,
     marginBottom: 25,
   },
   image: {
     width: 30,
     height: 30,
   }
 });
 
 export default styles;