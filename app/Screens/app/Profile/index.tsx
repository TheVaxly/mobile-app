import { View, Text, SafeAreaView } from "react-native";
import styles from "./styles";
import Header from "@/components/Header";

export default function Profile() {
    return (
        <SafeAreaView>
            <View>
                <Header title="Profile" showBack={true} showLogout={true} />
            </View>
        </SafeAreaView>
    )
}