import React from 'react';
import { Button, Typography, TextField } from '@material-ui/core'
import { Header, AlignLeft, AlignRight, FullWidthDivider, PageWrapper, Body } from './smartphone.styled';
import Smartphone from "../../assets/images/smartphone.png";
import { companyName, companySlogan, consultorButtonText, enterButtonText, category, title, conditions } from './smartphone.strings';
import Form from '../../components/form/form';
import {history} from "../../components/Routes/Routes";
import {consultantUrl, homeUrl} from "../../components/Routes/Routes.strings";
import ImageButton from "../../components/image-button/image-button";
import {FlexContainer, TypographyWithMargin} from "../home/home.styled";

const SmartPhone = () => {

  const goToHomeRoute = () => {
    history.push(homeUrl);
  };

  const goToConsultantRoute = () => {
    history.push(consultantUrl);
  };

  return (
    <PageWrapper>
      <Header>
        <AlignLeft>
          <ImageButton title="SmartPhone" image={Smartphone} />
          <AlignLeft onClick={goToHomeRoute}>
            <Typography variant="h4">{companyName}</Typography>
            <TypographyWithMargin variant="h6">{companySlogan}</TypographyWithMargin>
          </AlignLeft>
        </AlignLeft>
        <AlignRight>
          <Button>{enterButtonText}</Button>
          <Button variant="contained" color="primary" onClick={goToConsultantRoute}>{consultorButtonText}</Button>
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
