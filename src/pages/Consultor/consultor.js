import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Typography, Divider, TextField} from '@material-ui/core'
import { Header, AlignLeft, AlignRight, Background, FullWidthDivider, PageWrapper, Body, radioBox, RadioBox } from './consultor.styled';
import { companyName, companySlogan, consultorButtonText, enterButtonText, subtitle, categoria, title, info, email,celular }
    from './consultor.strings';

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}));

const Home = () => {



    return (
        <PageWrapper>
            <Header>
                <AlignLeft>
                    <Typography>{companyName}</Typography>
                    <Typography>{companySlogan}</Typography>
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

export default Home;
