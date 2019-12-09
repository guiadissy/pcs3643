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
} from '../../pages/home/home.styled';
import RegisterPreForm from '../../components/form/RegisterPreForm';
import LoginForm from '../../components/form/LoginForm';
import { companyName, companySlogan} from '../../pages/home/home.strings';



class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
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
                            <LoginForm history={this.props.history} />
                        </FormBackground>
                        <FormBackground>
                            <RegisterPreForm />
                        </FormBackground>
                    </FlexContainer>
                </Background>
            </PageWrapper>
        );
    };
}
export default Login;
