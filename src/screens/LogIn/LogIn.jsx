import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import {Button, Title, Input} from '@health/components';

import mainStyles from '@health/constants/styles';

//styles
import styles from './LogIn.styles';
import assets from '@health/assets';
import {useDispatch, useSelector} from 'react-redux';
import {setInfo} from '@health/redux/info';

const LogIn = ({navigation}) => {
  const dispatch = useDispatch();

  const info = useSelector(state => state.info.value);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorUserName, setErrorUserName] = useState('');

  const login = async () => {
    let checker = true;
    const isValidPassword = password.length >= 6;

    if (userName == '') {
      setErrorUserName('enter your username');
      checker = false;
    }

    if (password == '' || !isValidPassword) {
      setErrorPassword('your password empty or invalid');
      checker = false;
    }

    if (checker) {
      // console.log(userName);
      // console.log(password);
      dispatch(setInfo({userName: userName}));
      navigation.navigate('collector');
    } else {
      console.log('Email or Password field is empty');
    }

    
  };

  return (
    <ImageBackground source={assets.loginBg} style={mainStyles.screenNoPadding}>
      <View style={[mainStyles.screen, styles.login]}>
        <KeyboardAvoidingView behavior="padding" style={styles.loginContainer}>
          <ScrollView
            style={mainStyles.formContainer}
            contentContainerStyle={styles.loginContainer}>
            <Title
              title="Welcome back"
              style={[mainStyles.mb20]}
              titleStyle={[mainStyles.mb10, {marginTop: 70, color: '#fff'}]}
              subtitle="Login to your account"
            />

            <Input
              label="Username"
              value={userName}
              onChange={value => {
                setUserName(value);
                setErrorUserName('');
              }}
              resetInputState={() => setUserName('')}
              resetable
              error={errorUserName}
            />

            <Input
              label="Password"
              value={password}
              error={errorPassword}
              secureTextEntry={true}
              onChange={value => {
                setPassword(value);
                setErrorPassword('');
              }}
              resetInputState={() => setPassword('')}
              resetable
            />

            <Button
              secondary
              title="Log In"
              outlined
              style={mainStyles.mb10}
              onPress={() => login()}
            />

            <Button
              title="Don't have an account? Sign Up"
              onPress={() => navigation.navigate('register')}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
};

export default LogIn;
