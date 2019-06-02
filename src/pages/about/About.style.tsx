import styled from 'styled-components';
import { slideInLeft, slideOutLeft } from '../../components/slider/Slider';
import { Colors } from '../../lib/theme/Colors';

export const AboutContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: ${Colors.black};
  display: flex;
  flex-direction: row;

  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  width: 100%;
  &.page-enter {
    animation: ${slideInLeft} 1s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 1s forwards;
  }
`;

export const AboutRight = styled.section`
  background-color: ${Colors.primaryBG};
  height: 100vh;
  width: 65%;
  display: flex;
  align-items: center;
  padding: 0.8rem 3rem;
`;

export const AboutLeft = styled.section`
  background-color: ${Colors.black};
  height: 100vh;
  width: 35%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 0.8rem 3rem;
  h1 {
    font-family: 'domine-bold';
    font-size: 4rem;
    letter-spacing: 0.1rem;
    margin-bottom: 0.8rem;
  }
  p.intro {
    font-size: 1.4rem;
    line-height: 1.5 !important;
    margin-bottom: 0.8em;
    clear: both;
    color: ${Colors.whiteLight};
    font-family: 'metropolis-light';
  }
`;
