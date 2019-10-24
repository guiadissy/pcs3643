import styled from 'styled-components';
import backgroudImage from '../../assets/images/background-motherboard.jpg'
import { Divider, Typography, TextField } from '@material-ui/core';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AlignLeft = styled.div`
  display: flex;
  margin-left: 18px;
  margin-block: auto;
  align-items: center;
`;

export const AlignRight = styled.div`
  display: flex;
  margin-right: 18px;
  margin-block: auto;
`;

export const Background = styled.div`
  background-image:
  linear-gradient(90deg, #FFFFFF 21.42%, rgba(255, 255, 255, 0.62) 65.21%, rgba(255, 255, 255, 0) 100%),
  url(${backgroudImage});
  height: 100%;
  width: 100%;
  min-height: 1000px;
  background-size: cover;
`;

export const FullWidthDivider = styled(Divider)`
  width: 100%;
  margin: 12px 0 !important;
  background-color: blue !important;
`;

 export const PageWrapper = styled.div`
  margin: 8px;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  place-content: center;
`;

export const CustomTypography = styled(Typography) `
  margin-right: 12px !important;
  margin-left: 12px !important;
  margin-top: auto !important;
`;

export const CustomTypography2 = styled(Typography) `
  padding: 120px 20px !important;
`;

export const CustomTextField = styled(TextField) `
  padding-left: 20px !important;
  padding-right: 20px !important;
  width: 300px;
`;


export const TypographyWithMargin = styled(Typography)`
  margin-left: 12px !important;
`;
