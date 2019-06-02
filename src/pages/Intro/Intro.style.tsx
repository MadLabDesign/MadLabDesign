import styled from 'styled-components';
import { Colors } from '../../lib/theme/Colors';

export const IntroSection = styled.div`
  background-color: ${Colors.black};
  color: white;
`;

export const DescriptionBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;

  .desctiption {
    width: 270px;
    background-color: ${Colors.black};
    position: relative;
    h2 {
      font-family: Gilroy, Helvetica, Arial, sans-serif;
      font-size: 4rem;
      letter-spacing: 0.1rem;
      margin-bottom: 0.8rem;
    }
    p {
      font-family: 'metropolis-light';
      font-size: 1rem;
      line-height: 1.8em;
    }
    a.effect-underline:after {
      content: '';
      position: absolute;
      left: 0px;
      display: inline-block;
      height: 1em;
      width: 100%;
      border-bottom: 1px solid;
      margin-top: 5px;
      opacity: 0;
      -webkit-transition: opacity 0.5s, -webkit-transform 0.35s;
      transition: opacity 0.5s, transform 0.5s;
      -webkit-transform: scale(0, 1);
      transform: scale(0, 1);
    }

    a.effect-underline:hover:after {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
