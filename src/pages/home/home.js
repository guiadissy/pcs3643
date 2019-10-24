import React from 'react';
import { Button, Typography, TextField } from '@material-ui/core'
import {
  Header,
  AlignLeft,
  AlignRight,
  Background,
  FullWidthDivider,
  PageWrapper,
  FlexContainer,
  TypographyWithMargin,
  CustomTypography,
  CustomTypography2,
  CustomTextField,
} from './home.styled';
import ImageButton from "../../components/image-button/image-button";
import { companyName, companySlogan, consultorButtonText, enterButtonText, subtitle, continueButtonText } from './home.strings';
import SmartPhoneImg from "../../assets/images/smartphone.png"
import TabletImg from "../../assets/images/tablet.png"
import NotebookImg from "../../assets/images/notebook.png"
import DesktopImg from "../../assets/images/desktop.png"
import {history} from "../../components/Routes/Routes";
import {consultantUrl, smartphoneUrl} from "../../components/Routes/Routes.strings";

const Home = () => {

  const goToConsultantRoute = () => {
    history.push(consultantUrl);
  };

  const goToSmartPhoneRoute = () => {
    history.push(smartphoneUrl);
  };

  return (
    <PageWrapper>
      <Header>
        <AlignLeft>
          <Typography variant="h4">{companyName}</Typography>
          <TypographyWithMargin variant="h6">{companySlogan}</TypographyWithMargin>
        </AlignLeft>
        <AlignRight>
          <Button>{enterButtonText}</Button>
          <Button variant="contained" color="primary" onClick={goToConsultantRoute}>{consultorButtonText}</Button>
        </AlignRight>
      </Header>
        <FullWidthDivider />
        <FlexContainer>
          <ImageButton title="SmartPhone" image={SmartPhoneImg} onClick={goToSmartPhoneRoute} />
          <ImageButton title="Tablet" image={TabletImg} />
          <ImageButton title="Notebook" image={NotebookImg} />
          <ImageButton title="Desktop" image={DesktopImg} />
        </FlexContainer>
      <Background>
        <CustomTypography2 variant="h2">{subtitle}</CustomTypography2>
          <CustomTextField variant="outlined" placeholder="Insira aqui a sua busca"/>
              <Button variant="contained" color="primary">{continueButtonText}</Button>
      </Background>
    </PageWrapper>
  );
};

export default Home;
