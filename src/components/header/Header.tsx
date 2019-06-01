import * as React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './Header.style';

export interface IHeaderProps {}

export default class Header extends React.Component<IHeaderProps, any> {
  render() {
    return (
      <HeaderContainer>
        <p>
          <Link to="/">Home</Link>
        </p>
      </HeaderContainer>
    );
  }
}
