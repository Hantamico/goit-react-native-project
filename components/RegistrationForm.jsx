import { TouchableOpacity, StyleSheet, TextInput, View, Text, KeyboardAvoidingView } from "react-native";
import { useFonts } from 'expo-font';

export default function RegistrationForm() {

    const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../fonts/Roboto/Roboto-Regular.ttf'),
    });
    
    if (!fontsLoaded) {
    return null;
    };

    return (
        <View style={styles.form}>
            <TextInput style={styles.input} placeholder="Логін" />
            <TextInput style={styles.input} placeholder="Адреса електронної пошти" />
            <TextInput style={styles.input} placeholder="Пароль" />
            <TouchableOpacity style={styles.button}><Text style={styles.button__text}>Зареєстуватися</Text></TouchableOpacity>
            <Text style={styles.text}>Вже є акаунт? Увійти</Text>
        </View>
  )  
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',

  },
    form: {
        fontFamily: 'Roboto-Regular',
        flex:1,
        justifySelf: "flex-start",
        alignItems: "center",
        gap: 16,
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 32,
    },
    input: {
        backgroundColor: "#F6F6F6",
        borderColor: "#E8E8E8",
        borderRadius: 8,
        borderStyle: "solid",
        borderWidth: 1,
        width: '100%',
        padding: 16,
        fontSize: 16,
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 43,
        backgroundColor: "#FF6C00",
        paddingVertical: 16,
        width: "100%",
        borderRadius:100,
    },
    button__text: {
        fontSize: 16,
        color: "#fff"
    },
    text:{
        fontSize: 16,

    }
})