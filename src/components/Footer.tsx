import {
  Container,
  StyledAnchor,
  StyledParagraph,
  StyledSmall,
} from '../styles/footer/Footer.styles';

function Footer() {
  return (
    <Container>
      <StyledSmall>&copy; 2024 Thayrov. Released under the MIT License.</StyledSmall>
      <StyledParagraph>
        About this website: built with React, TypeScript, Styled-components, GraphQL, Apollo Client,
        Github Actions and Github Pages hosting.
      </StyledParagraph>
      <StyledParagraph>
        Visit me at{' '}
        <StyledAnchor href='https://www.thayrov.com' target='_blank' rel='noreferrer'>
          thayrov.com
        </StyledAnchor>
      </StyledParagraph>
    </Container>
  );
}

export default Footer;
