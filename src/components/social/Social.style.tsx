import styled from 'styled-components';

export const SocialList = styled.div`
  .home-social {
    list-style: none;
    font-family: 'metropolis-regular', sans-serif;
    margin: 0;
    position: fixed;
    bottom: 10rem;
    right: 4rem;
    -webkit-transform: translate3d(0, -50%, 0);
    -ms-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0);
  }

  .home-social a {
    color: #ffffff;
    font-size: 1.2rem;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: #ec008c;
    }
  }

  .home-social li {
    position: relative;
    padding: 0.4rem 0;
  }

  .home-social li a {
    display: block;
    width: 36px;
    height: 36px;
  }

  .home-social i,
  .home-social span {
    position: absolute;
    text-align: right;
    top: 14px;
    line-height: 1.4;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }

  .home-social i {
    font-size: 0.8rem;
    right: 0;
    text-align: right;
    display: inline-block;
    width: 36px;
    height: 36px;
  }

  .home-social span {
    font-size: 0.8rem;
    color: #ec008c;
    right: 3rem;
    opacity: 0;
    visibility: hidden;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 100% 50%;
    -ms-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
  }

  .home-social span::after {
    display: block;
    content: '';
    width: 8px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.15);
    position: absolute;
    top: 50%;
    right: -18px;
  }

  .home-social li:hover span {
    opacity: 1;
    visibility: visible;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
`;
