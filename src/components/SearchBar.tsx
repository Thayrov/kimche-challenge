import React, { useState, useEffect } from 'react';
import { SearchBarStyledInput } from '../styles/searchBar/SearchBar.styles';
import { LazyQueryHookExecOptions, OperationVariables } from '@apollo/client';
import {
  SelectContainer,
  StyledButton,
  StyledOption,
  StyledSelect,
} from '../styles/select/Select.styles';

interface SearchBarProps {
  getCharacters: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options: Partial<LazyQueryHookExecOptions<any, OperationVariables>> | undefined
  ) => void;
}

const SearchBar = ({ getCharacters }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm || gender || status || species) {
        getCharacters({
          variables: {
            name: searchTerm,
            page: 1,
            gender: gender !== 'all' ? gender : undefined,
            status: status !== 'all' ? status : undefined,
            species: species !== 'all' ? species : undefined,
          },
        });
      }
    }, 1000);
    return () => clearTimeout(handler);
  }, [searchTerm, gender, status, species, getCharacters]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'gender') setGender(value);
    else if (name === 'status') setStatus(value);
    else if (name === 'species') setSpecies(value);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setGender('');
    setStatus('');
    setSpecies('');
    getCharacters({ variables: { page: 1 } });
  };

  return (
    <>
      <SelectContainer>
        <SearchBarStyledInput
          type='search'
          value={searchTerm}
          onChange={handleInputChange}
          placeholder='Search characters'
        />
        <StyledSelect name='gender' onChange={handleSelectChange} defaultValue='placeholder'>
          <StyledOption value='placeholder' disabled>
            Choose a gender
          </StyledOption>
          <StyledOption value='all'>All Card</StyledOption>
          <StyledOption value='Male'>Male</StyledOption>
          <StyledOption value='Female'>Female</StyledOption>
          <StyledOption value='Genderless'>Genderless</StyledOption>
          <StyledOption value='unknown'>unknown</StyledOption>
        </StyledSelect>

        <StyledSelect name='status' onChange={handleSelectChange} defaultValue='placeholder'>
          <StyledOption value='placeholder' disabled>
            Choose a status
          </StyledOption>
          <StyledOption value='all'>All Statuses</StyledOption>
          <StyledOption value='Alive'>Alive</StyledOption>
          <StyledOption value='Dead'>Dead</StyledOption>
          <StyledOption value='unknown'>Unknown</StyledOption>
        </StyledSelect>

        <StyledSelect name='species' onChange={handleSelectChange} defaultValue='placeholder'>
          <StyledOption value='placeholder' disabled>
            Choose a specie
          </StyledOption>
          <StyledOption value='all'>All Species</StyledOption>
          <StyledOption value='Human'>Human</StyledOption>
          <StyledOption value='Alien'>Alien</StyledOption>
          <StyledOption value='Humanoid'>Humanoid</StyledOption>
          <StyledOption value='Poopybutthole'>Poopybutthole</StyledOption>
          <StyledOption value='Mythological Creature'>Mythological Creature</StyledOption>
          <StyledOption value='Animal'>Animal</StyledOption>
          <StyledOption value='Disease'>Disease</StyledOption>
          <StyledOption value='Robot'>Robot</StyledOption>
          <StyledOption value='Cronenberg'>Cronenberg</StyledOption>
          <StyledOption value='unknown'>Unknown</StyledOption>
        </StyledSelect>
        <StyledButton onClick={resetFilters}>Reset Filters</StyledButton>
      </SelectContainer>
    </>
  );
};

export default SearchBar;
