import { useNavigation } from '@react-navigation/native';
import assets from '@src/assets';
import {AppBar, AppButton, SummaryCard, TodayGoalCard} from '@src/components';
import {mainStyles} from '@src/constants';
import {useUser} from '@src/hooks/useUser';
import {useCollector} from '@src/store/useCollector';
import { useFoodRecommendation } from '@src/store/useFoodRecommendation';
import { useUserData } from '@src/store/useUserData';
import {MainLayout, Text, View} from '@src/wrappers';
import { useEffect } from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';

const Dashboard = () => {
  const { user, goalCalories, likedFoods, dislikedFoods, setUserData } = useUserData();
  const {foodRecommendation} = useFoodRecommendation();
const navigation = useNavigation()

  const calculateNutrientSums = (meals) => {
    // Initialize sums
    let totalProteins = 0;
    let totalFats = 0;
    let totalCarbohydrates = 0;
  
    // Iterate through each meal category
    Object.values(meals).forEach((mealCategory) => {
      mealCategory?.forEach((item) => {
        totalProteins += item.Proteins;
        totalFats += item.Fats;
        totalCarbohydrates += item.Carbohydrates;
      });
    });
  
    // Return the results
    return {
      totalProteins,
      totalFats,
      totalCarbohydrates,
    };
  };
  
 
  
  // Call the function and log the results
  const nutrientSums = calculateNutrientSums(foodRecommendation);
  console.log("Total Proteins:", nutrientSums.totalProteins);
  console.log("Total Fats:", nutrientSums.totalFats);
  console.log("Total Carbohydrates:", nutrientSums.totalCarbohydrates);
  const summary = [
    {
      image: assets.workout,
      imageBackground: '#FCE4D1',
      progressColor: '#F07416',
      title: 'Your daily workouts',
      subtitle: 'You just need 2 steps to finish',
      progress: 75,
      onMainPress: () => {
        navigation.navigate('mealLogger');
      },
    },
    {
      image: assets.walk,
      imageBackground: '#CCF2FE',
      progressColor: '#00C4FF',
      title: 'Walking Steps',
      subtitle: '2000 steps a day',
      progress: 90,
      onMainPress: () => {
        navigation.navigate('mealLogger');
      },
    },
    {
      image: assets.meal,
      imageBackground: '#FFF1FE',
      progressColor: '#FF64BD',
      title: 'Your meals',
      subtitle: 'Calculate your calories',
      progress: 65,
      onMainPress: () => {
        navigation.navigate('mealLogger');
      },
    },
  ];




  return (
    <MainLayout>
      <View>
        <AppBar title="Dashboard" />
      </View>
    

      <ScrollView style={mainStyles.mt10}>
      <TodayGoalCard goalCalories={goalCalories}  data={nutrientSums} />

        {/* summary */}
        <Text style={mainStyles.mb10} bold>
          Summary
        </Text>
        {summary?.map((item, i) => (
          <SummaryCard
            key={i}
            image={item.image}
            imageBackground={item.imageBackground}
            title={item?.title}
            subtitle={item?.subtitle}
            progress={item?.progress}
            progressColor={item?.progressColor}
            onPress={item?.onMainPress}
          />
        ))}
      </ScrollView>
    </MainLayout>
  );
};

export default Dashboard;

