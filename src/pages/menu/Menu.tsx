import * as React from 'react';
import { MenuContainer } from './Menu.style';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

export interface IMenuProps {}

export default class Menu extends React.Component<IMenuProps, any> {
  public render() {
    return (
      <>
        <MenuContainer>
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
                  Freebees
                </Link>
              </li>
              <li>
                <Link to={'/contact'} className="effect-underline">
                  Contact
                </Link>
              </li>
            </ul>
          </>
          <Footer />
        </MenuContainer>
      </>
    );
  }
}
