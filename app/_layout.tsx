import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./(tabs)/Signup";
import Signin from "./(tabs)/Signin";
import SplashScreen from "./index";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="signin" component={Signin} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
