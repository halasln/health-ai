import { useNavigation } from '@react-navigation/native';
import assets from '@src/assets';
import { AppButton, Input, Title } from '@src/components';
import mainStyles from '@src/constants/styles';
import { useCollector } from '@src/store/useCollector';
import { post } from '@src/utils/axios';
import { registerValidationSchema } from '@src/validations/CollectorValidationSchemas';
import { Formik } from 'formik';
import { ImageBackground, ScrollView, View, Alert } from 'react-native';
import styles from './Register.styles';

const Register = () => {
  const { setInfo, data } = useCollector();
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={assets.registerBg}
      style={mainStyles.screenNoPadding}>
      <View style={[styles.register, { paddingBottom: 40 }]}>
        <ScrollView>
          <Title
            title="Register Now"
            subtitle="Create your account"
            style={[mainStyles.mb10]}
            titleStyle={[mainStyles.mb10, { marginTop: 70, color: '#fff' }]}
          />

          <Formik
            initialValues={{
              firstName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={registerValidationSchema}
            onSubmit={values => {
              console.log('Form Submitted:', values);
              let data = new FormData();
              data.append('fullName', values.firstName);
              data.append('email', values.email);
              data.append('password', values.password);

              // POST request to register user
              post('auth/register', data)
                .then(res => {
                  console.log('Response from API:', res?.data);

                  // Check if email already exists
                  if (res?.data?.error && res?.data?.error?.message.includes('Email already exists')) {
                    // Show an error message
                    Alert.alert('Email already exists', 'Please use a different email address.');
                  } else if (res?.data?.user) {
                    // Save user data if registration is successful
                    setInfo({
                      username: res?.data?.user?.user_name,
                      email: res?.data?.user?.email,
                      firstName: res?.data?.user?.first_name,
                      lastName: res?.data?.user?.last_name,
                    });
                    // Navigate to the next screen (e.g., 'collector')
                    navigation.navigate('collector');
                  }
                })
                .catch(err => {
                  console.error(err);
                  Alert.alert('Error', 'An error occurred while registering. Please try again.');
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
                  label="Full Name"
                  value={values.firstName}
                  onChangeText={value => handleChange('firstName')(value)}
                  onBlur={handleBlur('firstName')}
                  resetInputState={() => handleChange('firstName')('')}
                  resetable
                  error={touched.firstName && errors.firstName}
                />

                <Input
                  label="Email"
                  keyboardType="email-address"
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
                  onChangeText={value => handleChange('password')(value)}
                  onBlur={handleBlur('password')}
                  resetInputState={() => handleChange('password')('')}
                  resetable
                  secureTextEntry={true}
                  error={touched.password && errors.password}
                />

                <Input
                  label="Confirm password"
                  value={values.confirmPassword}
                  onChangeText={value => handleChange('confirmPassword')(value)}
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
      </View>
    </ImageBackground>
  );
};

export default Register;