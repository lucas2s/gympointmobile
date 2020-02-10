import React from 'react';
import { Container, LogoImg } from './styles';

import logo from '~/assets/imagens/logo.png';

import Input from '~/components/Input';

export default function SignIn() {
  return (
    <Container>
      <LogoImg source={logo} />
      <Input icon="call" placeholder="Informe seu ID de cadastro" />
    </Container>
  );
}
