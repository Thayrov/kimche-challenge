import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Base.styles.jsx';
import { AppDiv, MainTitle } from './styles/app/App.styles';
import GlobalStyle from './styles/GlobalStyle.js';
import Blob from './components/Blob.js';
import Cards from './components/Cards.js';
import { GET_CHARACTERS } from './graphql/queries.js';
import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import SearchBar from './components/SearchBar.js';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [getCharacters] = useLazyQuery(GET_CHARACTERS, {
    onCompleted: (data) => {
      setSearchResults(data.characters.results);
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppDiv>
        <GlobalStyle />
        <Blob />
        <MainTitle>
          RICK <span>&&</span> MORTY
        </MainTitle>
        <SearchBar getCharacters={getCharacters} />
        <Cards searchResults={searchResults} />
      </AppDiv>
    </ThemeProvider>
  );
}

export default App;
