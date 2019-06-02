import styled from 'styled-components';
import { slideInLeft, slideOutLeft } from '../../components/slider/Slider';
import { Colors } from '../../lib/theme/Colors';

export const HomePage = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: white;
  width: 100%;
  padding-left: 3rem;
  background-color: #000000;

  &.page-enter {
    animation: ${slideInLeft} 1s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 1s forwards;
  }

  .background__copy {
    opacity: 0.3;
  }

  .content__title {
    top: 25%;
    font-family: 'domine-regular', serif;
    font-size: 2.8rem;
    font-weight: normal;
    mix-blend-mode: screen;
    line-height: 1.4;
    text-transform: uppercase;
    margin: 0;
    color: ${Colors.white};
    z-index: 20;
    position: relative;
    letter-spacing: 0.2rem;
  }

  h3 {
    top: 25%;
    font-family: 'metropolis-medium', sans-serif;
    font-size: 0.8rem;
    line-height: 1.286;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    color: white;
    margin-top: 0;
    margin-bottom: 3rem;
    padding-left: 55px;
    z-index: 20;
    position: relative;
    &:before {
      content: '';
      display: block;
      background-color: rgba(236, 0, 140, 0.6);
      width: 40px;
      height: 1px;
      position: absolute;
      left: 0;
      top: 50%;
    }
  }
`;
