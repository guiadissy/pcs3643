import React, { Fragment } from 'react';
import { Button, Typography, TextField } from '@material-ui/core'
import { AlignLeft, TypographyWithMargin, FlexContainer, Login_Container, MarginContainer, FullWidth, marginBottom } from './LoginForm.styled';
import axios from 'axios';
import { history } from "../../components/Routes/Routes";
import {  homeUrl } from "../../components/Routes/Routes.strings";
import queryString from 'query-string';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        pw: '' 
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   
  handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
  	event.preventDefault();
  	//TODO Login with Backend request
        const values = queryString.parse(this.props.history.location.search)
        if ("redirect_uri" in values) {
            history.push({
                pathname: values.redirect_uri,
                search: '?state=' + values.state + '&userID=62456234',
                state: this.props.history.location.state
            });
        } else {
            history.push({
                pathname: homeUrl,
                search: '?userID=62456234',
                state: this.props.history.location.state
            });
        }
       
  }

  render() {
     
  	return (
            <Login_Container>
              <MarginContainer>
                <FlexContainer>
                    <Typography variant="h3">Login</Typography>
                </FlexContainer>
                <FlexContainer>
                        <TextField fullWidth="true" label="E-mail" variant="outlined" value={this.state.username} name="username" onChange={this.handleChange} />
                </FlexContainer>
                <FlexContainer>
                        <TextField fullWidth="true" name="pw" label="Password" value={this.state.pw} onChange={this.handleChange} variant="outlined" />    
                </FlexContainer>
                <FlexContainer>
                        <Button fullWidth="true" onClick={this.handleSubmit} variant="contained" color="primary">Continuar</Button>
                </FlexContainer>
              </MarginContainer>
            </Login_Container>

          );
      }
   
  
}

export default NameForm;