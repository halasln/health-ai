import {AppButton, Input, Title} from '@src/components';
import mainStyles from '@src/constants/styles';
import {useCollector} from '@src/store/useCollector';
import {ageValidationSchema} from '@src/validations/CollectorValidationSchemas';
import {View} from '@src/wrappers';
import {Formik} from 'formik';
import React, {useEffect} from 'react';

const AgeView = () => {
  const {setInfo, data} = useCollector();

  return (
    <View>
      <Title
        title="Your Age?"
        subtitle="Knowing your age will help us develop a better program"
      />

      <Formik
        initialValues={{age: data?.age || ''}}
        validationSchema={ageValidationSchema}
        validateOnChange={true}
        validateOnBlur={false}
        onSubmit={values => {
          setInfo({age: values?.age});
          console.log('Age Submitted and Dispatched:', values?.age);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldTouched,
        }) => {
          useEffect(() => {
            if (!errors.age && values?.age > 0) {
              setInfo({age: values?.age});
            }
          }, [values.age, errors.age]);

          return (
            <>
              <View style={mainStyles.mt20}>
                <Input
                  label="Age"
                  keyboardType="number-pad"
                  value={values.age}
                  onChangeText={value => {
                    handleChange('age')(value);
                    setFieldTouched('age', true, false);
                  }}
                  onBlur={handleBlur('age')}
                  resetInputState={() => handleChange('age')('')}
                  resetable
                  error={errors.age}
                />
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default AgeView;
