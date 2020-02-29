import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  margin: 20px;
  padding: 25px;
  padding-bottom: 5px;
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  height: auto;
  max-height: 335px;
`;

export const Title = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #444444;
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
`;

export const TextHelp = styled.Text`
  font-family: Roboto;
  font-size: 14px;
  line-height: 26px;
  color: #666666;
  margin-top: 10px;
  margin-bottom: 15px;
`;
