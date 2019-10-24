import React, { Fragment,Form } from 'react';
import { TextField, Typography, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel } from "@material-ui/core";
import { conditions, title, wantToPay } from "../../pages/Smartphone/smartphone.strings";
import { AlignLeft, myFragment } from "../../pages/Smartphone/smartphone.styled";
import Button from '@material-ui/core/Button/Button';
import {TypographyWithMargin} from "./form.styled";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <myFragment>
          <Typography variant="h3">{title}</Typography>
          <TypographyWithMargin marginY="16px" variant="h5">Condicoes</TypographyWithMargin>
          <AlignLeft>
            <TypographyWithMargin marginX="8px" >{wantToPay}</TypographyWithMargin>
            <TextField variant="outlined" placeholder="Preco max" />
          </AlignLeft>
          <AlignLeft>
            <TypographyWithMargin marginY="8px" marginX="8px">Estado</TypographyWithMargin>
            <FormControl component="fieldset" >
              <RadioGroup name="gender1" >
                <AlignLeft>
                  <FormControlLabel value="new" control={<Radio />} label="Novo" />
                  <FormControlLabel value="usado" control={<Radio />} label="Usado" />
                </AlignLeft>
              </RadioGroup>
            </FormControl>
          </AlignLeft>
          <TypographyWithMargin marginY="16px" variant="h5">Characteristicas</TypographyWithMargin>
          <AlignLeft>
            <TypographyWithMargin marginX="8px" >Obrigatorio</TypographyWithMargin>
            <TextField name="name" value={this.state.value} variant="outlined" placeholder="Obrigatorio" />
          </AlignLeft>
          <AlignLeft>
            <TypographyWithMargin marginX="8px" marginY="8px">Diferencias</TypographyWithMargin>
            <TextField variant="outlined" placeholder="Diferencias" />
          </AlignLeft>
          <TypographyWithMargin marginY="8px" variant="h5">Atividades</TypographyWithMargin>
          <AlignLeft>
            <TypographyWithMargin marginX="8px" marginY="8px">Atividades</TypographyWithMargin>
            <TextField variant="outlined" placeholder="Atividades" />
          </AlignLeft>
          <Button type="submit" value="Enviar" variant="contained" color="primary">Continuar</Button>
        </myFragment>
      </Fragment>

    );
  }
}

export default NameForm;