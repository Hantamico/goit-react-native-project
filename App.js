import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { TouchableOpacity } from 'react-native';

import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const MainStack = createStackNavigator();


export default function App() {
  return (
    <>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen
            name='Registration'
            component={RegistrationScreen}
            options={{
              headerShown: false,
            }} />
        
          <MainStack.Screen
            name='Login'
            component={LoginScreen}
            options={{
              headerShown: false,
            }} />
        
          <MainStack.Screen
            name='Home'
            component={HomeScreen}
            options={{
              headerShown: false,
            }} />
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
};
