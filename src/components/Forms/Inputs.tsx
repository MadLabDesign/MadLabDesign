import styled from 'styled-components/macro';
import { Colors } from '../../lib/theme/Colors';
import { Input } from 'antd';
export const InputField = styled(Input)`
color:${Colors.white};
border-radius: 0px;
  font-weight:500;
  font-size: 18px;
  border-radius: 0px;
  line-height: 22px;
  background-color: transparent;
  border: none;
  border-bottom:1px solid ${Colors.secondary};
  transition: all 0.3s;
  padding: 13px;
  margin-top: 15px;
  width:100%;
  min-width: 400px;
  display: flex;
  box-sizing: border-box;
  outline:0;
  textarea {
  height: 150px;
  line-height: 150%;
  resize:vertical;
}
`
export const InputTextField = styled.textarea`
color:${Colors.white};
  font-weight:500;
  font-size: 18px;
  border-radius: 4px;
  background-color: transparent;

  border:1px solid ${Colors.secondary};
  transition: all 0.3s;
  padding: 13px;
  margin: 15px 0;
  width:100%;
  display:flex;
  align-items: flex-start;

  box-sizing: border-box;
  outline:0;
  height: 150px;
  line-height: 150%;
  resize:vertical;
`