import { create } from 'zustand';

// Zustand store for food recommendation data
export const useFoodRecommendation = create((set) => ({
  // Initial state for food recommendation data
  foodRecommendation: [],

  // Function to update the food recommendation data
  setFoodRecommendation: (foodRecommendationData) => set({ foodRecommendation: foodRecommendationData }),
}));