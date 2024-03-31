import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Base.styles.jsx';
import { AppDiv, MainTitle } from './styles/app/App.styles';
import GlobalStyle from './styles/GlobalStyle.js';
import Blob from './components/Blob.js';
import Cards from './components/Cards.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppDiv>
        <GlobalStyle />
        <Blob />
        <MainTitle>
          RICK <span>&&</span> MORTY
        </MainTitle>
        <Cards />
      </AppDiv>
    </ThemeProvider>
  );
}

export default App;
