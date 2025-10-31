import React from 'react';
import { Top } from '../src/assets';
import StylizedButton from '../src/components/Button';
import {StylizedInput} from '../src/components/Input';
import styled from 'styled-components/native';

export default function LoginPage(): JSX.Element {
  return (
    <Container>
      <StyledLogo />
      <Header>
        <LoginText>Login</LoginText>
      </Header>
      <Content>
        <StylizedInput
          label='E-mail'/>
        <StylizedInput
         label='Senha'/>
      </Content>
      <Footer>
        <ForgotPassword>Esqueceu a senha?</ForgotPassword>
        <StyledButton
          text="Entrar"
          variant="primary"
          onPress={() => console.log('Entrar clicado')}
        />
        <StyledButton
          text="Entrar"
          variant="primary"
          onPress={() => console.log('Entrar clicado')}
        />
      </Footer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  padding-horizontal: 24px;
  padding-top: 40px;
  justify-content: space-between;
`;

const Header = styled.View`
  align-items: center;
`;

const LoginText = styled.Text`
  color: ${(props) => props.theme.colors.darkBlue};
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.medium}; 
`;

const ForgotPassword = styled.Text`
  color: ${(props) => props.theme.colors.darkBlue};
  font-size: 40px;
  margin-bottom: 16px;

  font-family: ${(props) => props.theme.fonts.medium}; 
`;

const StyledLogo = styled(Top)`
  width: 100%; 
  height: undefined; 
  aspect-ratio: 0.738; 
  align-self: center; 
`;

const Footer = styled.View`
  width: 100%;
  align-items: center;
`;

const Content = styled.View`
  width: 100%;
  align-items: center;
`;

const StyledButton = styled(StylizedButton)`
  width: 300px; 
  height: 52px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.mediumBlue};
`;

const RegisterBox = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 16px; 
  margin-bottom: 130px;
`;

const RegisterBasic = styled.Text`
  color: ${(props) => props.theme.colors.black};
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.medium};
`;

const RegisterLink = styled.Text`
  color: ${(props) => props.theme.colors.black};
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.medium};
  text-decoration-line: underline;
`;