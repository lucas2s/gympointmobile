import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

import { Container, Form, TextQuestion, ButtonSend } from './styles';

import api from '~/services/api';

export default function AskHelpQuestion({ navigation }) {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);

  const student = useSelector(state => state.auth.student);
  const { id } = student;

  async function handleAddQuestion() {
    try {
      setLoading(true);
      const response = await api.post(`/students/${id}/help-orders`, {
        question,
      });

      if (response.status !== 200) {
        Alert.alert('Erro pedido de ajuda', response.data);
      } else {
        Alert.alert('Pedido de ajuda', 'Pedido de ajuda enviado com sucesso');
        setLoading(false);
        navigation.navigate('AskHelp');
      }
    } catch (err) {
      setLoading(false);
      Alert.alert(
        'Erro pedido de ajuda',
        'Não foi possível realizar o pedido de ajuda'
      );
    }
  }

  return (
    <Container>
      <Form>
        <TextQuestion
          keyboardType="default"
          placeholder="Inclua seu pedido de auxílio"
          returnKeyType="send"
          value={question}
          onChangeText={setQuestion}
          multiline
          numberOfLines={15}
          textAlignVertical="top"
        />
        <ButtonSend loading={loading} onPress={handleAddQuestion}>
          Enviar pedido
        </ButtonSend>
      </Form>
    </Container>
  );
}

AskHelpQuestion.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    .isRequired,
};
