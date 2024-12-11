import assets from '@src/assets';
import {AppButton, Input, Title} from '@src/components';
import mainStyles from '@src/constants/styles';
import {post} from '@src/utils/axios';
import {Formik} from 'formik';
import {
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from 'react-native';
import * as Yup from 'yup';
import styles from './LogIn.styles';
import { useUserData } from '@src/store/useUserData';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Please enter your email'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Please enter your password'),

});

const LogIn = ({navigation}) => {

  const {  setUserData }=useUserData()

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
                email: '',
                password: '',
              }}
              validationSchema={validationSchema}
              onSubmit={values => {
                console.log('Form Submitted:', values);
                let data = new FormData();
                data.append('email', values.email);
                data.append('password', values.password);
                console.log(data);

                post('auth/login', data)
                  .then(res => {
                    console.log('API Response:nakjsaks', res?.data);

                    setUserData(res?.data);
                
                    console.log('User data set in Zustand:', res?.data);
                    navigation.navigate('waiting', {fromLogin: true});
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
                    label="Email"
                    value={values.email}
                    onChangeText={value => handleChange('email')(value)}
                    onBlur={handleBlur('email')}
                    resetInputState={() => handleChange('email')('')}
                    resetable
                    error={touched.email && errors.email}
                  />

                  <Input
                    label="Password"
                    value={values.password}
                    secureTextEntry={true}
                    onChangeText={value => handleChange('password')(value)}
                    onBlur={handleBlur('password')}
                    resetInputState={() => handleChange('password')('')}
                    resetable
                    error={touched.password && errors.password}
                  />

                  <AppButton
                    secondary
                    title="Log In"
                    outlined
                    style={mainStyles.mb10}
                    onPress={handleSubmit}
                  />

                  <AppButton
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
