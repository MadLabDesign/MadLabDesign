import styled from 'styled-components';
import { slideInLeft, slideOutLeft } from '../../components/slider/Slider';

export const HomePage = styled.div`
  background-image: url(../../assets/images/1.jpg);
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  &.page-enter {
    animation: ${slideInLeft} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 0.2s forwards;
  }
`;
