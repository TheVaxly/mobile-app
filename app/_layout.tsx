import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./(tabs)/Signup";
import Signin from "./(tabs)/Signin";
import SplashScreen from "./index";
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="signin" component={Signin} options={{ headerShown: false }} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
