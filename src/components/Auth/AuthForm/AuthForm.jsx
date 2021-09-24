import React, { Fragment, useState } from "react";
import { Text, View, KeyboardAvoidingView } from "react-native";
import useAuthInput from "../../../hooks/useAuthInput";
import AuthButton from "../../UI/Auth/AuthButton";
import AuthInput from "../../UI/Auth/AuthInput";
import AuthText from "../AuthText/AuthText";
import styles from "./AuthFormStyle";

function AuthForm() {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  // const [formIsValid, setFormIsValid] = useState(false);

  const {
    value: username,
    valueIsValid: usernameIsValid,
    hasError: usernameHasError,
    reset: resetUsername,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler
  } = useAuthInput((value) => value.trim() !== "");

  const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    reset: resetEmail,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler
  } = useAuthInput((value) => value.includes("@"));

  const {
    value: password,
    valueIsValid: passwordIsValid,
    hasError: passwordHasError,
    reset: resetPassword,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler
  } = useAuthInput((value) => value.trim() !== "");

  const {
    value: confirmPassword,
    valueIsValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    reset: resetConfirmPassword,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler
  } = useAuthInput((value) => value === password);

  let formIsValid = false;

  console.log(usernameIsValid);
  console.log(emailIsValid);
  console.log(passwordIsValid);
  console.log(confirmPasswordIsValid);
  if (
    (isLoggingIn && passwordIsValid && emailIsValid) ||
    (emailIsValid &&
      passwordIsValid &&
      usernameIsValid &&
      confirmPasswordIsValid)
  ) {
    formIsValid = true;
  }

  const loginHandler = () => {
    if (!formIsValid) {
      return;
    }
    resetEmail();
    resetPassword();
  };

  const registerHandler = () => {
    resetEmail();
    resetPassword();
    resetUsername();
    resetConfirmPassword();
  };

  const accountHandler = () => {
    setIsLoggingIn((prev) => !prev);
    resetEmail();
    resetPassword();
    resetUsername();
    resetConfirmPassword();
  };

  const Login = (
    <KeyboardAvoidingView behavior="position">
      <AuthInput
        placeholder="username@gmail.com"
        value={email}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        onError={emailHasError}
      />
      <AuthInput
        placeholder="Password"
        value={password}
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
        onError={passwordHasError}
      />
    </KeyboardAvoidingView>
  );

  const Register = (
    <Fragment>
      <AuthInput
        placeholder="User Name"
        value={username}
        onChange={usernameChangeHandler}
        onBlur={usernameBlurHandler}
        onError={usernameHasError}
      />
      <AuthInput
        placeholder="username@gmail.com"
        value={email}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        onError={emailHasError}
      />
      <AuthInput
        placeholder="Password"
        value={password}
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
        onError={passwordHasError}
      />
      <AuthInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={confirmPasswordChangeHandler}
        onBlur={confirmPasswordBlurHandler}
        onError={confirmPasswordHasError}
      />
    </Fragment>
  );

  const loginOrRegister = isLoggingIn ? "Login" : "Register";

  return (
    <View>
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
