import assets from '@src/assets';
import {AppButton, Input, Title} from '@src/components';
import mainStyles from '@src/constants/styles';
import {setInfo} from '@src/redux/info';
import {post} from '@src/utils/axios';
import {Formik} from 'formik';
import {
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import styles from './LogIn.styles';

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
