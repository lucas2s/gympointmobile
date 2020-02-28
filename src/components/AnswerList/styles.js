import styled from 'styled-components/native';

export const Container = styled.View`
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 15px;
  height: auto;
  max-height: 335px;
  margin-bottom: 10px;
  display: flex;
`;

export const Info = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  padding-left: 10px;
  color: ${props => (props.answer ? '#42CB59' : '#999999')};
`;

export const Time = styled.Text`
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  color: #666666;
`;

export const Status = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Question = styled.Text`
  font-family: Roboto;
  font-size: 14px;
  line-height: 26px;
  color: #666666;
`;
