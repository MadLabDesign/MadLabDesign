import styled from 'styled-components';
import { slideInLeft, slideOutLeft } from '../../components/slider/Slider';
import { Colors } from '../../lib/theme/Colors';

export const WorkContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: ${Colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  &.page-enter {
    animation: ${slideInLeft} 1s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 1s forwards;
  }
`;
