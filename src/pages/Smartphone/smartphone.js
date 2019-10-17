import React, { Fragment } from 'react';
import {Button, Typography, Divider, TextField} from '@material-ui/core'
import { Header, AlignLeft, AlignRight, Background, FullWidthDivider, PageWrapper, Body, radioBox, RadioBox } from './smartphone.styled';
import ImageButton from "../../components/image-button/image-button";
import { ReactComponent as Smartphone } from "../../assets/images/Smartphone.svg";
import { companyName, companySlogan, consultorButtonText, enterButtonText, subtitle, categoria, title, condicoes, estado }
    from './smartphone.strings';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import clsx from 'clsx';

const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
});

function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}

const Home = () => {



  return (
    <PageWrapper>
      <Header>
              <AlignLeft>
                  <div>
                      <Smartphone />
                  </div>
                  <div>
                      <Typography>{companyName}</Typography>
                      <Typography>{categoria}</Typography>
                  </div>
                  <Typography>{companySlogan}</Typography>
            </AlignLeft>
        <AlignRight>
          <Button>{enterButtonText}</Button>
          <Button variant="contained" color="primary">{consultorButtonText}</Button>
        </AlignRight>
      </Header>
          <FullWidthDivider />
          <Body>
              <Typography>{title}</Typography>
              <Typography>{condicoes}</Typography>
              <AlignLeft>
                  <RadioBox>
                      <AlignLeft>
                      <FormControl component="fieldset">
                          <FormLabel component="legend">{estado}</FormLabel>
                          <RadioGroup defaultValue="novo" aria-label="gender" name="customized-radios">
                              <AlignLeft>
                                  <FormControlLabel value="usado" control={<StyledRadio />} label="Usado" />
                                  <FormControlLabel value="novo" control={<StyledRadio />} label="Novo" />
                              </AlignLeft>
                          </RadioGroup>
                          </FormControl>
                      </AlignLeft>
                  </RadioBox>
                       
              </AlignLeft>
            <TextField variant="outlined" />
          </Body>
    </PageWrapper>
  );
};

export default Home;
