import React, { useState, useEffect } from "react";
import { TextInput } from "react-native";
import styles from "./AuthInputStyle";

function AuthInput(props) {
  const [isSecure, setIsSecure] = useState(false);

  useEffect(() => {
    if (props.placeholder.split(" ").includes("Password")) {
      setIsSecure(true);
    } else {
      setIsSecure(false);
    }
  }, []);

  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      secureTextEntry={isSecure}
      value={props.value}
      onChangeText={(value) => props.setValue(value)}
    />
  );
}

export default AuthInput;
