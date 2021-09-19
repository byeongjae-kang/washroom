import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function AuthButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 350,
    backgroundColor: "rgba(107, 104, 255, 1)",
    borderColor: "#000000",
    borderWidth: 1,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
})
