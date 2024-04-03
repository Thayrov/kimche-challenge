import styled from 'styled-components';
import { borderStyle, themeBackgroundColor, themeColor, boxShadow } from '../Base.styles';

export const PaginationContainer = styled.div`
  text-align: center;
  padding: 8px 10px;
  border-radius: 10px;
  width: 100%;
  z-index: 10;
  margin-top: 2rem;
`;

export const PaginationList = styled.ul`
  list-style: none;
  padding: 0;
  display: inline-block;
  border-radius: 5px;
  ${borderStyle(2)};
  ${boxShadow(0, 5, 10, 0, 'yellow_green', 0.7)};
  ${themeBackgroundColor('yellow_green', 0.8)};

  max-width: calc(100% - 10px);
  height: 1.65rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    & > li:nth-child(3) {
      margin-left: 10rem;
    }

    & > li:nth-last-child(3) {
      margin-right: 10rem;
    }
  }
`;

export const PaginationItem = styled.li`
  display: inline;
  margin: 0 3px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 3px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 1px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0 7.6px;
  }
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
    text-decoration: line-through;
  }

  &.active a {
    border-radius: 10px;
    ${themeBackgroundColor('nyanza', 1)};
    ${themeColor('yellow_green', 1)};
  }
`;

export const PaginationLink = styled.a`
  cursor: pointer;
  padding: 5px 10px;
  transition: 0.3s ease;
  ${themeColor('black', 1)};
  border-radius: 5px;

  &:hover {
    ${themeBackgroundColor('nyanza', 0.5)};
    ${themeColor('nyanza', 1)};
  }
`;
