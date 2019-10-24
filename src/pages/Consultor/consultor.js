import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Typography, Divider, TextField} from '@material-ui/core'
import { Header, AlignLeft, AlignRight, Background, FullWidthDivider, PageWrapper, Body, radioBox, RadioBox } from './consultor.styled';
import { companyName, companySlogan, consultorButtonText, enterButtonText, subtitle, categoria, title, info, email,celular }
    from './consultor.strings';
import {history} from "../../components/Routes/Routes";
import {consultantUrl, homeUrl} from "../../components/Routes/Routes.strings";
import {TypographyWithMargin} from "../home/home.styled";

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}));

const Consultor = () => {

    const goToHomeRoute = () => {
        history.push(homeUrl);
    };


    return (
        <PageWrapper>
            <Header>
                <AlignLeft onClick={goToHomeRoute}>
                    <Typography variant="h4">{companyName}</Typography>
                    <TypographyWithMargin>{companySlogan}</TypographyWithMargin>
                </AlignLeft>
                <AlignRight>
                    <Button>{enterButtonText}</Button>
                    <Button variant="contained" color="primary">{consultorButtonText}</Button>
                </AlignRight>
            </Header>
            <FullWidthDivider />
            
            <Body>
                <Typography variant="h1" >{title}</Typography>
                <p><Typography>{info}</Typography></p>
                <div>
                    <TextField
                        margin="normal"
                        variant="outlined"
                        label={email}
                        type="email"
                        name="email"
                        autoComplete="email"/>
                </div>
                <div>
                    <TextField variant="outlined"
                        label={celular}
                        margin="normal"
                    />
                </div>
                <Button variant="contained" color="primary">{consultorButtonText}</Button>
            </Body>
        </PageWrapper>
    );
};

export default Consultor;
