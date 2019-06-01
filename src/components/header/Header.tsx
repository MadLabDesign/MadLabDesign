import * as React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, MenuTab } from './Header.style';

export interface IHeaderProps {
  addClass?: JSX.Element | boolean;
}

export default class Header extends React.Component<IHeaderProps, any> {
  constructor(props: Readonly<IHeaderProps>) {
    super(props);
    this.state = { addClass: false };
  }
  toggle() {
    this.setState({ addClass: !this.state.addClass });
  }
  render() {
    let boxClass = ['info-toggle'];
    if (this.state.addClass) {
      boxClass.push('.info-is-visible .info-toggle');
    }
    return (
      <HeaderContainer>
        <MenuTab>
          <Link to="/menu">
            <div
              className={boxClass.join(' ')}
              onClick={this.toggle.bind(this)}
            >
              {this.state.addClass ? (
                <div className="info-is-visible info-toggle">
                  <span className="info-menu-icon" />
                </div>
              ) : (
                <div className="info-toggle ">
                  <span className="info-menu-icon" />
                </div>
              )}
            </div>
          </Link>
        </MenuTab>
      </HeaderContainer>
    );
  }
}
