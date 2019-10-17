import React, { Fragment } from 'react';
import {Button, Typography, Divider, TextField} from '@material-ui/core'
import { Header, AlignLeft, AlignRight, Background, FullWidthDivider, PageWrapper, Body, radioBox, RadioBox } from './smartphone.styled';
import ImageButton from "../../components/image-button/image-button";
import { ReactComponent as Smartphone } from "../../assets/images/Smartphone.svg";
import { companyName, companySlogan, consultorButtonText, enterButtonText, subtitle, categoria, title, condicoes, estado }
  from './smartphone.strings';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import clsx from 'clsx';

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
