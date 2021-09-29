import React, { useState, useEffect } from "react";
import { TextInput, View, Text } from "react-native";
import styles from "./AuthInputStyle";

function AuthInput(props) {
  const { placeholder, onError, value, onChange, onBlur } = props;
  const [isSecure, setIsSecure] = useState(false);

  useEffect(() => {
    if (placeholder === "Password" || placeholder === "Confirm Password") {
      setIsSecure(true);
    } else {
      setIsSecure(false);
    }
  }, []);

  const inputStyle = onError ? styles.input_invalid : styles.input;

  return (
    <View>
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
        secureTextEntry={isSecure}
        value={value}
        onChangeText={onChange}
        onEndEditing={onBlur}
      />
      {onError && <Text style={styles.text_invalid}>Invalid Input</Text>}
    </View>
  );
}

export default AuthInput;
