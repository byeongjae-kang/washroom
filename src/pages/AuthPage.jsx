import React from "react";
import { View, Image, Text } from "react-native";
import AuthForm from "../components/Auth/AuthForm/AuthForm";
import styles from './AuthPageStyle'

function AuthPage() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={{
          uri: "https://media.istockphoto.com/vectors/male-and-female-bathroom-sign-girl-power-womens-rights-background-vector-id957637170"
        }}
      />
      <AuthForm />
      <Text>or</Text>
    </View>
  );
}

export default AuthPage;
