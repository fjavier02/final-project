import React from 'react';
import { FormContainer, Container, ContainerButton} from './styles';
import { Formik} from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';
import { Input, Button } from '../../components';

const SingnIn = (props) => {
  console.log("sign in")
  const initialValues = {
    email: '',
    password: '',
  };

  const scheme = Yup.object().shape({
    email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: Yup.string()
      .required('Senha obrigatória')
      .min(6, 'Senha muito curta, precisa ter pelo menos 6 caracteres'),
  });

  const onSubmit = async (values, { resetForm }) => {
    console.log('SingnIn')
     const response = await api.post('/user', {
      email: values.email,
      password: values.password,
    });
    console.log(response);

    if (response.status === 201) {
      resetForm();
      props.history.push('/home');
    } 
  };

  return (
    <Container>
        <h1>SingnIn</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={scheme}
          onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
        >
          <FormContainer>
              <Input
              name="email"
              placeholder="Email"
              />
              <Input
              name="password"
              type="password"
              placeholder="Senha"
              />
              <ContainerButton>
                <Button type='submit' >Entrar</Button>
              </ContainerButton>
              
          </FormContainer>
        </Formik>
    </Container>
  );
};

export default SingnIn;


