import React, { Fragment } from 'react';
import {TextField, Typography} from "@material-ui/core";
import {conditions, title} from "../../pages/Smartphone/smartphone.strings";
import {AlignLeft} from "../../pages/Smartphone/smartphone.styled";

const Form = (props) => {

  return (
    <Fragment>
    <Typography>{title}</Typography>
    <Typography>{conditions}</Typography>
      <AlignLeft>
        <Typography>Quero pagar</Typography>
      </AlignLeft>
      <TextField variant="outlined" />
    </Fragment>
  );
};

export default Form;