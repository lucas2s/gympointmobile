import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, LogoImg, Form, FormInput, Submitutton } from './styles';
import logo from '~/assets/imagens/logo.png';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const [id, setId] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit() {
    dispatch(signInRequest(id));
  }
  return (
    <Container>
      <LogoImg source={logo} />
      <Form>
        <FormInput
          keyboardType="numeric"
          placeholder="Informe seu ID de cadastro"
          returnKeyType="send"
          value={id}
          onChangeText={setId}
        />
        <Submitutton loading={loading} onPress={handleSubmit}>
          Entrar no sistema
        </Submitutton>
      </Form>
    </Container>
  );
}
