import React from 'react';
import { Top } from '../src/assets';
import StylizedButton from '../src/components/Button';
import { StylizedInput } from '../src/components/Input';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { useRouter , Link } from 'expo-router';

export default function LoginPage(): JSX.Element {
    const router = useRouter();
    const handleJoin = () => {
      router.push('/home'); 
    };
    const handleRegister = () => {
      router.push('/register'); 
    };
  return (
    <Container>
      <StyledLogo>
        <BackgroundSVG />
      </StyledLogo>

      <ScrollableContent>
        <Header>
          <LoginText>Login</LoginText>
        </Header>

        <Content>
          <StyledLoginInput placeholder="E-mail" />
          <StyledLoginInput placeholder="Senha" />
        </Content>

        <Footer>
          <PasswordBox>
            <Link href="/forgotPassword" asChild>
              <ForgotPassword>Esqueceu a senha?</ForgotPassword>
            </Link>
          </PasswordBox>
          <Button>
           
              <StyledButtonJoin
                text="Entrar"
                variant="third"
                textStyle={{ fontSize: 14, fontWeight: 'bold' }}
                onPress={handleJoin}
              />
        
              <StyledButtonRegister
                text="Cadastrar-se"
                variant="secondary"
                textStyle={{ fontSize: 14, fontWeight: 'bold' }}
                onPress={handleRegister}
              />
            
          </Button>
        </Footer>
      </ScrollableContent>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  position: relative;
  background-color: ${(props) => props.theme.colors.background};
`;

const ScrollableContent = styled(ScrollView).attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    marginBottom: 24,
  },
}))`
  flex: 1;
  margin-horizontal: 48px;
  margin-top: 280px;
`;

const StyledLogo = styled.View`
  position: absolute;
  top: -120px;
  left: 0;
  right: 0;
  height: 400px;
  z-index: -1;
  overflow: hidden;
  margin-bottom: 96px;
`;

const BackgroundSVG = styled(Top)`
  width: 100%;
  height: 100%;
`;

const Header = styled.View`
  align-items: center;
  margin-bottom: 24px;
`;

const LoginText = styled.Text`
  color: ${(props) => props.theme.colors.darkBlue};
  font-size: 40px;
  font-family: ${(props) => props.theme.fonts.Bold};
  margin-bottom: 25x;
`;

const Content = styled.View`
  width: 100%;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
`;

const StyledLoginInput = styled(StylizedInput)`
  width: 100%;
  max-width: 350px;
`;

const Footer = styled.View`
  width: 100%;
  margin-top: 15px;
`;

const Button = styled.View`
  align-items: center;
`;

const PasswordBox = styled.View`
  align-items: end;
`;

const ForgotPassword = styled.Text`
  color: ${(props) => props.theme.colors.black};
  font-size: 16px;
  margin-bottom: 50px;
  font-family: ${(props) => props.theme.fonts.medium};
  text-decoration-line: underline;
`;

const StyledButtonJoin = styled(StylizedButton)`
  width: 100%;
  max-width: 300px;
  height: 52px;
  border-radius: 4px;
  margin-top: 16px;
`;

const StyledButtonRegister = styled(StylizedButton)`
  width: 100%;
  max-width: 300px;
  height: 52px;
  border-radius: 4px;
  margin-top: 16px;
`;
