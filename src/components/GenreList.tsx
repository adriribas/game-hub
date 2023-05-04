import { Button, Image, List, ListItem } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GenreSkeleton from './GenreSkeleton';
import GenreContainer from './GenreContainer';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
  ];

  const handleSelectGenre = (genre: Genre) => {
    onSelectGenre(genre);
  };

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map(skeleton => (
          <GenreContainer key={skeleton}>
            <GenreSkeleton />
          </GenreContainer>
        ))}
      {data.map(genre => (
        <ListItem key={genre.id}>
          {
            <GenreContainer>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize='32px'
                borderRadius={8}
              />
              <Button
                fontSize='lg'
                variant='link'
                onClick={() => handleSelectGenre(genre)}>
                {genre.name}
              </Button>
            </GenreContainer>
          }
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
