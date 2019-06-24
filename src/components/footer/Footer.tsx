import * as React from 'react';
import { MenuFooter } from './Footer.style';

export interface IFooterProps {}

export default class Footer extends React.Component<IFooterProps, any> {
  public render() {
    return (
      <>
        <MenuFooter>
          Copyright MadLabDesign 2018 Design by MadLab Design
        </MenuFooter>
      </>
    );
  }
}
