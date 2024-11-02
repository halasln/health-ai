import { Input, Title } from '@src/components';
import mainStyles from '@src/constants/styles';
import { setInfo } from '@src/redux/info';
import { View } from '@src/wrappers';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const View3 = () => {

  const dispatch = useDispatch();
  const info = useSelector(state => state.info.value);
  const [age, setAge] = useState(info?.age);

  useEffect(() => {
    dispatch(setInfo({ age: age }));
  }, [age]);

  return (
    <View>
      <Title
        title="Your Age?"
        subtitle="Knowning your age will lead to develop a better program"
      />

      <View style={mainStyles.mt20}>
        <Input
          label="Age"
          keyboardType="numeric"
          resetInputState={() => setAge('')}
          value={age}
          onChange={setAge}
        />
      </View>
    </View>
  );
};

export default View3;
