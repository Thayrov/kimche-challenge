import { BaseInput, themeColor } from '../Base.styles';
import styled from 'styled-components';

export const SearchBarStyledInput = styled(BaseInput)`
  width: 450px;
  height: 45px;
  -webkit-appearance: none;
  appearance: none;

  &::placeholder {
    ${themeColor('yellow_green', 0.8)};
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
  }
`;
