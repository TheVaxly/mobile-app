import { View, Text, SafeAreaView } from "react-native";
import styles from "./styles";
import Header from "@/components/Header";

export default function Favorites() {
    return (
        <SafeAreaView>
            <View>
                <Header title="Favorites" showBack={false} showSearch={true} />
            </View>
        </SafeAreaView>
    )
}