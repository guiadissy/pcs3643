import React from 'react';
import {  Typography } from '@material-ui/core'
import {
  Header,
  AlignLeft,
  AlignRight,
  Background,
  FullWidthDivider,
  PageWrapper,
  FlexContainer,
  TypographyWithMargin,
   FormBackground
} from './register.styled';
import RegisterForm from '../../components/form/RegisterForm';
import { companyName, companySlogan} from '../../pages/home/home.strings';



const Login = () => {

  return (
    <PageWrapper>
      <Header>
        <AlignLeft>
          <Typography variant="h4">{companyName}</Typography>
        </AlignLeft>
        <AlignRight>
           <TypographyWithMargin variant="h6">{companySlogan}</TypographyWithMargin>
        </AlignRight>
      </Header>
        <FullWidthDivider />
        <Background>
              <FlexContainer>
                  <FormBackground>
                      <RegisterForm />
                  </FormBackground>
              </FlexContainer>  
      </Background>
    </PageWrapper>
  );
};

export default Login;
