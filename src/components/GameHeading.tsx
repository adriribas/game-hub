import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: platforms } = usePlatforms();
  const { data: genres } = useGenres();

  const platform = platforms?.results.find(
    platform => platform.id === gameQuery.platformId
  );
  const genre = genres?.results.find(genre => genre.id === gameQuery.genreId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as='h1' fontSize='5xl' marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
