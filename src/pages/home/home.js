import React, { Fragment } from 'react';
import {Button, Typography, Divider, TextField} from '@material-ui/core'
import { Header, AlignLeft, AlignRight, Background, FullWidthDivider, PageWrapper } from './home.styled';
import ImageButton from "../../components/image-button/image-button";
import { companyName, companySlogan, consultorButtonText, enterButtonText, subtitle } from './home.strings';

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
      {/*<div>*/}
      {/*  <ImageButton title="Celular" />*/}
      {/*</div>*/}
      <Background>
        <Typography>{subtitle}</Typography>
        <TextField variant="outlined" />
      </Background>
    </PageWrapper>
  );
};

export default Home;
