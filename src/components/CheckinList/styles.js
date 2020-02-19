import styled from 'styled-components/native';

export const Container = styled.View`
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 0 15px;
  height: 46px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #444444;
`;

export const Time = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
  line-height: 16px;

  color: #666666;
`;
