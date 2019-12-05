import React, { Fragment, Form } from 'react';
import axios from 'axios';
import { TextField, Typography, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel } from "@material-ui/core";
import { conditions, title, wantToPay, successText } from "../../pages/Smartphone/smartphone.strings";
import { AlignLeft, myFragment } from "../../pages/Smartphone/smartphone.styled";
import Button from '@material-ui/core/Button/Button';
import { TypographyWithMargin } from "./form.styled";
import { history } from "../../components/Routes/Routes";
import { homeUrl } from '../../components/Routes/Routes.strings';


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        price: '',
        state: 'new',
        obligatory: '',
        additional: '',
        activity: '',
        ePrice: false,
        eObligatory: false,
        eAdditional: false,
        eActivity: false,
        submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   
  handleChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({ [name]: value });
  }

  handleSubmit(event) {
      event.preventDefault();
      const req = {
          price: this.state.price,
          state: this.state.state,
          obligatory: this.state.obligatory,
          additional: this.state.additional,
          activity: this.state.activity
      };
      const errors = {
          ePrice: false,
          eObligatory: false,
          eAdditional: false,
          eActivity: false
      }
      axios.post('http://127.0.0.1:5000/Consulta', { req }
      ).catch(error => {
          var obj = JSON.parse(error.response.data);
          this.setState({
              ePrice: obj.price == "Invalid" ? true : false,
              eActivity: obj.activity == "Invalid" ? true : false,
              eAdditional: obj.additional == "Invalid" ? true : false,
              eObligatory: obj.obligatory == "Invalid" ? true : false
          })
          }).then(resp => {
              if (resp === undefined) return;
              else {
                  this.setState({
                      submitted:true
                  })
              }
             
          });
      
  }

  render() {
      if (this.state.submitted) {
          return (

              <TypographyWithMargin variant="h6">{successText}</TypographyWithMargin>

          );
      }
      else {
          return (
              <Fragment>
                  <form onSubmit={this.handleSubmit}>
                      <Typography variant="h3">{title}</Typography>
                      <TypographyWithMargin marginY="16px" variant="h5">Condicoes</TypographyWithMargin>
                      <AlignLeft>
                          <TypographyWithMargin marginX="8px" >{wantToPay}</TypographyWithMargin>
                          <TextField variant="outlined" error={this.state.ePrice} placeholder="Preco max" value={this.state.price} name="price" onChange={this.handleChange} />
                      </AlignLeft>
                      <AlignLeft>
                          <TypographyWithMargin marginY="8px" marginX="8px">Estado</TypographyWithMargin>
                          <FormControl component="fieldset" >
                              <RadioGroup name="state" value={this.state.state} onChange={this.handleChange}>
                                  <AlignLeft>
                                      <FormControlLabel selected value="new" control={<Radio />} label="Novo" />
                                      <FormControlLabel value="used" control={<Radio />} label="Usado" />
                                  </AlignLeft>
                              </RadioGroup>
                          </FormControl>
                      </AlignLeft>
                      <TypographyWithMargin marginY="16px" variant="h5">Characteristicas</TypographyWithMargin>
                      <AlignLeft>
                          <TypographyWithMargin marginX="8px" >Obrigatorio</TypographyWithMargin>
                          <TextField name="obligatory" error={this.state.eObligatory} value={this.state.obligatory} onChange={this.handleChange} variant="outlined" placeholder="Obrigatorio" />
                      </AlignLeft>
                      <AlignLeft>
                          <TypographyWithMargin marginX="8px" marginY="8px">Diferencias</TypographyWithMargin>
                          <TextField variant="outlined" error={this.state.eAdditional} placeholder="Diferencias" name="additional" value={this.state.additional} onChange={this.handleChange} />
                      </AlignLeft>
                      <TypographyWithMargin marginY="8px" variant="h5">Atividades</TypographyWithMargin>
                      <AlignLeft>
                          <TypographyWithMargin marginX="8px" marginY="8px">Atividades</TypographyWithMargin>
                          <TextField variant="outlined" placeholder="Atividades" error={this.state.eActivity} name="activity" value={this.state.activity} onChange={this.handleChange} />
                      </AlignLeft>
                      <Button type="submit" value="Enviar" variant="contained" color="primary">Continuar</Button>
                  </form>
              </Fragment>

          );
      }
   
  }
}

export default NameForm;