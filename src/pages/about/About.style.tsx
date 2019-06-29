import styled from 'styled-components';
import { Colors } from '../../lib/theme/Colors';

import img from '../../assets/images/about-me-bg.png';
import meImg from '../../assets/images/me-bw.png';
import meImgActive from '../../assets/images/me-bw-hover.png';

export const AboutContainer = styled.div`
  background-color: ${Colors.black};
  display: block;
  flex-direction: column;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    height: 100%;
    overflow: hidden;
  }
`;

export const AboutRight = styled.section`
  background-color: ${Colors.black};
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 80px 1rem;
  overflow: scroll;
  flex-direction: row;
  p {
    font-size: 1rem;
    color: ${Colors.whiteLight};
    letter-spacing: 0.1rem;
    font-family: 'metropolis-light';
    padding-bottom: 0.8rem;
    line-height: 1;
    text-align: justify;
    strong {
      font-size: 1.4rem;
      line-height: 1;
      color: ${Colors.white};
      font-family: 'metropolis-light';
      font-weight: normal;
    }
    .first-letter {
      font-family: 'domine-regular', serif;
      color: ${Colors.madlabPrimary};
      font-size: 70px;
      line-height: 1;
    }
  }

  @media screen and (min-width: 768px) {
    width: 65%;
    padding: 80px 3rem;
    flex-wrap: wrap;
    align-content: center;
    min-height: auto;
    height: 100%;
    overflow: scroll;
    margin-top: 100px;
  }
`;

export const AboutLeft = styled.section`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
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

export const ProfileImage = styled.div`
  display: flex;
  position: relative;
  min-width: 100%;
  min-height: 300px;
  background-image: url(${meImg});
  background-position: center top;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 300ms ease-in-out;
  &:hover {
    background-image: url(${meImgActive});
  }
`;
