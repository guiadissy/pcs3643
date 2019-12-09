import React, { Fragment, Form, Text } from 'react';
import axios from 'axios';
import { TextField, Typography, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel } from "@material-ui/core";
import { conditions, title, wantToPay, successText } from "../../pages/Smartphone/smartphone.strings";
import { AlignLeft, myFragment } from "../../pages/Smartphone/smartphone.styled";
import Button from '@material-ui/core/Button/Button';
import { TypographyWithMargin } from "./form.styled";
import { history } from "../../components/Routes/Routes";
import { homeUrl, loginUrl, smartphoneUrl } from '../../components/Routes/Routes.strings';
import { Alert, UncontrolledAlert  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import queryString from 'query-string';

class NameForm extends React.Component {
  constructor(props) {
      super(props);
      var s = '';
      var afterLogin = false;
      if (this.props.hasOwnProperty('history')) {
          const values = queryString.parse(this.props.history.location.search);
          if (("userID" in values)) {
              s = values.userID;
          }
          if (("state" in values) && values.state == "login")
              this.afterLogin = true;
          try {
              this.formDat = this.props.history.location.state.formData;
          } catch (err) {
              this.formDat = {
                  price: '',
                  state: 'new',
                  obligatory: '',
                  additional: '',
                  activity: ''
              };
          }
          
           
      }
    this.state = {
        formData: this.formDat,
        errorData:{
            error: false,
            ePrice: false,
            eObligatory: false,
            eAdditional: false,
            eActivity: false
        },
        submitted: false,
        userID: s  
    };
    
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errorMessage = this.errorMessage.bind(this);
    this.submit = this.submit.bind(this);

    if (this.afterLogin) {
        this.submit();
    }
       
  }
   
  handleChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      var formData =  this.state.formData;
      formData[name] = value;
      this.setState({ formData: formData });
  }

  submit() {
      const req = {
          price: this.state.formData.price,
          state: this.state.formData.state,
          obligatory: this.state.formData.obligatory,
          additional: this.state.formData.additional,
          activity: this.state.formData.activity
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
              error: true,
              ePrice: obj.price == "Invalid" ? true : false,
              eActivity: obj.activity == "Invalid" ? true : false,
              eAdditional: obj.additional == "Invalid" ? true : false,
              eObligatory: obj.obligatory == "Invalid" ? true : false
          })
      }).then(resp => {
          if (resp === undefined) return;
          else {
              this.setState({
                  error: false,
                  ePrice: false,
                  eActivity: false,
                  eAdditional: false,
                  eObligatory: false,
                  submitted: true
              })
          }

      });
  }
  handleSubmit(event) {
      event.preventDefault();
      if (this.state.userID=='') {
          history.push({
              pathname: loginUrl,
              search: '?redirect_uri=' + smartphoneUrl + '&state=login',
              state: { formData: this.state.formData }
          });
          return;
      }
      this.submit();
     
  }
  errorMessage() {
      var mesage= "Please correct the following values:";
      if (this.state.ePrice)
          mesage += "Price, "
      if (this.state.eObligatory)
          mesage += "Obligatory, "
      if (this.state.eAdditional)
          mesage += "Additional, "
      if (this.state.eActivity)
          mesage += "Activity "
      return mesage;
  }

  render() {
      if (this.state.submitted){
          return (
              <UncontrolledAlert color="success">
                  <h4 className="alert-heading">Parabens!</h4>
                  <Typography>
                      {successText}
                  </Typography>
              </UncontrolledAlert>
          );
      } else {
          return (
              <Fragment>
                  {this.state.error &&
                      <UncontrolledAlert color="danger">
                          <h4 className="alert-heading">Error no procesamento do seu perdido!</h4>
                          <Typography>
                              {this.errorMessage()}
                          </Typography>
                      </UncontrolledAlert>
                  }

                  <form onSubmit={this.handleSubmit}>
                      <Typography variant="h3">{title}</Typography>
                      <TypographyWithMargin marginY="16px" variant="h5">Condicoes</TypographyWithMargin>
                      <AlignLeft>
                          <TypographyWithMargin marginX="8px" >{wantToPay}</TypographyWithMargin>
                          <TextField variant="outlined" error={this.state.ePrice} placeholder="Preco max" value={this.state.formData.price} name="price" onChange={this.handleChange} />
                      </AlignLeft>
                      <AlignLeft>
                          <TypographyWithMargin marginY="8px" marginX="8px">Estado</TypographyWithMargin>
                          <FormControl component="fieldset" >
                              <RadioGroup name="state" value={this.state.formData.state} onChange={this.handleChange}>
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
                          <TextField name="obligatory" error={this.state.eObligatory} value={this.state.formData.obligatory} onChange={this.handleChange} variant="outlined" placeholder="Obrigatorio" />
                      </AlignLeft>
                      <AlignLeft>
                          <TypographyWithMargin marginX="8px" marginY="8px">Diferencias</TypographyWithMargin>
                          <TextField variant="outlined" error={this.state.eAdditional} placeholder="Diferencias" name="additional" value={this.state.formData.additional} onChange={this.handleChange} />
                      </AlignLeft>
                      <TypographyWithMargin marginY="8px" variant="h5">Atividades</TypographyWithMargin>
                      <AlignLeft>
                          <TypographyWithMargin marginX="8px" marginY="8px">Atividades</TypographyWithMargin>
                          <TextField variant="outlined" placeholder="Atividades" error={this.state.eActivity} name="activity" value={this.state.formData.activity} onChange={this.handleChange} />
                      </AlignLeft>
                      <Button type="submit" value="Enviar" variant="contained" color="primary">Continuar</Button>
                  </form>
              </Fragment>

          );

      }
  }
}

export default NameForm;