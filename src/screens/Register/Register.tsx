import {useNavigation} from '@react-navigation/native';
import assets from '@src/assets';
import {Input, Title, AppButton} from '@src/components';
import mainStyles from '@src/constants/styles';
import {useCollector} from '@src/store/useCollector';
import {registerValidationSchema} from '@src/validations/CollectorValidationSchemas';
import {Formik} from 'formik';
import {ImageBackground, ScrollView, View} from 'react-native';
import styles from './Register.styles';

const Register = () => {
  const {setInfo, data} = useCollector();

  const navigation = useNavigation();

  return (
    <ImageBackground
      source={assets.registerBg}
      style={mainStyles.screenNoPadding}>
      <View style={[styles.register, {paddingBottom: 40}]}>
        <ScrollView>
          <Title
            title="Register Now"
            subtitle="Create your account"
            style={[mainStyles.mb10]}
            titleStyle={[mainStyles.mb10, {marginTop: 70, color: '#fff'}]}
          />

          <Formik
            initialValues={{
              firstName: 'hela',
              email: 'hela@gmail.com',
              password: '123456',
              confirmPassword: '123456',
            }}
            validationSchema={registerValidationSchema}
            onSubmit={values => {
              console.log('Form Submitted:', values);
              // let data = new FormData();
              // data.append('fullName', values.firstName);
              // data.append('email', values.email);
              // data.append('password', values.password);
              // console.log(data);

              // post('auth/register', data)
              //   .then(res => {
              //     console.log(res.data?.user.first_name);
              //     dispatch(
              //       setInfo({
              //         userName: res?.data?.user?.user_name,
              //         email: res?.data?.user?.email,
              //         firstName: res?.data?.user?.first_name,
              //         lastName: res?.data?.user?.last_name,
              //       }),
              //     );
              //     navigation.navigate('collector');
              //   })
              //   .catch(err => {
              //     console.log(err);
              //   });
              navigation.navigate('collector');
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
                  label="Full Name"
                  value={values.firstName}
                  onChange={value => handleChange('firstName')(value)}
                  onBlur={handleBlur('firstName')}
                  resetInputState={() => handleChange('firstName')('')}
                  resetable
                  error={touched.firstName && errors.firstName}
                />

                <Input
                  label="Email"
                  keyboardType="email-address"
                  value={values.email}
                  onChange={value => handleChange('email')(value)}
                  onBlur={handleBlur('email')}
                  resetInputState={() => handleChange('email')('')}
                  resetable
                  error={touched.email && errors.email}
                />

                <Input
                  label="Password"
                  value={values.password}
                  onChange={value => handleChange('password')(value)}
                  onBlur={handleBlur('password')}
                  resetInputState={() => handleChange('password')('')}
                  resetable
                  secureTextEntry={true}
                  error={touched.password && errors.password}
                />

                <Input
                  label="Confirm password"
                  value={values.confirmPassword}
                  onChange={value => handleChange('confirmPassword')(value)}
                  onBlur={handleBlur('confirmPassword')}
                  resetInputState={() => handleChange('confirmPassword')('')}
                  resetable
                  secureTextEntry={true}
                  error={touched.confirmPassword && errors.confirmPassword}
                />

                <AppButton
                  secondary
                  title="Sign Up"
                  outlined
                  style={mainStyles.mb10}
                  onPress={handleSubmit}
                />
                <AppButton
                  title="Already have an account? Log In"
                  onPress={() => navigation.navigate('login')}
                />
              </>
            )}
          </Formik>
        </ScrollView>
        <AppButton
          title="Next"
          onPress={() => {
            console.log(userInfo);
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Register;
