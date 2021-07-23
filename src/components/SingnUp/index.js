import React, {useEffect} from 'react';
import { FormContainer, ContainerButton} from './styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from '../../components';
import { Container } from './styles';

import api from '../../services/api';

const SingnUp = props => {
    const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const scheme = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Muito curto')
      .max(50, 'Muito longo')
      .required('Nome obrigatório'),
    email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: Yup.string()
      .required('Senha obrigatória')
      .min(6, 'Senha muito curta, precisa ter pelo menos 6 caracteres'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Senhas devem ser iguais',
    ),
  });

  const onSubmit = async (values) => {
    console.log('SingnUp')
    const response = await api.post('/user', {
     email: values.email,
     name: values.name,
     password: values.password,
   });
   console.log(response);

   if (response.status === 201) {
     props.history.push('/home');
   } 
    
  };

  

  return (
    <Container>
        <h1>SingnUp</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={scheme}
          onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
        >
          <FormContainer>
              <Input
              name='name'
              type='text'
              placeholder="Nome"
              />
              <Input
              name='email'
              type='email'
              placeholder="Email"
              />
              <Input
              name='password'
              type='password'
              placeholder="Senha"
              />
              <Input
              name='confirmPassword'
              type='password'
              placeholder="Confirmar Password"
              />
              <ContainerButton>
                <Button type='submit' >Cadastrar</Button>
              </ContainerButton>
              
          </FormContainer>
        </Formik>
    </Container>
  );
};

export default SingnUp;


