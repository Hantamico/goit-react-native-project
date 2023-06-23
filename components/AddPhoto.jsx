import { Image, StyleSheet, View } from "react-native";
import { useFonts } from 'expo-font';
import add from "../images/add.png";


export default function AddPhoto() {
    return (
    <View style={styles.add_photo__block}>
        <Image source={add} style={styles.add_photo__svg}/>
    </View>)
}

const styles = StyleSheet.create({
    add_photo__block: {
        justifySelf: "center",
        alignSelf: "center",
        borderRadius:25,
        backgroundColor: "#F6F6F6",
        width: 120,
        height: 120,
        marginTop: -50,
    },

    add_photo__svg: {
        position: "absolute",
        bottom: 14,
        left: 107,
    },
})