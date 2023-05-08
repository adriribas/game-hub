import { Button, Heading, Image, List, ListItem } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GenreContainer from './GenreContainer';

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error } = useGenres();

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
                  fontWeight={
                    genre.id === selectedGenre?.id ? 'bold' : 'normal'
                  }
                  onClick={() => onSelectGenre(genre)}>
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
