import React, { useMemo } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import PropTypes from 'prop-types';
import pt from 'date-fns/locale/pt';

import { Container, Info, Time, Status, Question } from './styles';

export default function AnswerList({ data, details }) {
  const dataParsed = useMemo(() => {
    return formatDistance(parseISO(data.createdAt), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.createdAt]);

  return (
    <Container disabled={!data.answer} onPress={details}>
      <Status>
        <Info answer={data.answer}>
          {data.answer ? 'Respondido' : 'Sem resposta'}
        </Info>
        <Time>{dataParsed}</Time>
      </Status>
      <Question>{data.question}</Question>
    </Container>
  );
}

AnswerList.propTypes = {
  data: PropTypes.shape({
    answer: PropTypes.string,
    question: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  details: PropTypes.func.isRequired,
};
