import React, { Fragment } from 'react';
import { Button, Typography, Divider, TextField } from '@material-ui/core'
import { Header, AlignLeft, AlignRight, Background, FullWidthDivider, PageWrapper, FlexContainer } from './home.styled';
import ImageButton from "../../components/image-button/image-button";
import { companyName, companySlogan, consultorButtonText, enterButtonText, subtitle, continueButtonText } from './home.strings';
import { ReactComponent as SmartPhoneImg } from "../../assets/images/smart_phone.svg"
import { ReactComponent as TabletImg } from "../../assets/images/tablet.svg"
import { ReactComponent as NotebookImg } from "../../assets/images/notebook.svg"
import { ReactComponent as DesktopImg } from "../../assets/images/desktop.svg"

const Home = () => {



  return (
    <PageWrapper>
      <Header>
        <AlignLeft>
          <Typography>{companyName}</Typography>
          <Typography>{companySlogan}</Typography>
        </AlignLeft>
        <AlignRight>
          <Button>{enterButtonText}</Button>
          <Button variant="contained" color="primary">{consultorButtonText}</Button>
        </AlignRight>
      </Header>
          <FullWidthDivider />
          <FlexContainer>
              <ImageButton title="SmartPhone" image={<SmartPhoneImg />} />
              <ImageButton title="Tablet" image={<TabletImg />} />
              <ImageButton title="Notebook" image={<NotebookImg />} />
              <ImageButton title="Desktop" image={<DesktopImg />} />
          </FlexContainer>
      <Background>
        <Typography>{subtitle}</Typography>
           <TextField variant="outlined" />
              <Button variant="contained" color="primary">{continueButtonText}</Button>
      </Background>
    </PageWrapper>
  );
};

export default Home;
