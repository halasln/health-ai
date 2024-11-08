import {create} from 'zustand';

const initialValues = {
  step: 0,
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  gender: '',
  height: null,
  weight: null,
  age: null,
  workout: null,
  allergies: [],
  foodPractice: null,
  dislikedFoods: [],
  favoriteFoods: [],
  goal: null,
};

export const useCollector = create<CollectorState>()(set => ({
  data: initialValues,
  setInfo: data => set(state => ({data: {...state?.data, ...data}})),
}));

interface CollectorState {
  data: InitialState;
  setInfo: (data: InitialState) => void;
}

interface InitialState {
  step?: number;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  height?: number | null;
  weight?: number | null;
  age?: number | null;
  workout?: number | null;
  allergies?: number[];
  foodPractice?: number | null;
  dislikedFoods?: number[];
  favoriteFoods?: number[];
  goal?: number | null;
}
