import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: 10px 40px;
  border: 1px solid #e503a8;
  border-radius: 4px;
  background-color: #fc1fc0;
  box-shadow: 0 4px 8px -2px rgba(41, 41, 41, 0.2);
  color: #fff;
  font-size: 16px;
  transition: all 200ms ease-in-out;
  &:focus {
    outline: none;
    background-color: #fd47cb;
  }
  &:hover {
    background-color: #ef03af;
    box-shadow: 0 6px 16px 0 rgba(41, 41, 41, 0.2);
  }
  &:active {
    background-color: #c70392;
  }

  &.ripple {
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }

  &.ripple:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }

  &.ripple:active:after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }
`;
