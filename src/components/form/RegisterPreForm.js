import React, { Fragment } from 'react';
import { Button, Typography, TextField } from '@material-ui/core'
import { AlignLeft, TypographyWithMargin, FlexContainer, Login_Container, MarginContainer, FlexSpace} from './LoginForm.styled';
import axios from 'axios';
import { history } from "../../components/Routes/Routes";
import { registerUrl   } from "../../components/Routes/Routes.strings";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   
  

  handleSubmit(event) {
  	event.preventDefault();
    history.push(registerUrl);
  }

  render() {
     
  	return (
            <Login_Container>
                <MarginContainer>
                    <Typography variant="h3">Cadastro</Typography>
                    <FlexSpace />
                    <Typography>Crie ja a sua conta e</Typography>
                    <Typography> tire partido de todos os beneficios.</Typography>
                    <FlexSpace />
                    <Button onClick={this.handleSubmit} fullWidth="true" variant="contained" color="primary">Cadastar-se agora</Button>
                </MarginContainer>
            </Login_Container>

          );
      }
   
  
}

export default NameForm;