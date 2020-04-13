import React, { FunctionComponent } from 'react';
import { MenuContainer, MenuLeft, MenuRight } from './Menu.style';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

export interface IMenuProps {
  isAbout: false;
  isWork: false;
  isFreebies: false;
  isContact: false;
}







const Menu: FunctionComponent<IMenuProps> = (props) => {
  return (
    <MenuContainer>
      <MenuLeft className="animated slideInLeft delay-0.3s">
        <>
          <ul>
            <li>
              <Link to={'/about'} className="effect-underline">
                About
            </Link>
            </li>
            <li>
              <Link to={'/work'} className="effect-underline">
                Work
            </Link>
            </li>
            <li>
              <Link to={'/freebies'} className="effect-underline">
                Freebies
            </Link>
            </li>
            <li>
              <Link to={'/contact'} className="effect-underline">
                Contact
            </Link>
            </li>
          </ul>
        </>
      </MenuLeft>
      <MenuRight className="animated slideInRight delay-0.8s" />
      <Footer />
    </MenuContainer>
  );
};

export default Menu;
