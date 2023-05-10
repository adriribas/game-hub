import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import Trailer from '../entities/Trailer';

const useGameTrailer = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ['games', gameId, 'trailers'],
    queryFn: apiClient.getAll
  });
};

export default useGameTrailer;
