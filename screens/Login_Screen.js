import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import SocialButton from "../components/SocialButton";

import { db } from "../firebase-config.js";
import {
  getDoc,
  where,
  collection,
  query,
  and,
  getDocs, 
} from "firebase/firestore";
// import { firebase } from "@react-native-firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = async (event) => {
    console.log(`${email} - ${password}`);
    const ref = collection(db, "users");

    var q = query(
      ref,
      and(where("Email", "==", email), where("Password", "==", password))
    );

    const doc_ref = await getDocs(q);

    if (doc_ref.size === 0) {
      setMessage("Invalid email or/and password");
    }
    else{
        navigation.navigate("Home")
    }
  };

  /*const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email,password).then((userCredential)=> {
      navigation.navigate("Home")
    })
    .catch((error) => {
      console.error(error);
    });
  };*/

  return (
    <View>
      <Image
        source={require("../assets/welcomeLogo.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>TEA Mobile App</Text>
      <FormInput
        lableValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        lableValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton buttonTitle="Sign In" onPress={login} />

      <Text>{message}</Text>
      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.navButtonText}>
          Don't have an account? Sign Up here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fad",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    height: 250,
    width: 250,
    resizeMode: "cover",
    marginLeft: 90,
    marginTop: 30,
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
    marginLeft: 110,
    color: "#2e64b5",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
  },
});
