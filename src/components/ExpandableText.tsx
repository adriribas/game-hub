import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
  limit?: number;
}

const ExpandableText = ({ children, limit = 300 }: Props) => {
  if (children.length <= limit) return <Text>{children}</Text>;

  const [isExpanded, setExpanded] = useState(false);

  const summary = isExpanded ? children : `${children.substring(0, limit)}...`;

  return (
    <>
      <Text>
        {summary}
        <Button
          size='xs'
          marginLeft={1}
          fontWeight='bold'
          colorScheme='yellow'
          onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? 'Show Less' : 'Read More'}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
