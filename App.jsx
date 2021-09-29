import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AuthPage from "./src/pages/AuthPage";

export default function App() {
  const user = useState(false)[0];

  return (
    <View style={styles.container}>
      {!user && <AuthPage />}
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
