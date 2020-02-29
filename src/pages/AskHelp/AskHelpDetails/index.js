import React from 'react';
import { parseISO, formatDistance } from 'date-fns';
import PropTypes from 'prop-types';
import pt from 'date-fns/locale/pt';

import { Container, Status, Title, Time, TextHelp } from './styles';

export default function AskHelpDetails({ navigation }) {
  const question = navigation.getParam('question');

  const dataParsed = formatDistance(parseISO(question.createdAt), new Date(), {
    locale: pt,
    addSuffix: true,
  });

  return (
    <Container>
      <Status>
        <Title>PERGUNTA</Title>
        <Time>{dataParsed}</Time>
      </Status>
      <TextHelp>{question.question}</TextHelp>
      <Title>RESPOSTA</Title>
      <TextHelp>{question.answer}</TextHelp>
    </Container>
  );
}

AskHelpDetails.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    .isRequired,
};
