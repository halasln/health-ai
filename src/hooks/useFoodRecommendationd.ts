import {HttpClient} from '@src/lib/HttpClient';
import {useFoodRecommendation} from '@src/store/useFoodRecommendation';
import {useUserData} from '@src/store/useUserData';
import {useMutation} from '@tanstack/react-query';

export const useFoodRecommendationd = () => {
  const {user, goalCalories, likedFoods, dislikedFoods} = useUserData();
  const {setFoodRecommendation} = useFoodRecommendation();
  
  // Prepare the form data for the API call
  const formData = {
    totalCalories: goalCalories,
    vegPreference: user?.food_practice,
    allergyType: user?.food_allergy[0]||user?.food_allergy,
  };

  // Define the mutation for the POST request
  const mutation = useMutation({
    mutationKey: ['foodRecommendationData'],
    mutationFn: async () => {
      try {
        // Make the POST request to the backend
        const response = await HttpClient.post('foodRecommendation', formData);
        console.log('API Response:', response?.data);
        return response?.data;
      } catch (error) {
        console.error('Error making API request:', error);
        throw error; // Rethrow the error to trigger `onError` callback
      }
    },
    onSuccess: responseData => {
      console.log(
        'Food recommendation data successfully fetched:',
        responseData,
      );
      setFoodRecommendation(responseData.recommendations); // Save the fetched data to the Zustand store
    },
    onError: error => {
      console.error('Error fetching food recommendation data:', error);
    },
  });

  // Return the mutation object so it can be triggered from components
  return mutation;
};
