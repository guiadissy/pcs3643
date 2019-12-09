import React, { Fragment } from 'react';
import axios from 'axios';
import { Button, TextField, RadioGroup, Typography } from '@material-ui/core'
import { AlignLeft, TypographyWithMargin, MarginContainer, FlexContainer, Register_Container, Header } from './LoginForm.styled';
import { history } from "../../components/Routes/Routes";
import { homeUrl } from "../../components/Routes/Routes.strings";

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cpf: '',
            name: '',
            email: '',
            address: '',
            telefone: ''
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
        const data = {
            cpf: this.state.cpf,
            name: this.state.name,
            address: this.state.address,
            email: this.state.email,
            telefone: this.state.telefone
        };
        axios.post('http://127.0.0.1:5000/User', { data }
        
        ).then(resp => {            
            history.push(homeUrl);
        });
        

    }



  render() {
     
      return (
          <Register_Container>
              <MarginContainer>
                  <FlexContainer>
                      <Typography variant="h3">Cadastro</Typography>
                  </FlexContainer>
                  <RadioGroup class="customerType">
                      <Header>
                      <label for="customertype-personal" data-label="customer">
                          <div type="radio" id="customertype-personal" name="customertype-personal" value="PERSONAL">
                              <div class="card___2IniG qa-customertype-personal">
                                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+CiAgPGcgZmlsbD0ibm9uZSI+CiAgICA8cGF0aCBmaWxsPSIjRDJERkVDIiBkPSJNMzIgMjYuNjY3aDE3LjMzM3YyNi42NjZIMzguNzQxbC0xLjY2NC0xNS4yMzhIMzJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjOTlCQUQ5IiBkPSJNNDAgMzguNjY3Yy43MzYgMCAxLjMzMy41OTcgMS4zMzMgMS4zMzN2MTJoLTIuNjY2VjQwYzAtLjczNi41OTctMS4zMzMgMS4zMzMtMS4zMzN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjOTlCQUQ5IiBkPSJNNDYgNTAuNjY3YzAgLjczNi0uNTk3IDEuMzMzLTEuMzMzIDEuMzMzaC01LjMzNHYtMi42NjdoNS4zMzRjLjczNiAwIDEuMzMzLjU5NyAxLjMzMyAxLjMzNHoiLz4KICAgIDxjaXJjbGUgY3g9IjE2IiBjeT0iNDQiIHI9IjEuMzMzIiBmaWxsPSIjNEE0QTRBIi8+CiAgICA8Y2lyY2xlIGN4PSIxNiIgY3k9IjM4LjY2NyIgcj0iMS4zMzMiIGZpbGw9IiM0QTRBNEEiLz4KICAgIDxwYXRoIGZpbGw9IiM5OUJBRDkiIGQ9Ik0yOCAzOC42NjdoMi42NjdWNTJIMjh6Ii8+CiAgICA8cGF0aCBzdHJva2U9IiM0QTRBNEEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjY2NyIgZD0iTTkuMzMzIDUzLjMzM2g0NS4zMzQiLz4KICAgIDxwYXRoIGZpbGw9IiM0QTRBNEEiIGQ9Ik0xNy4zMzMgMzguNjY3aC0yLjY2NnYtMTJoMi42NjZ2MTJ6bTAgNS4zMzN2OGgtMi42NjZ2LThoMi42NjZ6Ii8+CiAgICA8cGF0aCBzdHJva2U9IiM0QTRBNEEiIHN0cm9rZS13aWR0aD0iMi42NjciIGQ9Ik00OC42NjcgMjUuMzMzVjUybS0yMiAxLjMzM2gxMC42NjZWMzguNjY3YzAtLjczNy0uNTk3LTEuMzM0LTEuMzMzLTEuMzM0aC04Yy0uNzM2IDAtMS4zMzMuNTk3LTEuMzMzIDEuMzM0djE0LjY2NnptMTYtMzMuMzMzSDQ4di04YzAtLjczNi0uNTk3LTEuMzMzLTEuMzMzLTEuMzMzSDQ0Yy0uNzM2IDAtMS4zMzMuNTk3LTEuMzMzIDEuMzMzdjh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGIiBzdHJva2U9IiM0QTRBNEEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjY2NyIgZD0iTTkuMzY1IDI1LjA5MkwzMS4xOSA5LjQxOGEuNjY3LjY2NyAwIDAgMSAuNzY0LS4wMWwyMi42NDcgMTUuNDM4YS4yNjcuMjY3IDAgMCAxLS4xNS40ODdIOS40NDJhLjEzMy4xMzMgMCAwIDEtLjA3Ny0uMjQxeiIvPgogIDwvZz4KPC9zdmc+" alt="Privatkunde">
                                  </img>
                                  <TypographyWithMargin>Cliente</TypographyWithMargin>
                              </div>
                          </div>
                        </label>
                        <label for="customertype-business" data-label="buisness">
                            <div type="radio" class="cardInput___2f64N" id="customertype-business" name="customertype-business" value="BUSINESS">
                                <div class="card___2IniG qa-customertype-business">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+CiAgPGcgZmlsbD0ibm9uZSI+CiAgICA8cGF0aCBmaWxsPSIjNEE0QTRBIiBkPSJNNDEuMzMzIDUwLjY2N2gxNmExLjMzMyAxLjMzMyAwIDEgMSAwIDIuNjY2SDhhMS4zMzMgMS4zMzMgMCAxIDEgMC0yLjY2Nmg0VjMzLjMzM2ExLjMzMyAxLjMzMyAwIDAgMSAyLjY2NyAwVjI4SDEyYTEuMzMzIDEuMzMzIDAgMSAxIDIuNjY3IDBBMS4zMzMgMS4zMzMgMCAwIDEgMTIgMjhWMTZhNS4zMzMgNS4zMzMgMCAwIDEgNS4zMzMtNS4zMzNIMzZBNS4zMzMgNS4zMzMgMCAwIDEgNDEuMzMzIDE2djM0LjY2N3ptLTIuNjY2IDBWMTZBMi42NjcgMi42NjcgMCAwIDAgMzYgMTMuMzMzSDE3LjMzM0EyLjY2NyAyLjY2NyAwIDAgMCAxNC42NjcgMTZ2MzQuNjY3aDI0eiIvPgogICAgPHBhdGggZmlsbD0iIzRBNEE0QSIgZD0iTTQxLjMzMyAyNi42Njd2MjRoOS4zMzRWMjkuMzMzQTIuNjY3IDIuNjY3IDAgMCAwIDQ4IDI2LjY2N2gtNi42Njd6TTM4LjY2NyAyNEg0OGE1LjMzMyA1LjMzMyAwIDAgMSA1LjMzMyA1LjMzM3YyNEgzOC42NjdWMjR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRDJERkVDIiBkPSJNNDEuMzMzIDI2LjY2N2g3LjQzOHYyNGgtNy40Mzh6TTI2LjY2NyAxMy4zMzNIMzZBMi42NjcgMi42NjcgMCAwIDEgMzguNjY3IDE2djM0LjY2N2gtMTJWMTMuMzMzem0tMTIgMjhoOHY5LjMzNGgtOHoiLz4KICAgIDxwYXRoIGZpbGw9IiM5OUJBRDkiIGQ9Ik00Mi42NjcgMzAuNjY3Yy43MzYgMCAxLjMzMy41OTcgMS4zMzMgMS4zMzN2MTguNjY3aC0yLjY2N1YzMmMwLS43MzYuNTk3LTEuMzMzIDEuMzM0LTEuMzMzem0tOS4zMzQgMTJjLjczNyAwIDEuMzM0LjU5NyAxLjMzNCAxLjMzM3Y2LjY2N0gzMlY0NGMwLS43MzYuNTk3LTEuMzMzIDEuMzMzLTEuMzMzem0tMTcuMzMzIDBjLjczNiAwIDEuMzMzLjU5NyAxLjMzMyAxLjMzM3Y2LjY2N2gtMi42NjZWNDRjMC0uNzM2LjU5Ny0xLjMzMyAxLjMzMy0xLjMzM3oiLz4KICAgIDxwYXRoIGZpbGw9IiM5OUJBRDkiIGQ9Ik0zOC42NjcgNDh2Mi42NjdoLTUuMzM0VjQ4eiIvPgogICAgPHJlY3Qgd2lkdGg9IjEwLjY2NyIgaGVpZ2h0PSIyLjY2NyIgeD0iMjEuMzMzIiB5PSIyNi42NjciIGZpbGw9IiM0QTRBNEEiIHJ4PSIxLjMzMyIvPgogICAgPHJlY3Qgd2lkdGg9IjEwLjY2NyIgaGVpZ2h0PSIyLjY2NyIgeD0iMjEuMzMzIiB5PSIzMiIgZmlsbD0iIzRBNEE0QSIgcng9IjEuMzMzIi8+CiAgICA8cGF0aCBmaWxsPSIjNEE0QTRBIiBkPSJNMjQgNDBoNS4zMzNBMi42NjcgMi42NjcgMCAwIDEgMzIgNDIuNjY3djEwLjY2NkgyMS4zMzNWNDIuNjY3QTIuNjY3IDIuNjY3IDAgMCAxIDI0IDQweiIvPgogICAgPHJlY3Qgd2lkdGg9IjEwLjY2NyIgaGVpZ2h0PSIyLjY2NyIgeD0iMjEuMzMzIiB5PSIyMS4zMzMiIGZpbGw9IiM0QTRBNEEiIHJ4PSIxLjMzMyIvPgogICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI0IDUwLjY2N2g1LjMzM3YtOEgyNHoiLz4KICA8L2c+Cjwvc3ZnPg==" alt="Firmenkunde">
                                    </img>
                                    <TypographyWithMargin>Fornecedor</TypographyWithMargin  >
                                </div>
                        </div>
                        </label>
                      </Header>
                  </RadioGroup>
                  <Header>
                      <TypographyWithMargin marginX="8px" >CPF</TypographyWithMargin>
                      <TextField variant="outlined" placeholder="CPF" value={this.state.cpf} name="cpf" onChange={this.handleChange} />
                  </Header>
                  <Header>
                      <TypographyWithMargin marginX="8px" >nome</TypographyWithMargin>
                      <TextField name="name" value={this.state.name} onChange={this.handleChange} variant="outlined" placeholder="Obrigatorio" />
                  </Header>
                  <Header>
                      <TypographyWithMargin marginX="8px" marginY="8px">endereco</TypographyWithMargin>
                      <TextField variant="outlined" placeholder="endereco" name="address" value={this.state.address} onChange={this.handleChange} />
                  </Header>
                  <Header>
                      <TypographyWithMargin marginX="8px" marginY="8px">email</TypographyWithMargin>
                      <TextField variant="outlined" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} />
                  </Header>
                  <Header>
                      <TypographyWithMargin marginX="8px" marginY="8px">telefone</TypographyWithMargin>
                      <TextField variant="outlined" placeholder="telefone" name="telefone" value={this.state.telefone} onChange={this.handleChange} />
                  </Header>
                  <Button fullWidth="true" onClick={this.handleSubmit} variant="contained" color="primary">Continuar</Button>
                  </MarginContainer>
          </Register_Container>

          );
      }
}

export default NameForm;