import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from '../screens/Onboarding_Screen';
import LoginScreen from '../screens/Login_Screen';
import SignupScreen from '../screens/Signup_Screen';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeScreen from "../screens/Home_Screen";
import ProfileScreen from '../screens/Profile_Screen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
    </Stack.Navigator>
  );
}

export default AuthStack;