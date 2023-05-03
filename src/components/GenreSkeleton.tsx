import { SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const GenreSkeleton = () => {
  return (
    <>
      <SkeletonCircle borderRadius="8px" size="32px" />
      <SkeletonText noOfLines={1} flexGrow={1} />
    </>
  );
};

export default GenreSkeleton;
