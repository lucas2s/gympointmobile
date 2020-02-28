import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 25px;
  padding-top: 20px;
`;

export const NewAnswer = styled(Button)`
  margin-bottom: 15px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Loading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
