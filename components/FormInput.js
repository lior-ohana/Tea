import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { windowHeight, windowWidth } from "../utils/Dimentions";

const FormInput = ({lableValue, placeholderText, iconType, ...rest}) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
                <AntDesign name={iconType} size={25} color="#666" />
            </View>
            <TextInput 
                value={lableValue}
                style={styles.input}
                numberOfLines={1}
                placeholder={placeholderText}
                placeholderTextColor= "#666"
                {...rest}
            />
        </View>
    );
};

export default FormInput;

const styles = StyleSheet.create ({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 10,
        width: '96%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth/1.5,
        height: windowHeight/1.5,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1
    }
});