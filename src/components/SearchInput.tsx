import { useRef } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SearchInput = () => {
  const setSearchText = useGameQueryStore(s => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}>
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={ref}
          placeholder='Search games...'
          borderRadius={20}
          variant='filled'
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
