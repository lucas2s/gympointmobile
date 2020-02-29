import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import { Container, NewAnswer, Loading, List } from './styles';
import AnswerList from '~/components/AnswerList';

import api from '~/services/api';

function AskHelp({ navigation, isFocused }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const student = useSelector(state => state.auth.student);
  const { id } = student;

  useEffect(() => {
    async function loadCheckins() {
      setLoading(true);
      if (isFocused) {
        try {
          setLoading(true);
          const response = await api.get(`/students/${id}/help-orders`);

          setQuestions(response.data.helpOrders);
          setLoading(false);
        } catch (err) {
          setQuestions([]);
          setLoading(false);
        }
      } else {
        setQuestions([]);
      }
    }
    loadCheckins();
  }, [id, isFocused]);

  return (
    <Container>
      <NewAnswer onPress={() => navigation.navigate('AskHelpQuestion')}>
        Novo pedido de auxílio
      </NewAnswer>
      {loading ? (
        <Loading>
          <ActivityIndicator color="#EE4E62" size="large" />
        </Loading>
      ) : (
        <List
          data={questions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item: question }) => (
            <AnswerList
              data={question}
              details={() =>
                navigation.navigate('AskHelpDetails', { question })
              }
            />
          )}
        />
      )}
    </Container>
  );
}

AskHelp.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    .isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(AskHelp);
