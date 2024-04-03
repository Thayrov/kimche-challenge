import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Base.styles.jsx';
import { AppDiv, MainTitle } from './styles/app/App.styles';
import GlobalStyle from './styles/GlobalStyle.js';
import Blob from './components/Blob.js';
import Cards from './components/Cards.js';
import { GET_CHARACTERS } from './graphql/queries.js';
import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import SearchBar from './components/SearchBar.js';
import Pagination from './components/Pagination.js';
import Footer from './components/Footer.js';
import { SearchCriteria } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<number | string>(1);
  const [pageInfo, setPageInfo] = useState({ count: 0, pages: 0, next: null, prev: null });
  const [searchResults, setSearchResults] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    name: '',
    gender: '',
    status: '',
    species: '',
  });
  const [getCharacters] = useLazyQuery(GET_CHARACTERS, {
    variables: {
      page: currentPage,
      name: searchCriteria.name,
      gender: searchCriteria.gender === 'all' ? '' : searchCriteria.gender,
      status: searchCriteria.status === 'all' ? '' : searchCriteria.status,
      species: searchCriteria.species === 'all' ? '' : searchCriteria.species,
    },
    onCompleted: (data) => {
      setSearchResults(data.characters.results);
      setPageInfo(data.characters.info);
    },
  });

  useEffect(() => {
    getCharacters(); // Ahora depende del estado actual de searchCriteria y currentPage
  }, [currentPage, searchCriteria, getCharacters]);

  const handlePageChange = (page: number | string) => {
    setCurrentPage(page);
  };

  const updateSearchCriteria = (newCriteria: Partial<SearchCriteria>) => {
    setSearchCriteria((prev) => ({ ...prev, ...newCriteria }));
    setCurrentPage(1); // Restablece a la primera página con los nuevos criterios
  };

  return (
    <ThemeProvider theme={theme}>
      <AppDiv>
        <GlobalStyle />
        <Blob />
        <MainTitle>
          RICK <span>&&</span> MORTY
        </MainTitle>
        <SearchBar
          getCharacters={getCharacters}
          updateSearchCriteria={updateSearchCriteria}
          searchCriteria={searchCriteria}
        />
        <Cards searchResults={searchResults} />
        <Pagination
          totalItems={pageInfo.count}
          pageSize={20}
          currentPage={Number(currentPage)}
          onChangePage={handlePageChange}
        />
        <Footer />
      </AppDiv>
    </ThemeProvider>
  );
}

export default App;
