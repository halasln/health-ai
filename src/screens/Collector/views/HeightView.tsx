import {Input, Title} from '@src/components';
import mainStyles from '@src/constants/styles';
import {useCollector} from '@src/store/useCollector';
import {heightWeightValidationSchema} from '@src/validations/CollectorValidationSchemas';
import {View} from '@src/wrappers';
import {Formik} from 'formik';
import React, {useEffect} from 'react';

const HeightView = () => {
  const {setInfo, data} = useCollector();

  return (
    <View>
      <Title
        title="Your Height & Weight?"
        subtitle="Providing this information helps us personalize your program"
      />

      <Formik
        initialValues={{
          height: data?.height || '',
          weight: data?.weight || '',
        }}
        validationSchema={heightWeightValidationSchema}
        validateOnChange={true}
        validateOnBlur={false}
        onSubmit={values => {
          setInfo({height: values?.height, weight: values?.weight});
          console.log('Height and Weight Submitted and Dispatched:', values);
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
            if (!errors.height && values?.height > 0) {
              setInfo({height: values?.height});
            }
            if (!errors.weight && values?.weight > 0) {
              setInfo({weight: values?.weight});
            }
          }, [values.height, values.weight, errors]);

          return (
            <>
              <View style={mainStyles.mt20}>
                <Input
                  label="Height (cm)"
                  keyboardType="number-pad"
                  value={values.height}
                  onChangeText={value => {
                    handleChange('height')(value);
                    setFieldTouched('height', true, false);
                  }}
                  onBlur={handleBlur('height')}
                  resetInputState={() => handleChange('height')('')}
                  resetable
                  error={errors.height}
                />
              </View>
              <View style={mainStyles.mt20}>
                <Input
                  label="Weight (kg)"
                  keyboardType="number-pad"
                  value={values.weight}
                  onChangeText={value => {
                    handleChange('weight')(value);
                    setFieldTouched('weight', true, false);
                  }}
                  onBlur={handleBlur('weight')}
                  resetInputState={() => handleChange('weight')('')}
                  resetable
                  error={errors.weight}
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
