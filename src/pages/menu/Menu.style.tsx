import styled from 'styled-components';
import * as Slider from '../../components/slider/Slider';

export const MenuContainer = styled.div`
  background-image: url(../../assets/images/bg-left.png);
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  &.page-enter {
    animation: ${Slider.slideInLeft} 0.2s forwards;
  }
  &.page-exit {
    animation: ${Slider.slideOutLeft} 0.2s forwards;
  }
`;
