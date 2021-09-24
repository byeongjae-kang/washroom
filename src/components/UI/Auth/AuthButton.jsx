import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./AuthButtonStyle";

export default function AuthButton(props) {
  let buttonStyle = styles.button;

  if (props.account === "Google") {
    buttonStyle = styles.google;
  }
  if (props.account === "Facebook") {
    buttonStyle = styles.facebook;
  }
  if (props.account === "Apple") {
    buttonStyle = styles.apple;
  }

  return (
    <TouchableOpacity style={buttonStyle}>{props.children}</TouchableOpacity>
  );
}
