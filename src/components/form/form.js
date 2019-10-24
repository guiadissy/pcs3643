import React, { Fragment,Form } from 'react';
import { TextField, Typography, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel } from "@material-ui/core";
import { conditions, title, wantToPay } from "../../pages/Smartphone/smartphone.strings";
import { AlignLeft, myFragment } from "../../pages/Smartphone/smartphone.styled";
import Button from '@material-ui/core/Button/Button';

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
          <Typography variant="h2">{title}</Typography>
          <Typography variant="h3">Condicoes</Typography>
          <AlignLeft>
            <Typography>{wantToPay}</Typography>
            <TextField variant="outlined" placeholder="Preco max" />
          </AlignLeft>
          <AlignLeft>
            <Typography>{conditions}</Typography>
            <FormControl component="fieldset" >
              <RadioGroup name="gender1" >
                <AlignLeft>
                  <FormControlLabel value="new" control={<Radio />} label="Novo" />
                  <FormControlLabel value="usado" control={<Radio />} label="Usado" />
                </AlignLeft>
              </RadioGroup>
            </FormControl>
          </AlignLeft>
          <Typography variant="h3">Characteristicas</Typography>
          <AlignLeft>
            <Typography>Obrigatorio</Typography>
            <TextField name="name" value={this.state.value} variant="outlined" placeholder="Obrigatorio" />
          </AlignLeft>
          <AlignLeft>
            <Typography>Diferencias</Typography>
            <TextField variant="outlined" placeholder="Diferencias" />
          </AlignLeft>
          <Typography variant="h3">Atividades</Typography>
          <AlignLeft>
            <Typography>Atividades</Typography>
            <TextField variant="outlined" placeholder="Atividades" />
          </AlignLeft>
          <Button type="submit" value="Enviar" variant="contained" color="primary">Continuar</Button>
        </myFragment>
      </Fragment>

    );
  }
}

export default NameForm;