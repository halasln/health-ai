import {Title} from '@src/components';
import mainStyles from '@src/constants/styles';
import {useCollector} from '@src/store/useCollector';
import {theme} from '@src/themes/theme';
import {View} from '@src/wrappers';
import React, {useEffect, useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const WorkoutView = () => {
  const {setInfo, data} = useCollector();
  const [workout, setWorkout] = useState(data?.workout);

  useEffect(() => {
    setInfo({workout: workout});
  }, [workout]);

  const data2 = [
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
        {data2?.map(item => (
          <BouncyCheckbox
            key={item.id}
            size={24}
            fillColor={theme?.icon}
            style={{marginBottom: 16}}
            text={item.title}
            textStyle={{textDecorationLine: 'none'}}
            iconStyle={{backgroundColor: isSelected(item) ? 'green' : 'white'}}
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

export default WorkoutView;
