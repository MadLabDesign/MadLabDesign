import * as React from 'react';
import styled from 'styled-components';
import { slideInLeft, slideOutLeft } from '../../components/slider/Slider';

export interface ILoadingProps {
  children?: JSX.Element | string;
  bgColor?: string;
  spinnerColor?: string;
  textColor?: string;
  loading?: any;
  logoSrc?: string;
  text?: string;
}

const ScreenWrapper = styled.div<ILoadingProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  text-align: center;

  opacity: ${props => (props.loading ? 1 : 0)};
  visibility: ${props => (props.loading ? 'visible' : 'hidden')};
  transition: opacity 0.4s, visibility -0.3s linear 0.5s;
  &.page-enter {
    animation: ${slideInLeft} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 0.2s forwards;
  }
`;

const LoadingComponents = styled.div<ILoadingProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoadableData = styled.div<ILoadingProps>`
  display: ${props => (props.loading ? 'none' : 'block')};
`;

export default class Loader extends React.Component<ILoadingProps, any> {
  public render() {
    const { loading, children } = this.props;
    return (
      <>
        <ScreenWrapper loading={loading}>
          <LoadingComponents>
            <div id="preloader">
              <div id="loader">
                <div className="line-scale-pulse-out">
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>
          </LoadingComponents>
        </ScreenWrapper>

        <LoadableData loading={loading}>{children}</LoadableData>
      </>
    );
  }
}
