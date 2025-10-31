import React from 'react';
import { SmartGateLogo } from '../src/assets';
import StylizedButton from '../src/components/Button';
import styled from 'styled-components/native';

export default function LoginPage(): JSX.Element {
  return (
    <Container>
      <Header>
        <WelcomeText>Bem vindo(a) ao</WelcomeText>
        <TitleText>Smart Gate</TitleText>
      </Header>
      <StyledLogo />
      <Footer>
        <StyledButton
          text="Entrar"
          variant="primary"
          onPress={() => console.log('Entrar clicado')}
          underline={true}
        />
        <RegisterBox>
          <RegisterBasic>Não tem cadastro?</RegisterBasic>
          <RegisterLink> Clique aqui</RegisterLink>
        </RegisterBox>
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

const WelcomeText = styled.Text`
  color: ${(props) => props.theme.colors.darkBlue};
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.medium}; 
`;

const TitleText = styled.Text`
  color: ${(props) => props.theme.colors.darkBlue};
  font-size: 40px;
  margin-bottom: 16px;

  font-family: ${(props) => props.theme.fonts.medium}; 
`;

const StyledLogo = styled(SmartGateLogo)`
  width: 100%;
  max-width: 400px; 
  height: undefined; 
  aspect-ratio: 0.738; 
  align-self: center; 
`;

const Footer = styled.View`
  width: 100%;
  align-items: center;
`;

const StyledButton = styled(StylizedButton)`
  width: 300px; 
  height: 52px;
  border-radius: 8px;
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