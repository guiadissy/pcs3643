import React from 'react';
import {Button, Typography, Divider, TextField} from '@material-ui/core'
import { Header, AlignLeft, AlignRight, Background, FullWidthDivider, PageWrapper, Body, radioBox, RadioBox } from './smartphone.styled';
import ImageButton from "../../components/image-button/image-button";
import Smartphone from "../../assets/images/smartphone.png";
import { companyName, companySlogan, consultorButtonText, enterButtonText, subtitle, categoria, title, condicoes, estado } from './smartphone.strings';

const SmartPhone = () => {



  return (
    <PageWrapper>
      <Header>
        <AlignLeft>
          <div>
            <Smartphone />
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
