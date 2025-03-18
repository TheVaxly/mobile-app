import Button from "@/components/Button";
import { colors } from "@/utils/colour";
import { StyleSheet } from "react-native";
 
const styles = StyleSheet.create({
 
    container: {
        padding: 24,
    },
    agreeRow: {
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    agreeText: {
        color: colors.blue,
        marginHorizontal: 14,
    },
    agreeTextBold: {
        fontWeight: 'bold',
    },
    Button: {
        marginVertical: 20,
    },
});
 
export default styles;