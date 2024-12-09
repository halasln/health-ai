import { HttpClient } from '@src/lib/HttpClient';
import { useCollector } from '@src/store/useCollector';
import { useWorkoutData } from '@src/store/useWorkout';

import { useMutation } from '@tanstack/react-query';

export const useWorkout = () => {
  // Zustand store hooks for user and workout data
  const { setInfo, data } = useCollector();
  const { setWorkoutData } = useWorkoutData();


  // Prepare the form data for the API call
  const formData = {
    activity_type: 'active', // Get the user's workout type from the store
    calories_needed: 300, // Example value, replace with dynamic data if needed
    goal: 'burn', // Example goal, replace with dynamic data if needed
  };

  // Define the mutation for the POST request
  const mutation = useMutation({
    mutationKey: ['workout'],
    mutationFn: async () => {
      try {
        // Make the POST request to the backend
        const response = await HttpClient.post('activityRecommendation', formData);
        console.log('API Response:', response?.data);
        return response?.data;
      } catch (error) {
        console.error('Error making API request:', error);
        throw error; // Rethrow the error to trigger `onError` callback
      }
    },
    onSuccess: (responseData) => {
      console.log('Workout data successfully fetched:', responseData.recommendations);
      setWorkoutData(responseData); // Save the fetched workout data to the Zustand store
    },
    onError: (error) => {
      console.error('Error fetching workout data:', error);
    },
  });

  // Return the mutation object so it can be triggered from components
  return mutation;
};