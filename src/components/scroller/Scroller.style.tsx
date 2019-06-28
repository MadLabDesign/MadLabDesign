import styled from 'styled-components';
import { Colors } from '../../lib/theme/Colors';

export const MouseScroller = styled.div`
  .mouse-scroll {
    display: none;
    @media screen and (min-width: 768px) {
      position: absolute;
      z-index: 10;
      bottom: -10px;
      left: 50%;
      display: block;
      -webkit-transform: translate3d(-50%, -50%, 0);
      transform: translate3d(-50%, -50%, 0);
    }
  }

  @-webkit-keyframes mouse-wheel {
    100%,
    0% {
      opacity: 0;
      top: 25%;
    }
    10% {
      opacity: 1;
      top: 25%;
    }
    75% {
      opacity: 0;
      top: 50%;
    }
  }
  @keyframes mouse-wheel {
    100%,
    0% {
      opacity: 0;
      top: 25%;
    }
    10% {
      opacity: 1;
      top: 25%;
    }
    75% {
      opacity: 0;
      top: 50%;
    }
  }
  .mouse-scroll {
    display: block;
    color: #fff;
    text-decoration: none;
    overflow: hidden;
  }
  .mouse-scroll__mouse {
    position: relative;
    display: block;
    width: 20px;
    height: 32px;
    margin: 0 auto 10px;
    box-sizing: border-box;
    border: 2px solid ${Colors.madlabPrimary};
    border-radius: 20px;
  }
  .mouse-scroll__mouse__wheel {
    position: absolute;
    display: block;
    top: 25%;
    left: 50%;
    width: 4px;
    height: 4px;
    margin: -2px 0 0 -2px;
    background: ${Colors.madlabPrimary};
    border-radius: 50%;
    opacity: 0;
    -webkit-animation: mouse-wheel 2s linear infinite;
    animation: mouse-wheel 2s linear infinite;
  }
  .mouse-scroll__mouse__wheel--2 {
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }
  .mouse-scroll__label {
    font-family: 'metropolis-light';
    font-size: 10px;
    margin-top: -20px;
    position: relative;
    width: 100%;
    top: -10px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
