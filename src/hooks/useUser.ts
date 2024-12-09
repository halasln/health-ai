import {HttpClient} from '@src/lib/HttpClient';
import {useCollector} from '@src/store/useCollector';
import { useUserData } from '@src/store/useUserData';
import {useMutation} from '@tanstack/react-query';

export const useUser = () => {
  const {setInfo, data} = useCollector(); // Collect user data from the Zustand store

  const { user, setUserData }=useUserData()

  
  const formData = {
    email: data?.email,
    age: data?.age,
    height: data?.height,
    weight: data?.weight,
    gender: data?.gender,
    goal: data?.goal, // Example goal: 1 = "lose"
    workout: data?.workout, // Example workout: 1 = "Sedentary"
    dislikedFoods: data?.dislikedFoods, // Array of disliked food IDs
    favoriteFoods: data?.favoriteFoods,
    foodPractice:data?.foodPractice ,
    allergies:data?.allergies
  };

  // Use useMutation to handle POST request
  const mutation = useMutation({
    mutationKey: ['updateUser'],
    mutationFn: async () => {
      // Send the FormData with POST request to backend
      const res = await HttpClient.post('user/update-user', formData);
      console.log(res?.data, 'hhjssj');

      return res?.data;
    },
    onSuccess: data => {
      console.log('User data successfully updated:', data);
      // You can process the response here if needed
      console.log('User data successfully updated:', data);
      console.log('Updated User Data:', data.user);
      console.log('Goal Calories:', data.goalCalories);
      console.log('Liked Foods:', data.likedFoods);
      console.log('Disliked Foods:', data.dislikedFoods);

      console.log('data', data);
      setUserData(data);
    },
    onError: error => {
      console.error('Error updating user data:', error);
    },
  });

  return mutation; // Return mutation so it can be triggered from the component
};

// export interface UserRes {
//   createdAt: Date;
//   created_at: Date;
//   id: number;
//   name: string;
//   updatedAt: Date;
//   updated_at: Date;
// }
