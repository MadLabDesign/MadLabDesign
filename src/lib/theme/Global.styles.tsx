import styled from 'styled-components';

export const SubTitle = styled.h3`
  top: 25%;
  font-family: 'metropolis-medium', sans-serif;
  font-size: 0.5rem;
  line-height: 5;
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

  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 767px) {
    padding-left: 0;
    &:before {
      display: none;
    }
  }
`;
