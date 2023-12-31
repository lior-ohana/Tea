import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import {windowWidth, windowHeight} from "../utils/Dimentions";

const FormButton = ({buttonTitle, ...rest}) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
};

export default FormButton;

const styles = StyleSheet.create ({
    buttonContainer: {
        marginTop: 10,
        marginLeft: 40,
        width: '80%',
        height: windowHeight / 15,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3, 
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    }
});