import React, { useState, useEffect } from 'react';
import { SearchBarStyledInput, SearchDiv } from '../styles/searchBar/SearchBar.styles';
import { LazyQueryHookExecOptions, OperationVariables } from '@apollo/client';

interface SearchBarProps {
  getCharacters: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options: Partial<LazyQueryHookExecOptions<any, OperationVariables>> | undefined
  ) => void;
}

const SearchBar = ({ getCharacters }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm) {
        getCharacters({
          variables: { name: searchTerm, page: 1 },
        });
      }
    }, 1000);
    return () => clearTimeout(handler);
  }, [searchTerm, getCharacters]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <SearchDiv>
      <SearchBarStyledInput
        type='search'
        value={searchTerm}
        onChange={handleChange}
        placeholder='Search characters'
      />
    </SearchDiv>
  );
};

export default SearchBar;
