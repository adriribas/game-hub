import { Heading } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';

const GameHeading = () => {
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const genre = useGenre(selectedGenreId);

  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
  const platform = usePlatform(selectedPlatformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as='h1' fontSize='5xl' marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
