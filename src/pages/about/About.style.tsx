import styled from 'styled-components';
import { Colors } from '../../lib/theme/Colors';

export const AboutContainer = styled.div`
  background-color: ${Colors.black};
  display: flex;
  flex-direction: column;

  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    min-height: 100vh;
    height: 100%;
  }
`;

export const AboutRight = styled.section`
  background-color: ${Colors.primaryBG};
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 3rem 0;
  overflow: scroll;
  flex-direction: row;

  @media screen and (min-width: 768px) {
    width: 65%;
    padding: 0.8rem 3rem;
    flex-direction: row;
    height: 100vh;
  }
`;

export const AboutLeft = styled.section`
  background-color: ${Colors.black};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 0.8rem 3rem;
  h1 {
    font-family: 'domine-bold';
    font-size: 4rem;
    letter-spacing: 0.1rem;
    margin-bottom: 0.8rem;
    width: 100%;
  }
  p.intro {
    font-size: 1.4rem;
    line-height: 1.5 !important;
    margin-bottom: 0.8em;
    clear: both;
    color: ${Colors.whiteLight};
    font-family: 'metropolis-light';
  }
  @media screen and (min-width: 768px) {
    width: 35%;
  }
`;
