import React, {useState} from 'react';
import {ScrollView} from 'react-native';

import {MainLayout, Text} from '@src/wrappers';
import {AppBar, WorkOutCard} from '@src/components';

//styles
import styles from './Workout.styles';
import assets from '@src/assets';

const Workout = () => {
  const [choice, setChoice] = useState('');
  const workout = [
    {
      id: 1,
      title: 'Runnig',
      time: '15',
      backgroundColor: '#b9e5ff',
      image: assets.walk,
    },
    {
      id: 2,

      title: 'Push ups',
      time: '15',
      backgroundColor: '#bfe9d4',
      image: assets.pushUp,
    },
    {
      id: 3,

      title: 'Aerobics',
      time: '30',
      backgroundColor: '#ffe9cc',
      image: assets.cardio,
    },
  ];

  const isSelected = item => {
    console.log(choice);
    return choice?.id == item.id;
  };
  return (
    <MainLayout>
      <AppBar title="Workout" />
      <Text style={styles.title}>You can choose one activity for today</Text>
      <ScrollView>
        {workout.map((wk, i) => (
          <WorkOutCard
            key={i}
            title={wk.title}
            image={wk.image}
            time={wk.time}
            backgroundColor={wk.backgroundColor}
            opacity={isSelected(wk) ? 1 : 0.5}
            onPress={isChecked => {
              if (isChecked) {
                setChoice(wk);
              }
            }}
          />
        ))}
      </ScrollView>
    </MainLayout>
  );
};

export default Workout;
