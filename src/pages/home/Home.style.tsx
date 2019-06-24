import styled from 'styled-components';
import { slideInLeft, slideOutLeft } from '../../components/slider/Slider';
import { Colors } from '../../lib/theme/Colors';

import img from '../../assets/images/1.jpg';

export const HomePage = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 0.8rem;
  background-image: url(${img});
  background-position: center;
  background-size: contain;

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
    font-size: 1.8rem;
    font-weight: normal;
    mix-blend-mode: screen;
    line-height: 1.4;
    text-transform: uppercase;
    margin: 0;
    text-align: center;
    color: ${Colors.white};

    position: relative;
    letter-spacing: 0.2rem;
    span {
      color: ${Colors.madlabPrimary};
    }
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

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    padding: 0 3rem;
    flex-wrap: nowrap;
    justify-content: space-between;
    .content__title {
      font-size: 2.8rem;
      text-align: left;
      max-width: 600px;
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
  }
`;

export const HomeLeftContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  min-height: 100%;
  flex-wrap: wrap;
  min-width: 80%;
`;

export const HomeRightContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: row;
  min-height: 100%;
  flex-wrap: wrap;
  min-width: 20%;
  padding-bottom: 3rem;
  padding-right: 3rem;
  text-align: right;
  .title-blurb {
    font-family: 'metropolis-regular';
    font-size: 1rem;
    display: block;
    float: right;
    line-height: 0.2;
    letter-spacing: 0.1rem;
    color: ${Colors.white};

    margin-bottom: 0.8rem;
    clear: both;
  }
  .desc {
    display: block;
    max-width: 350px;
    float: right;
    font-size: 0.8rem;
    color: ${Colors.whiteLight};
  }
`;
