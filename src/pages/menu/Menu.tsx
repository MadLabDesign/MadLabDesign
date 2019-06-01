import * as React from 'react';
import { MenuContainer } from './Menu.style';
import { Link } from 'react-router-dom';

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
                <Link to={'/'}>About</Link>
              </li>
              <li>
                <Link to={'/'}>About</Link>
              </li>
              <li>
                <Link to={'/'}>About</Link>
              </li>
            </ul>
          </>
        </MenuContainer>
      </>
    );
  }
}
