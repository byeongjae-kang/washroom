import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import AuthForm from "../components/Auth/AuthForm/AuthForm";
import OtherLoginButton from "../components/Auth/OtherLoginButton/OtherLoginButton";

import styles from "./AuthPageStyle";

function AuthPage() {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.background}
        source={{
          uri: "https://media.istockphoto.com/vectors/male-and-female-bathroom-sign-girl-power-womens-rights-background-vector-id957637170"
        }}
      />
      <View style={styles.authwrapper}>
        <AuthForm />
        <Text>or</Text>
        <OtherLoginButton />
      </View>
    </ScrollView>
  );
}

export default AuthPage;
