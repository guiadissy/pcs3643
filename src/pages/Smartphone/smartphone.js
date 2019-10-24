import React from 'react';
import { Button, Typography, TextField } from '@material-ui/core'
import { Header, AlignLeft, AlignRight, FullWidthDivider, PageWrapper, Body } from './smartphone.styled';
import Smartphone from "../../assets/images/smartphone.png";
import { companyName, companySlogan, consultorButtonText, enterButtonText, category, title, conditions } from './smartphone.strings';
import Form from '../../components/form/form';
import {history} from "../../components/Routes/Routes";
import {homeUrl} from "../../components/Routes/Routes.strings";

const SmartPhone = () => {

  const goToHomeRoute = () => {
    history.push(homeUrl);
  };

  return (
    <PageWrapper>
      <Header>
        <AlignLeft>
          <div>
            <img src={Smartphone} />
          </div>
          <div onClick={goToHomeRoute}>
            <Typography>{companyName}</Typography>
            <Typography>{category}</Typography>
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
        <Form />
      </Body>
    </PageWrapper>
  );
};

export default SmartPhone;
