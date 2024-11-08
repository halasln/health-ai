import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: {
    step: 0,
    userName: null,
    email: null,
    firstName: null,
    lastName: null,
    gender: null,
    height: null,
    weight: null,
    age: null,
    workout: null,
    allergies: null,
    foodPractice: null,
    dislikedFoods: [],
    favoriteFoods: [],
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
