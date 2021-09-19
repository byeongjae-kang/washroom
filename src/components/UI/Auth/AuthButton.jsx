import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./AuthButtonStyle";

export default function AuthButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
}
