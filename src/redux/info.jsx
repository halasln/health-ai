import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: {
    userName:null,
    gender: null,
    height: null,
    weight: null,
    age: null,
    workout: null,
    allergies: null,
    foodPractice: null,
    dislikedFoods: [
      {
        name: 'AVOCADO',
        status: false,
      },
      {
        name: 'BEEF',
        status: false,
      },

      {
        name: 'BREAD',
        status: false,
      },
      {
        name: 'CARROTS',
        status: false,
      },
      {
        name: 'CAULIFLOWER',
        status: false,
      },
      {
        name: 'EGGS',
        status: false,
      },
      {
        name: 'LAMB',
        status: false,
      },
      {
        name: 'MUSHROOMS',
        status: false,
      },
      {
        name: 'ONION',
        status: false,
      },
      {
        name: 'PEANUTS',
        status: false,
      },
      {
        name: 'BELL PEPPERS',
        status: false,
      },
      {
        name: 'PORK',
        status: false,
      },
      {
        name: 'POTATO',
        status: false,
      },
      {
        name: 'PROTEIN POWDER',
        status: false,
      },
      {
        name: 'QUINOA',
        status: false,
      },
      {
        name: 'SALMON',
        status: false,
      },
      {
        name: 'SHRIMP',
        status: false,
      },
      {
        name: 'TOFU',
        status: false,
      },
      {
        name: 'TUNA',
        status: false,
      },
    ],
    favoriteFoods: [
      {
        name: 'AVOCADO',
        status: false,
      },
      {
        name: 'BEEF',
        status: false,
      },

      {
        name: 'BREAD',
        status: false,
      },
      {
        name: 'CARROTS',
        status: false,
      },
      {
        name: 'CAULIFLOWER',
        status: false,
      },
      {
        name: 'EGGS',
        status: false,
      },
      {
        name: 'LAMB',
        status: false,
      },
      {
        name: 'MUSHROOMS',
        status: false,
      },
      {
        name: 'ONION',
        status: false,
      },
      {
        name: 'PEANUTS',
        status: false,
      },
      {
        name: 'BELL PEPPERS',
        status: false,
      },
      {
        name: 'PORK',
        status: false,
      },
      {
        name: 'POTATO',
        status: false,
      },
      {
        name: 'PROTEIN POWDER',
        status: false,
      },
      {
        name: 'QUINOA',
        status: false,
      },
      {
        name: 'SALMON',
        status: false,
      },
      {
        name: 'SHRIMP',
        status: false,
      },
      {
        name: 'TOFU',
        status: false,
      },
      {
        name: 'TUNA',
        status: false,
      },
    ],
    goal: null,
  },
};

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setInfo: (state, info) => {
      state.value = {...state.value, ...info.payload};
    },
  },
});

export const {setInfo} = infoSlice.actions;

export default infoSlice.reducer;
