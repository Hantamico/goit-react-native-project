import { StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function CreatePostIcon() {
    return (
        <View style={styles.container}>
            <Ionicons name="add-outline" size={26} color={"#FFFFFF"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FF6C00",
        width: 70,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
})