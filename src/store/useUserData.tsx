import {create} from 'zustand';


export const useUserData = create((set) => ({
  user: null,
  goalCalories: null,
  likedFoods: [],
  dislikedFoods: [],
  // Set the user data in Zustand store
  setUserData: (userData) => set(() => ({ user: userData.user, goalCalories: userData.goalCalories, likedFoods: userData.likedFoods, dislikedFoods: userData.dislikedFoods })),
}));