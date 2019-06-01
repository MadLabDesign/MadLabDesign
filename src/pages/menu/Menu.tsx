import * as React from 'react';
import { MenuContainer } from './Menu.style';

export interface IMenuProps {}

export default class Menu extends React.Component<IMenuProps, any> {
  public render() {
    return (
      <MenuContainer>
        <h1>Menu page</h1>
      </MenuContainer>
    );
  }
}
