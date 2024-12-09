import {Title} from '@src/components';
import mainStyles from '@src/constants/styles';
import {useCollector} from '@src/store/useCollector';
import {theme} from '@src/themes/theme';
import {View} from '@src/wrappers';
import React, {useEffect, useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

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

const WorkoutView = () => {
  const {setInfo, data} = useCollector();

  const [selectedWorkout, setSelectedWorkout] = useState(0);

  const handleworkoutChange = (workoutId: number) => {
    setSelectedWorkout(workoutId);
    setInfo({workout: workoutId});
    console.log('sseleectedq queue',workoutId);
    
  };

  useEffect(() => {
    if (selectedWorkout !== null) {
    console.log('sseleectedq selectedWorkout',selectedWorkout);

      setInfo({workout: selectedWorkout});
    }
    console.log('sseleectedq queue',data);

  }, [selectedWorkout]);

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
            iconStyle={{
              backgroundColor: data.workout == item.id ? 'green' : 'white',
            }}
            onPress={isChecked => {
              if (isChecked) {
                handleworkoutChange(item.id);
              }
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default WorkoutView;
