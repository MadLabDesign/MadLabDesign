import styled from 'styled-components';
import { Colors } from '../../lib/theme/Colors';

export const WorkContainer = styled.div`
  max-height: 100vh;
  height: 100%;
  background-color: ${Colors.black};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  position: relative;
  width: 100%;
`;
