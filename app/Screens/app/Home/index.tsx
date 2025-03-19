import { View, Text, SafeAreaView } from "react-native";
import styles from "./styles";
import Header from "@/components/Header";

export default function Home() {

    return (
        <SafeAreaView>
            <View>
                <Header title="Find All You Need" showBack={false} showSearch={true} />
            </View>
        </SafeAreaView>
    )
}