import React from "react";
import { Image, Text, KeyboardAvoidingView } from "react-native";
import AuthForm from "../components/Auth/AuthForm/AuthForm";
import styles from './AuthPageStyle'

function AuthPage() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior='position' >
      <Image
        style={styles.background}
        source={{
          uri: "https://media.istockphoto.com/vectors/male-and-female-bathroom-sign-girl-power-womens-rights-background-vector-id957637170"
        }}
      />
      <AuthForm />
      <Text>or</Text>
    </KeyboardAvoidingView>
  );
}

export default AuthPage;
