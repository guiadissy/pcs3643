import React from 'react';
import {Button, Typography, TextField} from '@material-ui/core'
import { Header, AlignLeft, AlignRight, FullWidthDivider, PageWrapper, Body } from './smartphone.styled';
import Smartphone from "../../assets/images/smartphone.png";
import { companyName, companySlogan, consultorButtonText, enterButtonText, categoria, title, condicoes } from './smartphone.strings';

const SmartPhone = () => {

  return (
    <PageWrapper>
      <Header>
        <AlignLeft>
          <div>
            <img src={Smartphone} />
          </div>
          <div>
            <Typography>{companyName}</Typography>
            <Typography>{categoria}</Typography>
          </div>
          <Typography>{companySlogan}</Typography>
        </AlignLeft>
        <AlignRight>
          <Button>{enterButtonText}</Button>
          <Button variant="contained" color="primary">{consultorButtonText}</Button>
        </AlignRight>
      </Header>
      <FullWidthDivider />
      <Body>
        <Typography>{title}</Typography>
        <Typography>{condicoes}</Typography>
        <AlignLeft>

        </AlignLeft>
        <TextField variant="outlined" />
      </Body>
    </PageWrapper>
  );
};

export default SmartPhone;
