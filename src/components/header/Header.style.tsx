import styled from 'styled-components';
import { Colors } from '../../lib/theme/Colors';

export const HeaderContainer = styled.div`
  padding: 0.8rem 3rem;
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    background-color: #000000;
    border: 1px solid rgba(255, 255, 255, 0.12);
    font-family: 'metropolis-medium', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    color: white;
    height: 42px;
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
    left: 10px;
    top: 50%;
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

export const Brand = styled.div`
  color: ${Colors.white};
  position: relative;
  z-index: 9999;
  right: 1rem;
  top: 0.8em;
  font-size: 1rem;
  font-family: 'metropolis-medium', sans-serif;

  @media screen and (min-width: 768px) {
    right: 3rem;
    top: 2em;
  }
`;
