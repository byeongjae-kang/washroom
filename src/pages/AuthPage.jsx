import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import AuthForm from "../components/Auth/AuthForm/AuthForm";

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 0,
    padding: 0
  },

  background: {
    marginTop: 0,
    width: 1080,
    height: 280,
    resizeMode: "contain",
    position: "relative"
  }
});

export default AuthPage;
