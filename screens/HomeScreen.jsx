import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CreatePostIcon from '../components/CreatePostIcon';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
    return (

        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                
                tabBarStyle: {
                    paddingTop: 9,
                },
        }}>

            <Tab.Screen
                name='Posts'
                component={PostsScreen}
                options={{
                    title: "Публікації",
                    
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 20,
                    },
                
                headerRight: () => (
                    <TouchableOpacity>
                    <Ionicons name="log-out-outline" size={38} color="#E5E5E5" marginRight={10} />
                        </TouchableOpacity>),
                    tabBarIcon: () => (
                    <Ionicons name="grid-outline" size={24} color={"#212121CC"} marginRight={10} />
                    ),
                    
                    }} />
            
            
            <Tab.Screen
                    name='CreatePosts'
                    component={CreatePostsScreen}
                    options={{
                        title: "Створити публікацію",
                        headerTitleStyle: {
                            fontWeight: "bold",
                            fontSize: 20,
                        },
                        tabBarIcon: () => (
                            <CreatePostIcon />
                        ),
                    }} />
            
            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    title: "Профіль",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 20,
                    },
                    tabBarIcon: () => (
                    <Ionicons name="person-outline" size={24} color={"#212121CC"} marginRight={10} />
                    ),
                    }} />
            
        </Tab.Navigator>

        
    )
};
