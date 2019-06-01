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
                <Link to={'/'}>About</Link>
              </li>
              <li>
                <Link to={'/'}>Work</Link>
              </li>
              <li>
                <Link to={'/'}>Freebees</Link>
              </li>
              <li>
                <Link to={'/'}>Contact</Link>
              </li>
            </ul>
          </>
          <Footer />
        </MenuContainer>
      </>
    );
  }
}
