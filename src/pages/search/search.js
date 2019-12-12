import React, {useState} from 'react';
import axios from 'axios';
import { Button, Typography, TextField, Card } from '@material-ui/core'
import {
  Header,
  AlignLeft,
  AlignRight,
  Background,
  FullWidthDivider,
  PageWrapper,
  FlexContainer,
  TypographyWithMargin,
  CustomTypography,
  CustomTypography2,
  CustomTextField,
} from './search.styled';
import { companyName, companySlogan, consultorButtonText, enterButtonText, subtitle, continueButtonText } from './search.strings';
import {history} from "../../components/Routes/Routes";
import { consultantUrl, smartphoneUrl } from "../../components/Routes/Routes.strings";

const Search = () => {

  const [searchField, setSearchField] = useState();
  const [categories, setCategories] = useState();
  const [errors, setErrors] = useState();

  const goToConsultantRoute = () => {
    history.push(consultantUrl);
  };

  const updateSearchField = (text) => {
    setSearchField(text);
  };

  const getItems = () => {
    if (!searchField) {
      axios.get(` http://3.136.172.24:5000/itens`).then((res) => {
        debugger
        setCategories(res.data);
      }).catch((e) => {
        console.log(e);
        setErrors(e);
      })
    } else {
      axios.get(` http://3.136.172.24:5000/item/${searchField}`).then((res) => {
        debugger
        setCategories(res.data);
      }).catch((e) => {
        console.log(e);
        setErrors(e);
      })
    }
  };

  const categoryCards = (data) => {
    return (
      <Card>
        <Typography variant="h4">{data.nomeProduto}</Typography>
        <Typography>Categoria: {data.categoria}</Typography>
      </Card>
    )
  };

  return (
    <PageWrapper>
      <Header>
        <AlignLeft>
          <Typography variant="h4">{companyName}</Typography>
          <TypographyWithMargin variant="h6">{companySlogan}</TypographyWithMargin>
        </AlignLeft>
        <AlignRight>
          <Button>{enterButtonText}</Button>
          <Button variant="contained" color="primary" onClick={goToConsultantRoute}>{consultorButtonText}</Button>
        </AlignRight>
      </Header>
      <FullWidthDivider />
      <Background>
        <CustomTypography2 variant="h2">{subtitle}</CustomTypography2>
        <CustomTextField variant="outlined" placeholder="Insira aqui a sua busca" onChange={(e) => updateSearchField(e.target.value)} value={searchField}/>
        <Button variant="contained" color="primary" onClick={getItems}>{continueButtonText}</Button>
        {categories && categories.map((category) => (categoryCards(category)))}
      </Background>
    </PageWrapper>
  );
};

export default Search;
