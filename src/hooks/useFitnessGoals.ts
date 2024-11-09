import {HttpClient} from '@src/lib/HttpClient';
import {useQuery} from '@tanstack/react-query';

export const useFitnessGoals = () => {
  const query = useQuery({
    queryKey: ['fitnessGoals'],
    queryFn: () =>
      HttpClient.get<FitnessGoalsRes[]>('/fitnessGoals').then(res => res?.data),
  });

  return query;
};

export interface FitnessGoalsRes {
  createdAt: Date;
  created_at: Date;
  id: number;
  name: string;
  updatedAt: Date;
  updated_at: Date;
}
