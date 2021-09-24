import React from "react";
import { Text, View, Image } from "react-native";
import AuthButton from "../../UI/Auth/AuthButton";

import styles from "./OtherLoginButtonStyle";

function OtherLoginButton(props) {
  const loginButtons = [
    {
      name: "Google",
      logo: "https://user-images.githubusercontent.com/1770056/58111071-c2941c80-7bbe-11e9-8cac-1c3202dffb26.png",
      style: styles.google
    },
    {
      name: "Facebook",
      logo: "https://www.drivedominion.com/wp-content/uploads/2018/07/facebook-emblem.jpg",
      style: styles.facebook
    },
    {
      name: "Apple",
      logo: "https://www.iconsdb.com/icons/preview/white/apple-xxl.png",
      style: styles.apple
    }
  ];

  return (
    <View style={styles.container}>
      {loginButtons.map((button, index) => {
        return (
          <View key={index} style={styles.wrapper}>
            <AuthButton account={button.name}>
              <Image
                style={styles.logo}
                source={{
                  uri: button.logo
                }}
              />
              <Text style={button.style}>
                Continue with {button.name} Account
              </Text>
            </AuthButton>
          </View>
        );
      })}
    </View>
  );
}

export default OtherLoginButton;
