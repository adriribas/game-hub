import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import ms from 'ms';
import { Game } from './useGames';

const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms('24h')
  });
};

export default useGame;
