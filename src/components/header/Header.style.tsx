import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 0.8rem;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuTab = styled.div`
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
    position: fixed;
    left: 50px;
    top: 30px;
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
