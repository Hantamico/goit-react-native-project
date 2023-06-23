import {
    StyleSheet,
    KeyboardAvoidingView,
    View,
    ImageBackground,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { useFonts } from 'expo-font';
import { useState } from "react";




export default function RegistrationScreen() {
    const [focusedInputs, setFocusedInputs] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    const [keyboardShow, setKeyboardShow] = useState(false)
    const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../fonts/Roboto/Roboto-Regular.ttf'),
    });
    
    if (!fontsLoaded) {
    return null;
    };

     function handleFocus(index){
    setFocusedInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs[index] = true;
      return updatedInputs;
    });
    };
    
    function handleBlur(index){
        setFocusedInputs((prevInputs) => {
            const updatedInputs = [...prevInputs];
            updatedInputs[index] = false;
            return updatedInputs;
        });
    };

    function toggleShowPassword(){
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.bg__img} source={require("../images/bg_image.jpg")}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    
                        <View style={{...styles.form, paddingBottom: keyboardShow ? 32: 0}}>

                            <View style={styles.add_photo__block}>
                                <Image source={require("../images/add.png")} style={styles.add_photo__svg} />
                            </View>

                            <Text style={styles.title__text}>Реєстрація</Text>

                            <TextInput style={[styles.input, focusedInputs[0] &&styles.inputFocused]} placeholder="Логін" onBlur={()=> handleBlur(0)} onFocus={() => {
                                handleFocus(0)
                                setKeyboardShow(true)
                            }} />
                            
                            <TextInput style={[styles.input, focusedInputs[1] &&styles.inputFocused]} placeholder="Адреса електронної пошти" onBlur={()=> handleBlur(1)} onFocus={() => {
                                handleFocus(1)
                                setKeyboardShow(true)
                            }} />
                            
                            <View style={styles.input_container}>
                            <TextInput style={[styles.input, focusedInputs[2] &&styles.inputFocused]} secureTextEntry={!showPassword} placeholder="Пароль" onBlur={()=> handleBlur(2)} onFocus={() => {
                                handleFocus(2)
                                setKeyboardShow(true)
                            }} />
                                <TouchableOpacity style={styles.showpass} onPress={toggleShowPassword}>
                                    <Text>{showPassword ? 'Скрити' : 'Показати'}</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
                <View style={styles.bottom_block}>
                    <TouchableOpacity style={styles.button}><Text style={styles.button__text}>Зареєстуватися</Text></TouchableOpacity>
                            <Text style={styles.text}>Вже є акаунт? Увійти</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    },
    bg__img: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end"
    },
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
    title__text: {
        fontFamily: 'Roboto-Regular',
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 35,
        textAlign: "center",
        marginTop: 32,
    },
    form: {
        backgroundColor:"#fff",
        fontFamily: 'Roboto-Regular',
        justifySelf: "flex-start",
        alignItems: "center",
        gap: 16,
        paddingHorizontal: 16,
        marginTop: 32,
        borderTopEndRadius: 25,
        borderTopLeftRadius: 25,
    },
    input_container: {
        position: "relative",
        width: "100%",
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
    showpass: {
        position: 'absolute',
        right: 16,
        top: 16,
        zIndex: 1,
    },
    inputFocused: {
        borderColor: "#FF6C00"
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 43,
        backgroundColor: "#FF6C00",
        paddingVertical: 16,
        width: "90%",
        borderRadius:100,
    },
    button__text: {
        fontSize: 16,
        color: "#fff"
    },
    text:{
        fontSize: 16,
    },
    bottom_block: {
        backgroundColor:"#fff",
        fontFamily: 'Roboto-Regular',
        justifySelf: "flex-start",
        alignItems: "center",
        gap: 16,
        paddingBottom:70,
    }
})
