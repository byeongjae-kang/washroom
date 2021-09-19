import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

function AuthText(props) {

  const checkLoginOrRegister = props.isLoggingIn
    ? "Already have an account?"
    : "Do not have an account?";

  return (
    <View>
      <View style={styles.account}>
        <Text>
          {checkLoginOrRegister}
          {"  "}
        </Text>
        <TouchableOpacity onPress={props.onPress}>
          <Text style={styles.accountText}>{props.loginOrRegister}</Text>
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

const styles = StyleSheet.create({
  account: {
    display: "flex",
    flexDirection: "row"
  },
  accountText: {
    color: "rgba(107, 104, 255, 1)",
    fontWeight: "bold"
  }
});

export default AuthText;
