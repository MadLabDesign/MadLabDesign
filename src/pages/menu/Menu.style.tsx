import styled from 'styled-components';
import * as Slider from '../../components/slider/Slider';
import { Colors } from '../../lib/theme/Colors';

export const MenuContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  overflow: hidden;
  color: white;
  overflow: hidden;

  &.page-enter {
    animation: ${Slider.slideInLeft} 1s forwards;
  }
  &.page-exit {
    animation: ${Slider.slideOutLeft} 1s forwards;
  }

  ul {
    margin-top: 15px;
    margin-left: 10%;
    position: relative;
  }
  ul li {
    animation-delay: 0.3s;
    counter-increment: li;
    &:before {
      position: relative;
      top: -2rem;
      left: -10px;
      font-family: Gilroy, Helvetica, Arial, sans-serif;
      font-weight: 700;
      font-style: normal;
      content: '0' counter(li);
      transition: color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      color: ${Colors.whiteLight};
      font-size: 0.7142857143rem;
      letter-spacing: 0.36em;
    }
  }
  ul li a {
    padding-top: 13px;
    position: relative;
    padding-bottom: 13px;
    font-family: 'Heebo', sans-serif;
    font-weight: 100;
    font-style: normal;
    display: inline-block;
    transition: color 0.6s cubic-bezier(0.165, 0.84, 0.44, 0.4);
    color: ${Colors.whiteLight};
    font-size: 4.2857142857rem;
    letter-spacing: 0.02em;
    line-height: 0.92;
    text-decoration: none;
    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }

    &.effect-underline:after {
      content: '';
      position: absolute;
      right: 0px;
      left: 0;
      display: inline-block;
      height: 1em;
      width: 100vw;
      border-bottom: 1px solid;
      margin-top: 5px;
      opacity: 0;
      -webkit-transition: opacity 0.5s, -webkit-transform 0.55s;
      transition: opacity 0.5s, transform 0.55s;
      -webkit-transform: scale(0, 1);
      transform: scale(0, 1);
    }

    &.effect-underline:hover:after {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    &:hover {
      color: ${Colors.primary};
    }
  }
`;

export const MenuRight = styled.section`
  background-color: ${Colors.black};
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 3rem 0;
  overflow: scroll;
  flex-direction: row;

  @media screen and (min-width: 768px) {
    width: 55%;
    padding: 0.8rem 3rem;
    flex-direction: row;
    height: 100vh;
  }
`;

export const MenuLeft = styled.section`
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
    width: 45%;
  }
`;
