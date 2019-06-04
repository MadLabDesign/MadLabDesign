import styled from 'styled-components';
import { Colors } from '../../lib/theme/Colors';

export const WorkContainer = styled.div`
  background-color: ${Colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    min-height: 100vh;
  }
`;
