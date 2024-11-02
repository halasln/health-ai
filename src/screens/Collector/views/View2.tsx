import React from 'react';
import { Input, Title } from '@src/components';
import mainStyles from '@src/constants/styles';
import { setInfo } from '@src/redux/info';
import { View } from '@src/wrappers';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const View2 = () => {
  const dispatch = useDispatch();
  const info = useSelector(state => state?.info?.value);

  const [height, setHeight] = useState(info?.height);
  const [weight, setWeight] = useState(info?.weight);
  const [erroHeight, setErroHeight] = useState('');
  const [errorWeight, setErroWeight] = useState('');

  useEffect(() => {
    let checker = true;
    if (!height) {
      setErroHeight('enter your height');
      checker = false;
    }
    if (!weight) {
      setErroWeight('enter your weight');
      checker = false;
    }

    if (checker) {
      setErroWeight('');
      setErroHeight('');
      dispatch(setInfo({ weight: weight, height: height }));
    }
  }, [height, weight]);

  return (
    <View>
      <Title
        title="Your height & Weight?"
        subtitle="Knowning your height and weight will lead to develop a better program"
      />

      <View style={mainStyles.mt20}>
        <Input
          label="Height"
          keyboardType="numeric"
          resetInputState={() => setHeight('')}
          value={height}
          onChange={setHeight}
          error={erroHeight}
        />
        <Input
          label="Weight"
          keyboardType="numeric"
          resetInputState={() => setWeight('')}
          value={weight}
          onChange={setWeight}
          error={errorWeight}
        />
      </View>
    </View>
  );
};

export default View2;
