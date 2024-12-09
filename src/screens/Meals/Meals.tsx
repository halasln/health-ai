import {ScrollView} from 'react-native';

import {AppBar, MealsCard} from '@src/components';
import {MainLayout, Text} from '@src/wrappers';

//styles
import assets from '@src/assets';

import {useFoodRecommendation} from '@src/store/useFoodRecommendation';
import styles from './Meals.styles';

const Meals = () => {
  const {foodRecommendation} = useFoodRecommendation();

  function transformMealData(mealsd) {
    const recommendations = mealsd;

    const data = [
      {
        title: 'Breakfast',
        subtitle: recommendations?.breakfast
          .map(item => item?.Food_items)
          .join(', '),
        calories: `${recommendations?.breakfast.reduce(
          (sum, item) => sum + item?.Calories,
          0,
        )} Kcal`,
        backgroundColor: '#b9e5ff',
        image: assets?.breakFast,
      },
      {
        title: 'Lunch',
        subtitle: recommendations?.lunch
          ?.map(item => item?.Food_items)
          ?.join(', '),
        calories: `${recommendations?.lunch?.reduce(
          (sum, item) => sum + item?.Calories,
          0,
        )} Kcal`,
        backgroundColor: '#bfe9d4',
        image: assets?.lunch,
      },
      {
        title: 'Dinner',
        subtitle: recommendations?.dinner
          ?.map(item => item?.Food_items)
          ?.join(', '),
        calories: `${recommendations?.dinner?.reduce(
          (sum, item) => sum + item?.Calories,
          0,
        )} Kcal`,
        backgroundColor: '#ffe9cc',
        image: assets?.dinner,
      },
    ];

    return data;
  }

  const transformedData = transformMealData(foodRecommendation);
  console.log('transformedData', transformedData);
  return (
    <MainLayout>
      <AppBar title="Meals" />
      <Text style={styles.title}>Recommendation for today</Text>
      <ScrollView>
        {transformedData?.map((wk, i) => (
          <MealsCard
            key={i}
            title={wk.title}
            image={wk.image}
            calories={wk.calories}
            subtitle={wk.subtitle}
            imageBackground={wk.backgroundColor}
          />
        ))}
      </ScrollView>
    </MainLayout>
  );
};

export default Meals;
