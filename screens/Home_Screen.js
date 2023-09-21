import React, {useContext} from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";


import FormButton from "../components/FormButton";
import IconButton from "../components/IconButton";
import ProfileScreen from "./Profile_Screen";


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();


const HomeScreen = () => {
    return (
        <BottomTabs.Navigator 
            screenOptions={({navigation})=> ({
                headerStyle: {backgroundColor:  "#2e64b5"},
                headerTintColor: 'white',
                tabBarStyle:  { backgroundColor: "#2e64b5"},
                headerRight: ({tintColor}) => (
                  <IconButton
                  icon="exit"
                  size={24}
                  color={tintColor}
                  onPress={() => {
                    navigation.navigate('Login');
                  }}
                  />  
                )

            })}
        >
        <BottomTabs.Screen 
            name="Profile"
            component={ProfileScreen}
            options={{
                title: 'User Profile',
                tabBarLabel: 'Profile',
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="person" size={size} color={color} onPress={ProfileScreen} />
                ),
            }}
        />
        <BottomTabs.Screen 
            name="Search"
            component={ProfileScreen}
            options={{
                title: 'Search',
                tabBarLabel: 'Search',
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="search" size={size} color={color} onPress={ProfileScreen} />
                ),
            }}
        />

        </BottomTabs.Navigator>
        /*<View style={styles.container}>
            <Text style={styles.text}>Welcome!</Text>
            <FormButton buttonTitle='Logout' onPress={() => navigation.navigate("Login")}/>
        </View>*/
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    text: {
        fontSize: 30,
        marginTop: 100,
        marginLeft: 10,
        color: "#2e64b5",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    }
})