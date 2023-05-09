import { Button, Heading, Image, List, ListItem } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GenreContainer from './GenreContainer';
import useGameQueryStore from '../store';

const GenreList = () => {
  const { data, error } = useGenres();
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);

  if (error) return null;

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map(genre => (
          <ListItem key={genre.id}>
            {
              <GenreContainer>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  objectFit='cover'
                  boxSize='32px'
                  borderRadius={8}
                />
                <Button
                  fontSize='lg'
                  variant='link'
                  whiteSpace='normal'
                  textAlign='left'
                  fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                  onClick={() => setSelectedGenreId(genre.id)}>
                  {genre.name}
                </Button>
              </GenreContainer>
            }
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
