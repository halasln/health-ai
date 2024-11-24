import { AppButton, Input, Title } from '@src/components';
import mainStyles from '@src/constants/styles';
import { useCollector } from '@src/store/useCollector';
import { heightValidationSchema } from '@src/validations/CollectorValidationSchemas';
import { AppPressable, View } from '@src/wrappers';
import { Formik } from 'formik';
import React, { useEffect } from 'react';

const HeightView = () => {
  const {setInfo, data,setIsDisabled} = useCollector();
  useEffect(() => {
    if (data?.height && data?.weight) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [data?.height, data?.weight]);

  const handleAutoSubmit = (values, errors, isValid, handleSubmit) => {
    useEffect(() => {
      if (
        isValid &&
        Number(values.height) > 0 &&
        Number(values.weight) > 0 &&
        !errors.height &&
        !errors.weight
      ) {
        handleSubmit(); // Automatically submit the form
      }
    }, [values, errors, isValid, handleSubmit]);
  };

  return (
    <View>
      <Title
        title="Your height & Weight?"
        subtitle="Knowing your height and weight will help us develop a better program"
      />

<Formik
        initialValues={{
          height: data?.height ? String(data.height) : '', // Ensure initial value is string
          weight: data?.weight ? String(data.weight) : '', // Ensure initial value is string
        }}
        validationSchema={heightValidationSchema}
        onSubmit={values => {
          setInfo({
            height: parseFloat(values.height), // Convert string to number
            weight: parseFloat(values.weight), // Convert string to number
          });
          console.log('Form Submitted and Dispatched:', values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => {
          // Call the custom hook for auto-submission
          handleAutoSubmit(values, errors, isValid, handleSubmit);

          return (
            <View style={mainStyles.mt20}>
              <Input
                label="Height"
                keyboardType="number-pad"
                value={values.height}
                onChangeText={handleChange('height')}
                onBlur={handleBlur('height')}
                resetInputState={() => handleChange('height')('')}
                resetable
                error={touched.height && errors.height}
              />
              <Input
                label="Weight"
                keyboardType="number-pad"
                value={values.weight}
                onChangeText={handleChange('weight')}
                onBlur={handleBlur('weight')}
                resetInputState={() => handleChange('weight')('')}
                resetable
                error={touched.weight && errors.weight}
              />
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default HeightView;
