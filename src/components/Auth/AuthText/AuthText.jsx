import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./AuthTextStyle";

function AuthText(props) {
  const checkLoginOrRegister = props.isLoggingIn
    ? "Do not have an account?"
    : "Already have an account?";

  const loginOrRegister = props.isLoggingIn ? "Register" : "Login";

  return (
    <View>
      <View style={styles.account}>
        <Text>
          {checkLoginOrRegister}
          {"  "}
        </Text>
        <TouchableOpacity onPress={props.onPress}>
          <Text style={styles.accountText}>{loginOrRegister}</Text>
        </TouchableOpacity>
      </View>
      {props.isLoggingIn && (
        <View style={styles.account}>
          <Text>Forgot Password?{"  "}</Text>
          <TouchableOpacity>
            <Text style={styles.accountText}>Click here!!</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default AuthText;
