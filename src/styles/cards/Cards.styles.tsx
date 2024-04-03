import styled from 'styled-components';
import { FlexCenter } from '../Base.styles';

export const CardsDiv = styled.div`
  ${FlexCenter};
  flex-wrap: wrap;
  width: 100vw;
  max-height: 550px;
  overflow-y: auto;
  margin-top: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0px 100px;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
