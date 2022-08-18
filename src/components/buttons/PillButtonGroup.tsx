import React, { useLayoutEffect, useState, forwardRef, Ref } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import _ from 'lodash';
import { Colors } from 'lib/theme/Colors';

interface Props {
  items: Array<string>;
  selectedIndex?: number;
  onClickItem?: Function;
  className?: string;
}

interface TabProps {
  selected?: boolean;
  width: number;
}

interface MovingTabProps {
  left: number;
  width: number;
}

const PillButtonGroup = forwardRef((props: Props, ref: Ref<any>) => {
  const { items, selectedIndex, onClickItem, className } = props;
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(100);
  //Create fake refs
  const refs = items.map(() => {
    return { current: null };
  });
  useLayoutEffect(() => {
    //Move MovingTab to selected index
    const ref = refs[selectedIndex];
    if (ref && ref.current) setLeft(ref.current.offsetLeft);
  }, [selectedIndex, width, refs]);
  useLayoutEffect(() => {
    //Expand to fit max width (Does not shrink if expanded)
    const hasAllRefs =
      _.sum(refs.map(({ current }) => (current ? 1 : 0))) === refs.length;
    if (hasAllRefs) {
      const max = _.max(refs.map(({ current }) => current.offsetWidth));
      if (width !== max) setWidth(max);
    }
  }, [refs, width]);
  //Only show the MovingTab if it is a valid index
  const isValidIndex =
    (selectedIndex !== null || selectedIndex !== undefined) &&
    selectedIndex >= 0 &&
    selectedIndex < items.length;
  return (
    <Container className={className} ref={ref}>
      {items.map((item, index) => {
        const selected = selectedIndex === index;
        return (
          <Tab
            key={index}
            selected={selected}
            ref={refs[index]}
            onClick={() => onClickItem && onClickItem(index, item)}
            width={width}
          >
            {item}
          </Tab>
        );
      })}
      {isValidIndex && <MovingTab left={left} width={width} />}
    </Container>
  );
});

PillButtonGroup.propTypes = {
  /** The items to display in each button */
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** The selected index of the item */
  selectedIndex: PropTypes.number,
  /** Called when an item is clicked */
  onClickItem: PropTypes.func,
};

export default PillButtonGroup;

const Container = styled.nav`
  width: fit-content;
  min-width: 160px;
  height: 36px;
  /* border-radius: 20px; */
  /* box-shadow: 0 1px 5px 0 rgba(170, 180, 189, 0.21); */
  /* border: solid 1px #dae2e7; */
  /* background-color: #ffffff; */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px;
  position: relative;
`;

const MovingTab = styled.div<MovingTabProps>`
	height: 32px;
	width: ${({ width }) => width}px;
	min-width: 80px;
	// background-color: ${Colors.primary};
    // border-radius: 20px;
    border-bottom: 1px solid ${Colors.primary};
	position: absolute;
	left: ${({ left }) => left}px;
	top: 1px;
	transition: left 500ms ease;
	z-index: 0;
`;

const Tab = styled.div<TabProps>`
  font-size: 15px;
  height: 32px;
  width: ${({ width }) => width}px;
  min-width: fit-content;
  padding-left: 20px;
  padding-right: 20px;
  text-transform: uppercase;
  line-height: 32px;
  // border-radius: 20px;
  cursor: pointer;
  transition: color 800ms ease-in-out, font-weight 800ms ease-in-out;
  text-align: center;
  white-space: nowrap;
  color: ${Colors.grayLight};
  ${({ selected }) =>
    selected
      ? `
        color: ${Colors.primary};
        font-weight: 600;
    `
      : `
        &:hover {
            color: ${Colors.white};
            border-bottom: 1px solid ${Colors.superDark};

        }
    `}
  z-index: 1;
`;
