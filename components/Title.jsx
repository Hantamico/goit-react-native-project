import { StyleSheet, Text } from "react-native";
import { useFonts } from 'expo-font';



export default function Title({ message }) {
    
    
    return (
        <Text style={styles.text}>
            {message}
        </Text>);
}

const styles = StyleSheet.create({
    title__text: {
        fontFamily: 'Roboto-Regular',
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 35,
        textAlign: "center",
        marginTop: 32,
    }
})
