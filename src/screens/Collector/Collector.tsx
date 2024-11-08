import {ProgressCard} from '@src/components';
import {useCollector} from '@src/store/useCollector';
import {MainLayout, View} from '@src/wrappers';
import {useState} from 'react';
import styles from './Collector.styles';
import {
  AgeView,
  DislikedFoodView,
  FavoriteFoodView,
  FoodAllergiesView,
  FoodPracticeView,
  GenderView,
  GoalView,
  HeightView,
  WorkoutView,
} from './views';

const Collector = ({navigation}) => {
  const {setInfo, data} = useCollector();

  const [activeView, setActiveView] = useState(0);

  const views = [
    <GenderView key={1} />,
    <HeightView key={2} />,
    <AgeView key={3} />,
    <DislikedFoodView key={4} />,
    <FavoriteFoodView key={5} />,
    <FoodAllergiesView key={6} />,
    <FoodPracticeView key={7} />,
    <GoalView key={8} />,
    <WorkoutView key={9} />,
  ];

  const setView = status => {
    if (status === 'next') {
      if (activeView < views.length - 1) {
        setActiveView(prevView => prevView + 1);
      } else {
        navigation.navigate('home');
      }
    } else {
      if (activeView > 0) {
        setActiveView(prevView => prevView - 1);
      } else {
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
