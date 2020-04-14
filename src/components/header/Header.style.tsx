import styled from 'styled-components/macro';
import { Colors } from '../../lib/theme/Colors';

import img from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
export const HeaderContainer = styled.div`
  padding: 0.8rem;
  position: fixed;
  min-width: 100%;
  display: flex;
  height: fit-content;
  z-index: 20;
  align-items: center;
  background: #000;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    padding: 0.8rem 1rem 0.8rem 3rem;
  }
`;

export const MenuTab = styled.div`
  .hide {
    display: none;
  }
  .show {
    display: block;
  }
  .info-toggle {
    z-index: 502;

    font-family: 'metropolis-medium', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    color: white;
    height: 42px;
    top: 15px;
    width: 42px;
    line-height: 42px;
    position: absolute;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }

  .info-toggle:hover,
  .info-toggle:focus {
    color: #ffffff;
  }

  .info-menu-icon {
    display: block;
    width: 20px;
    height: 1px;
    margin-top: -1px;
    position: absolute;
    left: 0.65rem;
    top: 0;
    right: auto;
    bottom: auto;
    background-color: #ec008c;
    -webkit-transition: background 0.2s ease-in-out;
    transition: background 0.2s ease-in-out;
  }

  .info-menu-icon::before,
  .info-menu-icon::after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: inherit;
    position: absolute;
    left: 0;
    -webkit-transition-duration: 0.2s, 0.2s;
    transition-duration: 0.2s, 0.2s;
    -webkit-transition-delay: 0.2s, 0s;
    transition-delay: 0.2s, 0s;
  }

  .info-menu-icon::before {
    top: -7px;
    -webkit-transition-property: top, transform;
    transition-property: top, transform;
  }

  .info-menu-icon::after {
    bottom: -7px;
    -webkit-transition-property: bottom, transform;
    transition-property: bottom, transform;
  }

  .info-is-visible .info-menu-icon {
    background-color: rgba(236, 0, 140, 0);
  }

  .info-is-visible .info-menu-icon::before,
  .info-is-visible .info-menu-icon::after {
    background-color: #ec008c;
    -webkit-transition-delay: 0s, 0.2s;
    transition-delay: 0s, 0.2s;
  }

  .info-is-visible .info-menu-icon::before {
    top: 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .info-is-visible .info-menu-icon::after {
    bottom: 0;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
`;

export const Brand = styled(Link)`
  color: ${Colors.white};
  position: relative;
  right: 1rem;
  margin-top: 0.6rem;
  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
  height: 50px;
  display: block;
  z-index: 10;
  top: 0rem;
  @media screen and (min-width: 768px) {
    right: 3rem;
    top: 0em;
  }
`;
