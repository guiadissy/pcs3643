import React from 'react';
import { Button, Typography, TextField } from '@material-ui/core'
import { Header, AlignLeft, AlignRight, FullWidthDivider, PageWrapper, Body } from './smartphone.styled';
import Smartphone from "../../assets/images/smartphone.png";
import { companyName, successText, companySlogan, consultorButtonText, enterButtonText, category, title, conditions } from './smartphone.strings';
import Form from '../../components/form/form';
import {history} from "../../components/Routes/Routes";
import {consultantUrl, homeUrl} from "../../components/Routes/Routes.strings";
import ImageButton from "../../components/image-button/image-button";
import {FlexContainer, TypographyWithMargin} from "../home/home.styled";
import {ImageBlock} from "../../components/image-button/image-button.styled";

class smartphone extends React.Component {
    constructor(props) {
        super(props);
 
        this.goToHomeRoute = this.goToHomeRoute.bind(this);
        this.goToConsultantRoute = this.goToConsultantRoute.bind(this);
    }

  goToHomeRoute(){
    history.push(homeUrl);
  };

  goToConsultantRoute(){
    history.push(consultantUrl);
  };

  render() {
      return (
          <PageWrapper>
              <Header>
                  <AlignLeft>
                      <img src={Smartphone} />
                      <AlignLeft onClick={this.goToHomeRoute}>
                          <ImageBlock>
                              <Typography variant="h4">{companyName}</Typography>
                              <Typography>{category}</Typography>
                          </ImageBlock>
                          <TypographyWithMargin variant="h6">{companySlogan}</TypographyWithMargin>
                      </AlignLeft>
                  </AlignLeft>
                  <AlignRight>
                      <Button>{enterButtonText}</Button>
                      <Button variant="contained" color="primary" onClick={this.goToConsultantRoute}>{consultorButtonText}</Button>
                  </AlignRight>
              </Header>
              <FullWidthDivider />
              <Body>
                  <Form history={this.props.history}/>
              </Body>
          </PageWrapper>
      );
    }
  
};


export default smartphone;
