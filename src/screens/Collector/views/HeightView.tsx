import { Input, Title } from '@src/components';
import mainStyles from '@src/constants/styles';
import { useCollector } from '@src/store/useCollector';
import { heightValidationSchema } from '@src/validations/CollectorValidationSchemas';
import { View } from '@src/wrappers';
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
  }, [data?.gender]);


  return (
    <View>
      <Title
        title="Your height & Weight?"
        subtitle="Knowing your height and weight will help us develop a better program"
      />

      <Formik
        initialValues={{
          height: data?.height || 0,
          weight: data?.weight || 0,
        }}
        validationSchema={heightValidationSchema}
        onSubmit={values => {
          setInfo({weight: values.weight, height: values.height});

          console.log('Form Submitted and Dispatched:', values);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => {
          useEffect(() => {
            if (
              !errors.height &&
              !errors.weight &&
              values.height > 0 &&
              values.weight > 0
            ) {
              handleSubmit(); // Automatically submit when valid
            }
          }, [values, errors, handleSubmit]);

          return (
            <>
              <View style={mainStyles.mt20}>
                <Input
                  label="Height"
              keyboardType='number-pad'
                  value={values.height}
                  onChangeText={value => handleChange('height')(value)}
                  onBlur={handleBlur('height')}
                  resetInputState={() => handleChange('height')('')}
                  resetable
                  error={touched.height && errors.height}
                />
                <Input
                  label="Weight"
                  keyboardType='number-pad'
                
                  value={values.weight}
                  onChangeText={value => handleChange('weight')(value)}
                  onBlur={handleBlur('weight')}
                  resetInputState={() => handleChange('weight')('')}
                  resetable
                  error={touched.weight && errors.weight}
                />
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default HeightView;
