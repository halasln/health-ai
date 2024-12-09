import { create } from 'zustand';

// Zustand store for workout data
export const useWorkoutData = create((set) => ({
  // Initial state for workout data
  workout: [],

  // Function to update the workout data
  setWorkoutData: (workoutData) => set({ workout: workoutData }),
}));