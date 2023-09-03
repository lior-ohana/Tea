import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import SocialButton from "../components/SocialButton";
import LoginScreen from "./Login_Screen";
import { windowHeight, windowWidth } from "../utils/Dimentions";
import { authUser, createUser } from "../utils/auth";

import { db } from "../firebase-config.js";
import {
  getDoc,
  where,
  collection,
  query,
  and,
  getDocs,
  doc,
  addDoc,
} from "firebase/firestore";

const SignupScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const checkValidations = () => {
    if (password !== confirmPassword) {
      setMessage("Password and ConfirmPassword does not match");
      return false;
    }
    
    return true;
  };

  const signupHandler = async () => {
    try {
      if (!checkValidations()) {
        return;
      }
      const ref = collection(db, "users");
      const res = await addDoc(ref, {
        Email: email,
        FullName: fullName,
        Password: password,
        Type: userType,
        BirthDate: date,
      });
      if (res.id) {
        setMessage("Document insered");
      }
    } catch (error) {
      setMessage(`Error - ${error}`);
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={{ marginTop: 70, marginLeft: 15 }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={{ color: "#333", fontSize: 16 }}>
          <AntDesign name="back" size={20} color="#666" />
          Login
        </Text>
      </TouchableOpacity>
      <Text style={[styles.text, { color: "#2e64b5" }]}>
        Create Your Account
      </Text>
      <FormInput
        lableValue={fullName}
        onChangeText={(userName) => setFullName(userName)}
        placeholderText="Full Name"
        iconType="user"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        lableValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        lableValue={userType}
        onChangeText={(selectedType) => setUserType(selectedType)}
        placeholderText="User Type (Teenager/Adult)"
        iconType="heart"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        lableValue={date}
        onChangeText={(userDate) => setDate(new Date(userDate))}
        placeholderText="Date Of Birth (DD/MM/YYYY)"
        iconType="calendar"
      />

      <FormInput
        lableValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormInput
        lableValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign Up"
        //onPress={() => alert('Sign Up clicked!')}
        onPress={() => signupHandler()}
      />

      <Text>{message}</Text>
      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{" "}
        </Text>
        <TouchableOpacity onPress={() => alert("Term of services clicked!")}>
          <Text style={[styles.color_textPrivate, { color: "#4867aa" }]}>
            Term of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and</Text>
        <TouchableOpacity onPress={() => alert("Privecy policy clicked!")}>
          <Text style={[styles.color_textPrivate, { color: "#4867aa" }]}>
            Privecy Policy
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fad",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 28,
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 100,
    color: "#051d5f",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 35,
    marginBottom: 10,
    marginTop: 40,
    justifyContent: "center",
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: "400",
    color: "grey",
  },
});
