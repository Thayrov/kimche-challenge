import styled from 'styled-components';
import { themeColor } from '../Base.styles';

export const Container = styled.div`
  z-index: 10;
  position: relative;
  margin-top: 40px;
  ${themeColor('yellow_green', 1)};
`;

export const StyledSmall = styled.small`
  display: block;
  margin-bottom: 2px;
  ${themeColor('yellow_green', 1)};

  font-size: 0.75rem;
`;

export const StyledAnchor = styled.a`
  color: inherit;
  text-decoration: underline;
`;

export const StyledParagraph = styled.p`
  font-size: 0.75rem;
  ${themeColor('yellow_green', 1)};
`;
