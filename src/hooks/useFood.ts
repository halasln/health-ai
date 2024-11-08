import {HttpClient} from '@src/lib/HttpClient';
import {useQuery} from '@tanstack/react-query';

export const useFood = () => {
  const query = useQuery({
    queryKey: ['foods'],
    queryFn: () => HttpClient.get<FoodRes[]>('/food').then(res => res?.data),
  });

  return query;
};


export interface FoodRes {
    createdAt:  Date;
    created_at: Date;
    id:         number;
    name:       string;
    updatedAt:  Date;
    updated_at: Date;
}
