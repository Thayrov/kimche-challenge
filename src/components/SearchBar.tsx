import React, { useEffect } from 'react';
import { SearchBarStyledInput } from '../styles/searchBar/SearchBar.styles';
import { LazyQueryHookExecOptions, OperationVariables } from '@apollo/client';
import {
  SelectContainer,
  StyledButton,
  StyledOption,
  StyledSelect,
} from '../styles/select/Select.styles';
import { SearchCriteria } from '../types';

interface SearchBarProps {
  getCharacters: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options: Partial<LazyQueryHookExecOptions<any, OperationVariables>> | undefined
  ) => void;
  updateSearchCriteria: (newCriteria: SearchCriteria) => void;
  searchCriteria: SearchCriteria;
}

const SearchBar = ({ getCharacters, updateSearchCriteria, searchCriteria }: SearchBarProps) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchCriteria) {
        getCharacters({
          variables: {
            name: searchCriteria.name,
            page: 1,
            gender: searchCriteria.gender !== 'all' ? searchCriteria.gender : undefined,
            status: searchCriteria.status !== 'all' ? searchCriteria.status : undefined,
            species: searchCriteria.species !== 'all' ? searchCriteria.species : undefined,
          },
        });
      }
    }, 1000);
    return () => clearTimeout(handler);
  }, [searchCriteria, getCharacters]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateSearchCriteria({ [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateSearchCriteria({ [name]: value });
  };

  const resetFilters = () => {
    updateSearchCriteria({
      name: '',
      gender: 'all',
      status: 'all',
      species: 'all',
    });
  };

  return (
    <>
      <SelectContainer>
        <SearchBarStyledInput
          type='text'
          name='name'
          value={searchCriteria.name || ''}
          onChange={handleInputChange}
          placeholder='Search characters'
        />
        <StyledSelect name='gender' onChange={handleSelectChange} value={searchCriteria.gender}>
          <StyledOption value='placeholder' disabled>
            Choose a gender
          </StyledOption>
          <StyledOption value='all'>All Genders</StyledOption>
          <StyledOption value='Male'>Male</StyledOption>
          <StyledOption value='Female'>Female</StyledOption>
          <StyledOption value='Genderless'>Genderless</StyledOption>
          <StyledOption value='unknown'>unknown</StyledOption>
        </StyledSelect>

        <StyledSelect name='status' onChange={handleSelectChange} value={searchCriteria.status}>
          <StyledOption value='placeholder' disabled>
            Choose a status
          </StyledOption>
          <StyledOption value='all'>All Statuses</StyledOption>
          <StyledOption value='Alive'>Alive</StyledOption>
          <StyledOption value='Dead'>Dead</StyledOption>
          <StyledOption value='unknown'>Unknown</StyledOption>
        </StyledSelect>

        <StyledSelect name='species' onChange={handleSelectChange} value={searchCriteria.species}>
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
