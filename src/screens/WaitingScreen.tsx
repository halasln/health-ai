import {useNavigation, useRoute} from '@react-navigation/native';
import {useFoodRecommendationd} from '@src/hooks/useFoodRecommendationd';
import {useUser} from '@src/hooks/useUser';
import {useWorkout} from '@src/hooks/useWorkout';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export default function WaitingScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const fromLogin = route.params?.fromLogin || false; // Check if from login

  const {
    mutate: fetchWorkout,
    isPending: isWorkoutLoading,
    isError: workoutError,
    data: workoutData,
  } = useWorkout();
  const {
    mutate: fetchMeals,
    isPending: isMealsLoading,
    isError: mealsError,
    data: mealsData,
  } = useFoodRecommendationd();
  const {
    mutate: fetchUser,
    isPending: isUserLoading,
    isError: userError,
    data: userData,
  } = useUser();

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWorkout();
    fetchMeals();
    if (!fromLogin) {
      fetchUser();
    }
  }, [fromLogin]);

  useEffect(() => {
    const isLoading =
      isWorkoutLoading || isMealsLoading || (!fromLogin && isUserLoading);
    const hasError =
      workoutError || mealsError || (!fromLogin && userError);

    if (hasError) {
      setError('An error occurred while fetching data.');
    } else if (
      !isLoading &&
      workoutData &&
      mealsData &&
      (fromLogin || userData)
    ) {
      navigation.navigate('home');
    }
  }, [
    isWorkoutLoading,
    isMealsLoading,
    isUserLoading,
    workoutError,
    mealsError,
    userError,
    workoutData,
    mealsData,
    userData,
    fromLogin,
  ]);

  const isLoading =
    isWorkoutLoading || isMealsLoading || (!fromLogin && isUserLoading);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading your data...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={{color: 'red'}}>{error}</Text>
      </View>
    );
  }

  if (!workoutData || !mealsData || (!fromLogin && !userData)) {
    return (
      <View style={styles.container}>
        <Text>Preparing your data, please wait...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Data fetched successfully!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});