import styled from 'styled-components/native';

import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.View`
  display: flex;
  margin: 20px;
  padding-bottom: 5px;
`;

export const Form = styled.View`
  display: flex;
`;

export const TextQuestion = styled(Input)`
  align-items: flex-start;
  justify-content: flex-start;
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  height: 300px;
  font-size: 16px;
  line-height: 14px;
  color: #444444;
`;

export const ButtonSend = styled(Button)`
  margin-top: 15px;
`;
