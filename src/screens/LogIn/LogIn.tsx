import {Button, Input, Title} from '@src/components';
import {useState} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from 'react-native';
import * as Yup from 'yup';

import mainStyles from '@src/constants/styles';

//styles
import assets from '@src/assets';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import styles from './LogIn.styles';
import {post} from '@src/utils/axios';
import { setInfo } from '@src/redux/info';

const validationSchema = Yup.object({
  userName: Yup.string().required('Please enter your username'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Please enter your password'),
});

const LogIn = ({navigation}) => {
  const dispatch = useDispatch();

  // const login = async () => {
  //   console.log(userName);
  // };
  //  dispatch(setInfo({ userName: userName }));
  //  navigation.navigate("collector");

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

            <Formik
              initialValues={{
                userName: '',
                password: '',
              }}
              validationSchema={validationSchema}
              onSubmit={values => {
                console.log('Form Submitted:', values);
                let data = new FormData();
                data.append('username', values.userName);
                data.append('password', values.password);
                console.log(data);

                post('auth/login', data)
                  .then(res => {
                    console.log(res.data.age);
                    dispatch(
                      setInfo({
                        userName: res?.data?.user_name,
                        email: res?.data?.email,
                        firstName: res?.data?.first_name,
                        lastName: res?.data?.last_name,
                        gender: res?.data?.gender,
                        height: res?.data?.height,
                        age: res?.data?.age,
                        weight: res?.data?.weight,
                      }),
                    );
                    // navigation.navigate('collector');
                  })
                  .catch(err => {
                    console.log(err);
                  });
              }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  <Input
                    label="Username"
                    value={values.userName}
                    onChange={value => handleChange('userName')(value)}
                    onBlur={handleBlur('userName')}
                    resetInputState={() => handleChange('userName')('')}
                    resetable
                    error={touched.userName && errors.userName}
                  />

                  <Input
                    label="Password"
                    value={values.password}
                    secureTextEntry={true}
                    onChange={value => handleChange('password')(value)}
                    onBlur={handleBlur('password')}
                    resetInputState={() => handleChange('password')('')}
                    resetable
                    error={touched.password && errors.password}
                  />

                  <Button
                    secondary
                    title="Log In"
                    outlined
                    style={mainStyles.mb10}
                    onPress={handleSubmit}
                  />

                  <Button
                    title="Don't have an account? Sign Up"
                    onPress={() => navigation.navigate('register')}
                  />
                </>
              )}
            </Formik>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
};

export default LogIn;
