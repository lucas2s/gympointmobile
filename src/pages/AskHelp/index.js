import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { Container, NewAnswer, Loading, List } from './styles';
import AnswerList from '~/components/AnswerList';

import api from '~/services/api';

export default function AskHelp() {
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  const student = useSelector(state => state.auth.student);
  const { id } = student;

  useEffect(() => {
    async function loadCheckins() {
      try {
        setLoading(true);
        const response = await api.get(`/students/${id}/help-orders`);

        setAnswers(response.data.helpOrders);
        setLoading(false);
      } catch (err) {
        setAnswers([]);
        setLoading(false);
      }
    }
    loadCheckins();
  }, [id]);

  return (
    <Container>
      <NewAnswer>Novo pedido de auxílio</NewAnswer>
      {loading ? (
        <Loading>
          <ActivityIndicator color="#EE4E62" size="large" />
        </Loading>
      ) : (
        <List
          data={answers}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <AnswerList data={item} />}
        />
      )}
    </Container>
  );
}

AskHelp.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="help" size={20} color={tintColor} />
  ),
};
