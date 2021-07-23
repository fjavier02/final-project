import React, { useState } from 'react';
import { SingnIn, SingnUp, Button } from '../../components';


import { Container, ContainerSingIn, ContainerSingUp, ContainerButton, Img} from './styles';


const Login = (...props) => {

  const [imgPosition, setImg] = useState('0%');

  const entrar = () => {
    setImg("0%");
    //console.log(imgPosition);
  };
  const criarConta = () => {
    setImg("50%");
    //console.log(imgPosition);
  };

  
  return (
    <>
      <ContainerButton>  
          <Button buttonStyle='error' onClick={(event) => entrar()}>
                {' '}Entrar{' '}
          </Button>
          <Button onClick={(event) => criarConta()}>
                {' '}Criar conta{' '}
          </Button>
      </ContainerButton>
      <Container>
        <Img {...props} right={imgPosition}  src="http://placeimg.com/640/480/food"/>

        {/* <ContainerSingIn>
            <SingnIn/>
        </ContainerSingIn> */}
        
        <ContainerSingUp>
          <SingnUp/>
        </ContainerSingUp>
      </Container>
    </>
  );
};

export default Login;
