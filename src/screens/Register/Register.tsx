import { Button, Input, Title } from "@src/components";
import { useState } from "react";
import { ImageBackground, ScrollView, View } from "react-native";

import { setInfo } from "@src/redux/info";
import { useDispatch, useSelector } from "react-redux";

//styles
import assets from "@src/assets";
import mainStyles from "@src/constants/styles";
import styles from "./Register.styles";

const Register = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorconfirmPassword, setErrorConfirmPassword] = useState("");

  setErrorPassword;

  const dispatch = useDispatch();

  const info = useSelector((state) => state.info.value);
  const register = async () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = password.length >= 6;
    let checker = true;
    if (!isValidEmail || email == "") {
      setErrorEmail("check your email");
      console.log("Email is invalid");
      checker = false;
    }

    if (firstName === "") {
      setErrorFirstName("enter you fullname");
      checker = false;
    }

    if (!isValidPassword || password == "") {
      setErrorPassword("password must be at least 6 characters");
      checker = false;
    }

    if (password != confirmPassword || confirmPassword == "") {
      setErrorConfirmPassword(
        "your confirm password must be matched with your password"
      );
      checker = false;
    }

    if (checker) {
      dispatch(setInfo({ userName: firstName }));
      console.log(firstName);
      navigation.navigate("collector");
    }
  };

  return (
    <ImageBackground
      source={assets.registerBg}
      style={mainStyles.screenNoPadding}
    >
      <View
        style={[
          mainStyles.formContainer,
          styles.register,
          { paddingBottom: 40 },
        ]}
      >
        <ScrollView>
          <Title
            title="Register Now"
            subtitle="Create your account"
            style={[mainStyles.mb10]}
            titleStyle={[mainStyles.mb10, { marginTop: 70, color: "#fff" }]}
          />

          <Input
            label="Full Name"
            value={firstName}
            onChange={(value) => setFirstName(value)}
            resetInputState={() => setFirstName("")}
            resetable
          />

          <Input
            label="Email"
            keyboardType="email-address"
            value={email}
            onChange={(value) => {
              setEmail(value);
              setErrorEmail("");
            }}
            resetInputState={() => setEmail("")}
            resetable
            error={errorEmail}
          />

          <Input
            label="Password"
            value={password}
            onChange={(value) => {
              setPassword(value);
              setErrorPassword("");
            }}
            resetInputState={() => setPassword("")}
            resetable
            secureTextEntry={true}
            error={errorPassword}
          />

          <Input
            label="Confirm password"
            value={confirmPassword}
            onChange={(value) => {
              setConfirmPassword(value);
              setErrorConfirmPassword("");
            }}
            resetInputState={() => setConfirmPassword("")}
            resetable
            secureTextEntry={true}
            error={errorconfirmPassword}
          />

          <Button
            secondary
            title="Sign Up"
            outlined
            style={mainStyles.mb10}
            onPress={() => register()}
          />

          <Button
            title="Already have an account? Log In"
            onPress={() => navigation.navigate("login")}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Register;
