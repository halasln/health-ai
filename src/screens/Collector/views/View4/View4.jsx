import React, {useState, useEffect} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {View, Text} from '@health/wrappers';
import {Input, Title} from '@health/components';

//styles
import styles from './View4.styles';
import mainStyles from '@health/constants/styles';
import {getCurrentTheme} from 'react-native-theming';
import { useDispatch, useSelector } from 'react-redux';
import { setInfo } from '@health/redux/info';

const View4 = () => {

  const dispatch = useDispatch();
  const info = useSelector(state => state.info.value);
  const [workout, setWorkout] = useState(info?.workout);

  useEffect(() => {
    dispatch(setInfo({workout: workout}));
  }, [workout]);

  const data = [
    {
      id: 1,
      title: 'Sedentary',
    },
    {
      id: 2,
      title: 'Light ',
    },
    {
      id: 3,
      title: 'Active',
    },
    {
      id: 4,
      title: 'Very active',
    },
  ];

  const isSelected = item => {
    return workout?.id == item.id;
  };

  return (
    <View>
      <Title
        title="Your workout"
        subtitle="Sedentary: little or no exercise ,Light: exercise 1-3 times/week,Very Active: intense exercise 6-7/week,Active: daily exercise or intense exercise 3-4/week"
      />

      <View style={mainStyles.mt20}>
        {data.map(item => (
          <BouncyCheckbox
            key={item.id}
            size={24}
            fillColor={getCurrentTheme().def.icon}
            style={{marginBottom: 16}}
            text={item.title}
            textStyle={{textDecorationLine: 'none'}}
            iconStyle={{backgroundColor: isSelected(item) ? 'green' : 'white'}}
            // innerIconStyle={styles.checkboxIconInner}
            // disableBuiltInState
            // iconComponent={<Icon name="check" size={15} />}
            onPress={isChecked => {
              if (isChecked) {
                setWorkout(item);
              }
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default View4;
