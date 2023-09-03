import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding 
        onDone={() => navigation.navigate("Login")} //change to replace
        onSkip={() => navigation.navigate("Login")}
        pages={[
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding1.png')}/>,
                title: 'Signup And Join Us',
                subtitle: 'create your profile and start getting job offers!'
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding2.png')}/>,
                title: 'Connect With Others',
                subtitle: 'Get messages from people that may want to hire you.'
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding3.png')}/>,
                title: 'Manage Your Incomes',
                subtitle: 'Register the jobs you made and your sallery for them.'
            }
        ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});