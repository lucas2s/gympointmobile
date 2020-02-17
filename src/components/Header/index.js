import React from 'react';

import { Container, LogoImg } from './style';
import logohearder from '../../assets/image/logoheader.png';

export default function Header() {
  return (
    <Container>
      <LogoImg source={logohearder} />
    </Container>
  );
}
