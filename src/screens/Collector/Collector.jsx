import React, {useState} from 'react';

import {View, MainLayout} from '@health/wrappers';
import {ProgressCard} from '@health/components';

import {View1, View2, View3, View4, View5, View6, View7, View8, View9} from './views';

//styles
import styles from './Collector.styles';
import {useDispatch} from 'react-redux';
import {setInfo} from '@health/redux/info';

const Collector = ({navigation}) => {
  const dispatch = useDispatch();

  const [activeView, setActiveView] = useState(0);

  const views = [
    <View1 key={1} />,
    <View2 key={2} />,
    <View3 key={3} />,
    <View4 key={4} />,
    <View5 key={5} />,
    <View6 key={6} />,
    <View7 key={7} />,
    <View8 key={8} />,
    <View9 key={9} />,
  ];

  const setView = status => {
    if (status === 'next') {
      if (activeView < views.length - 1) {
        setActiveView(prevView => prevView + 1);
      } else {
        // write back end code here to submit
        navigation.navigate('home');
      }
    } else {
      if (activeView > 0) {
        setActiveView(prevView => prevView - 1);
      } else {
        dispatch(
          setInfo({
            gender: null,
            height: null,
            weight: null,
            age: null,
            workout: null,
            allergies: null,
            foodPractice: null,
            dislikedFoods: [
              {
                name: 'AVOCADO',
                status: false,
              },
              {
                name: 'BEEF',
                status: false,
              },

              {
                name: 'BREAD',
                status: false,
              },
              {
                name: 'CARROTS',
                status: false,
              },
              {
                name: 'CAULIFLOWER',
                status: false,
              },
              {
                name: 'EGGS',
                status: false,
              },
              {
                name: 'LAMB',
                status: false,
              },
              {
                name: 'MUSHROOMS',
                status: false,
              },
              {
                name: 'ONION',
                status: false,
              },
              {
                name: 'PEANUTS',
                status: false,
              },
              {
                name: 'BELL PEPPERS',
                status: false,
              },
              {
                name: 'PORK',
                status: false,
              },
              {
                name: 'POTATO',
                status: false,
              },
              {
                name: 'PROTEIN POWDER',
                status: false,
              },
              {
                name: 'QUINOA',
                status: false,
              },
              {
                name: 'SALMON',
                status: false,
              },
              {
                name: 'SHRIMP',
                status: false,
              },
              {
                name: 'TOFU',
                status: false,
              },
              {
                name: 'TUNA',
                status: false,
              },
            ],
            favoriteFoods: [
              {
                name: 'AVOCADO',
                status: false,
              },
              {
                name: 'BEEF',
                status: false,
              },

              {
                name: 'BREAD',
                status: false,
              },
              {
                name: 'CARROTS',
                status: false,
              },
              {
                name: 'CAULIFLOWER',
                status: false,
              },
              {
                name: 'EGGS',
                status: false,
              },
              {
                name: 'LAMB',
                status: false,
              },
              {
                name: 'MUSHROOMS',
                status: false,
              },
              {
                name: 'ONION',
                status: false,
              },
              {
                name: 'PEANUTS',
                status: false,
              },
              {
                name: 'BELL PEPPERS',
                status: false,
              },
              {
                name: 'PORK',
                status: false,
              },
              {
                name: 'POTATO',
                status: false,
              },
              {
                name: 'PROTEIN POWDER',
                status: false,
              },
              {
                name: 'QUINOA',
                status: false,
              },
              {
                name: 'SALMON',
                status: false,
              },
              {
                name: 'SHRIMP',
                status: false,
              },
              {
                name: 'TOFU',
                status: false,
              },
              {
                name: 'TUNA',
                status: false,
              },
            ],
            goal: null,
          }),
        );
        navigation.navigate('auth');
      }
    }
  };

  return (
    <MainLayout style={styles.collector}>
      <View>{views[activeView]}</View>
      <ProgressCard
        progress={(activeView / (views.length - 1)) * 100}
        onMainPress={() => setView('next')}
        onBackPress={() => setView('prev')}
      />
    </MainLayout>
  );
};

export default Collector;
