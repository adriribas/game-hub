import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../store';

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId);

  if (error) return null;

  const selectedPlatform = data?.results.find(
    platform => platform.id === selectedPlatformId
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map(platform => (
          <MenuItem
            key={platform.id}
            onClick={() => setSelectedPlatformId(platform.id)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
