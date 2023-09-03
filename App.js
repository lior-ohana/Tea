import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

//import OnboardingScreen from './screens/Onboarding_Screen';
//import LoginScreen from './screens/Login_Screen';
import Providers from './navigation/index';

//const AppStack = createStackNavigator();

const App = () => {
  /*return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Onboarding" component={OnboardingScreen}/>
        <AppStack.Screen name="Login" component={LoginScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );*/
  return <Providers />;
}

export default App;