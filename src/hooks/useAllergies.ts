import {HttpClient} from '@src/lib/HttpClient';
import {useQuery} from '@tanstack/react-query';

export const useAllergies = () => {
  const query = useQuery({
    queryKey: ['allergies'],
    queryFn: () =>
      HttpClient.get<AllergiesRes[]>('/allergies').then(res => res?.data),
  });

  return query;
};

export interface AllergiesRes {
  createdAt: Date;
  created_at: Date;
  id: number;
  name: string;
  updatedAt: Date;
  updated_at: Date;
}


