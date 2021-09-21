import React, { Fragment, useState } from "react";
import { Text, View } from "react-native";
import AuthButton from "../../UI/Auth/AuthButton";
import AuthInput from "../../UI/Auth/AuthInput";
import AuthText from "../AuthText/AuthText";
import styles from "./AuthFormStyle";

function AuthForm() {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const loginHandler = () => {
    setEmail("");
    setPassword("");
  };

  const registerHandler = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const accountHandler = () => {
    setIsLoggingIn((prev) => !prev);
  };

  const Login = (
    <Fragment>
      <AuthInput
        placeholder="username@gmail.com"
        value={email}
        setValue={setEmail}
      />
      <AuthInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
      />
    </Fragment>
  );

  const Register = (
    <Fragment>
      <AuthInput
        placeholder="User Name"
        value={username}
        setValue={setUsername}
      />
      <AuthInput
        placeholder="username@gmail.com"
        value={email}
        setValue={setEmail}
      />
      <AuthInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
      />
      <AuthInput
        placeholder="confirm Password"
        value={confirmPassword}
        setValue={setConfirmPassword}
      />
    </Fragment>
  );

  const loginOrRegister = isLoggingIn ? "Login" : "Register";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{loginOrRegister}</Text>
      {isLoggingIn ? Login : Register}
      <AuthButton
        onPress={isLoggingIn ? loginHandler : registerHandler}
        buttonText={loginOrRegister}
      />
      <AuthText
        onPress={accountHandler}
        isLoggingIn={isLoggingIn}
        loginOrRegister={loginOrRegister}
      />
    </View>
  );
}

export default AuthForm;
