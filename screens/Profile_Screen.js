import React, {useContext} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import FormButton from "../components/FormButton";
import IconButton from "../components/IconButton";

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.userImg} source={require('../assets/Default-avatar.jpeg')} />

            <Text style={styles.text} >Hello!</Text>

        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    text: {
        fontSize: 20,
        color: '#333333',
        padding:50
    },
    userImg: {
        height: 100,
        width: 100,
        borderRadius: 75,
        marginBottom:400,
        marginRight:280
    }
})