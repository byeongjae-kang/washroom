import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet } from "react-native";

function AuthInput(props) {
  const [isSecure, setIsSecure] = useState(false);

  useEffect(() => {
    if (props.placeholder.includes("Password")) {
      setIsSecure(true);
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

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 350,
    marginBottom: 10,
    borderBottomColor: "rgba(107, 104, 255, 1)",
    borderBottomWidth: 1,
    borderRadius: 2,
    padding: 15,
    shadowRadius: 1.41,
    elevation: 0.1
  }
});

export default AuthInput;
