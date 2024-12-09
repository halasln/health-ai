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
  allergies: null,
  foodPractice: null,
  dislikedFoods: [],
  favoriteFoods: [],
  goal: null,
};

export const useCollector = create<CollectorState>()(set => ({
  data: initialValues,
  setInfo: data => set(state => ({data: {...state?.data, ...data}})),
  isDisabled: true,
  setIsDisabled: value => set(() => ({isDisabled: value})),
}));

interface CollectorState {
  data: InitialState;
  setInfo: (data: InitialState) => void;
  isDisabled: boolean;
  setIsDisabled: (value: boolean) => void;
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
  allergies?: number | null;
  foodPractice?: number | null;
  dislikedFoods?: number[];
  favoriteFoods?: number[];
  goal?: number | null;
}
