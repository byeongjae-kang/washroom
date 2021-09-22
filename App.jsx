import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AuthPage from "./src/pages/AuthPage";

export default function App() {
  return (
    <View style={styles.container}>
      <AuthPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center"
  }
});
