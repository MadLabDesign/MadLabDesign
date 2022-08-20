import React, { FunctionComponent, useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { useOnResize } from 'utilities/useHooks';
import PropTypes from 'prop-types';
import pillButtonGroup from 'components/buttons/PillButtonGroup';
import CareerForm from './forms/CareerForm';
import WorkForm from './forms/WorkForm';
import DefaultForm from './forms/DefaultForm';
export const TAB = {
  CAREER: 0,
  WORK: 1,
  DEFAULT: 2,
};
interface Props {
  onChangeTab?: Function;
  onDrag?: Function;
  hideTab?: boolean;
  editorColor?: string;
  onResizeLogo?: Function;
  exposeEditorBackground?: Function;
  className?: string;
}

interface PillButtonGroupProps {
  offset?: number;
  visible?: boolean;
}
const tabItems = ['Work with us', 'Careers', 'Just say hi'];
const ContactOptions: FunctionComponent<Props> = ({ onChangeTab }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isDragActive, setIsDragActive] = useState(false);
  const pillButtonGroupRef = useRef(null);
  useOnResize(pillButtonGroupRef, (pillButtonGroup: { offsetWidth: number }) =>
    setOffset(pillButtonGroup.offsetWidth / 2),
  );

  return (
    <Container>
      <HeaderContainer>
        <PillButtonGroup
          items={tabItems}
          selectedIndex={selectedTabIndex}
          ref={pillButtonGroupRef}
          onClickItem={(index: any) => {
            setSelectedTabIndex(index);
            onChangeTab && onChangeTab(index);
          }}
          offset={offset}
          visible={!isDragActive && !setIsDragActive}
        />
      </HeaderContainer>
      <Wrapper>
        {selectedTabIndex === TAB.CAREER && <CareerForm />}
        {selectedTabIndex === TAB.WORK && <WorkForm />}
        {selectedTabIndex === TAB.DEFAULT && <DefaultForm />}
      </Wrapper>
    </Container>
  );
};
ContactOptions.propTypes = {
  /** Called when the tab is changed */
  onChangeTab: PropTypes.func,
};
export default ContactOptions;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 3rem;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 65px;
  width: 100%;
  position: absolute;
  z-index: 15;
`;
const Wrapper = styled.section`
  display: flex;
  height: 100%;
  z-index: 10;
  width: 100%;
  align-items: center;
  justify-content: center;

  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none !important;
  color: white;
  ::-webkit-scrollbar {
    display: none !important;
  }
`;
const PillButtonGroup = styled(pillButtonGroup)<PillButtonGroupProps>`
  position: absolute;
  top: 15px;

  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;
