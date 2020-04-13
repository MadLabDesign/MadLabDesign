import * as React from 'react';
import { MouseScroller } from './Scroller.style';

export interface IScrollerProps { }

export default class Scroller extends React.Component<IScrollerProps, any> {
  public render() {
    return (
      <MouseScroller>
        <a className="mouse-scroll" href="#section-2">
          <span className="mouse-scroll__mouse" aria-hidden="true">
            <span className="mouse-scroll__mouse__wheel mouse-scroll__mouse__wheel--1" />
            <span className="mouse-scroll__mouse__wheel mouse-scroll__mouse__wheel--2" />
          </span>
        </a>
      </MouseScroller>
    );
  }
}
