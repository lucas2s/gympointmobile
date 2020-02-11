import React from 'react';

import { Container, LogoImg, Form, FormInput, Submitutton } from './styles';
import logo from '~/assets/imagens/logo.png';

export default function SignIn() {
  async function handleSubmit() {}
  return (
    <Container>
      <LogoImg source={logo} />
      <Form>
        <FormInput
          keyboardType="numeric"
          placeholder="Informe seu ID de cadastro"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
        <Submitutton onPress={handleSubmit}>Entrar no sistema</Submitutton>
      </Form>
    </Container>
  );
}
