import React from 'react';

import { Container, LogoImg, Form, FormInput, Submitutton } from './styles';
import logo from '~/assets/imagens/logo.png';

export default function SignIn() {
  return (
    <Container>
      <LogoImg source={logo} />
      <Form>
        <FormInput
          keyboardType="numeric"
          placeholder="Informe seu ID de cadastro"
        />
        <Submitutton onPress={() => {}}>Entrar no sistema</Submitutton>
      </Form>
    </Container>
  );
}
