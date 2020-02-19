import React, { useMemo } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import PropTypes from 'prop-types';

import pt from 'date-fns/locale/pt';
import { Container, Info, Time } from './styles';

export default function CheckinList({ data }) {
  const dataParsed = useMemo(() => {
    return formatDistance(parseISO(data.created_at), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.created_at]);

  return (
    <Container>
      <Info>Check-in #{data.newId}</Info>
      <Time>{dataParsed}</Time>
    </Container>
  );
}

CheckinList.propTypes = {
  data: PropTypes.shape({
    newId: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};
