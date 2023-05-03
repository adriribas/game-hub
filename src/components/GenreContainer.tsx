import { HStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const GenreContainer = ({ children }: Props) => {
  return <HStack paddingY="5px">{children}</HStack>;
};

export default GenreContainer;
