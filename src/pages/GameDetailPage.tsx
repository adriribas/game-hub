import { Box, Heading, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading as='h1'>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <Box marginTop={5}>
        <GameAttributes game={game} />
      </Box>
    </>
  );
};

export default GameDetailPage;
