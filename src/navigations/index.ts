import {
  Collector,
  Auth,
  Meals,
  Home,
  Dashboard,
  Profile,
  Workout,
  Rapport,
  Camera,
  Register,
  LogIn,
} from '@src/screens';

const navigations = [
  {
    name: 'auth',
    label: 'auth',
    component: Auth,
  },
  {
    name: 'login',
    label: 'login',
    component: LogIn,
  },
  {
    name: 'register',
    label: 'register',
    component: Register,
  },
  {
    name: 'collector',
    label: 'collector',
    component: Collector,
  },
  {
    name: 'home',
    label: 'home',
    component: Home,
  },
];

export const bottomNavigations = [
  {
    name: 'Dashboard',
    label: 'Dashboard',
    component: Dashboard,
    icon: 'home',
  },
  {
    name: 'Workout',
    label: 'Workout',
    component: Workout,
    icon: 'dumbbell',
  },
  {
    name: 'Camera',
    label: 'Camera',
    component: Camera,
    icon: 'camera',
  },
  {
    name: 'Meals',
    label: 'Meals',
    component: Meals,
    icon: 'turkey',
  },
  {
    name: 'Rapport',
    label: 'Rapport',
    component: Rapport,
    icon: 'file-alt',
  },
  {
    name: 'Profile',
    label: 'Profile',
    component: Profile,
    icon: 'user',
  },
];

export default navigations;
