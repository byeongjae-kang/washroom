import React from "react";
import { Image, Text, View, KeyboardAvoidingView } from "react-native";
import AuthForm from "../components/Auth/AuthForm/AuthForm";
import GoogleLogin from "../components/Auth/GoogleLogin/GoogleLogin";
import styles from "./AuthPageStyle";

function AuthPage() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      <Image
        style={styles.background}
        source={{
          uri: "https://media.istockphoto.com/vectors/male-and-female-bathroom-sign-girl-power-womens-rights-background-vector-id957637170"
        }}
      />
      <View style={styles.authwrapper}>
        <AuthForm />
        <Text>or</Text>
        <GoogleLogin />
      </View>
    </KeyboardAvoidingView>
  );
}

export default AuthPage;
