import React, {useState, useEffect} from 'react';
import {View, StatusBar, ScrollView, ImageBackground} from 'react-native';
import {Button, Title, Input} from '@health/components';
// import {storeData} from '@health/hooks/useAsyncStorage';
// import {useSelector} from 'react-redux';
// import DeviceInfo from 'react-native-device-info';
// import {SheetManager} from 'react-native-actions-sheet';
// import {showToast} from '@health/hooks/useToast';
// import * as axios from '@health/hooks/useAxios';
import {useDispatch, useSelector} from 'react-redux';
import {setInfo} from '@health/redux/info';

//styles
import styles from './Register.styles';
import mainStyles from '@health/constants/styles';
import {MainLayout} from '@health/wrappers';
import assets from '@health/assets';

//react native get device information
// const getDeviceInfo = async () => {
//   return DeviceInfo.getUserAgent().then(deviceName => {
//     return deviceName;
//   });
// };

const Register = ({navigation}) => {
  // const firebaseToken = useSelector(state => state.firebaseToken.value);

  const [firstName, setFirstName] = useState('');
  const [errorfirstName, setErrorFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorconfirmPassword, setErrorConfirmPassword] = useState('');

  setErrorPassword;

  const dispatch = useDispatch();

  const info = useSelector(state => state.info.value);
  const register = async () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = password.length >= 6;
    let checker = true;
    if (!isValidEmail || email == '') {
      setErrorEmail('check your email');
      console.log('Email is invalid');
      checker = false;
    }

    if (firstName === '') {
      setErrorFirstName('enter you fullname');
      checker = false;
    }

    if (!isValidPassword || password == '') {
      setErrorPassword('password must be at least 6 characters');
      checker = false;
    }

    if (password != confirmPassword|| confirmPassword == '') {
      setErrorConfirmPassword(
        'your confirm password must be matched with your password',
      );
      checker = false;
    }

    if (checker) {
      dispatch(setInfo({userName: firstName}));
      console.log(firstName);
     navigation.navigate('collector');

    }
  };

  // const register = async () => {
  //   let data = new FormData();
  //   data.append('firstName', firstName);
  //   data.append('lastName', lastName);
  //   data.append('email', email);
  //   data.append('phone', phone);
  //   data.append('password', password);
  //   data.append('device', await getDeviceInfo());
  //   data.append('firebaseToken', firebaseToken);

  //   SheetManager.show('Loading');

  //   axios
  //     .post('auth/register', data)
  //     .then(res => {
  //       SheetManager.hide('Loading');
  //       storeData('user_t', res.data.token);
  //       navigation.reset({
  //         index: 0,
  //         routes: [{name: 'DOCTOR_PANEL'}],
  //       });
  //     })
  //     .catch(err => {
  //       SheetManager.hide('Loading');
  //       console.log(err);
  //     });
  // };

  return (
    <ImageBackground
      source={assets.registerBg}
      style={mainStyles.screenNoPadding}>
      <View
        style={[
          mainStyles.formContainer,
          styles.register,
          {paddingBottom: 40},
        ]}>
        <ScrollView>
          <Title
            title="Register Now"
            subtitle="Create your account"
            style={[mainStyles.mb10]}
            titleStyle={[mainStyles.mb10, {marginTop: 70, color: '#fff'}]}
          />

          <Input
            label="Full Name"
            value={firstName}
            onChange={value => setFirstName(value)}
            resetInputState={() => setFirstName('')}
            resetable
          />

          {/* <Input
            label="Last name"
            value={lastName}
            onChange={value => setLastName(value)}
            resetInputState={() => setLastName('')}
            resetable
          /> */}

          <Input
            label="Email"
            keyboardType="email-address"
            value={email}
            onChange={value => {
              setEmail(value);
              setErrorEmail('');
            }}
            resetInputState={() => setEmail('')}
            resetable
            error={errorEmail}
          />

          {/* <Input
            label="Phone number"
            keyboardType="number-pad"
            value={phone}
            onChange={value => setPhone(value)}
            resetInputState={() => setPhone('')}
            resetable
          /> */}

          <Input
            label="Password"
            value={password}
            onChange={value => {
              setPassword(value);
              setErrorPassword('');
            }}
            resetInputState={() => setPassword('')}
            resetable
            secureTextEntry={true}
            error={errorPassword}
          />

          <Input
            label="Confirm password"
            value={confirmPassword}
            onChange={value => {
              setConfirmPassword(value);
              setErrorConfirmPassword('');
            }}
            resetInputState={() => setConfirmPassword('')}
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
            onPress={() => navigation.navigate('login')}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Register;
