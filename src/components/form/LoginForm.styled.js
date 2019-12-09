import styled from 'styled-components';
import backgroudImage from '../../assets/images/background-motherboard.jpg'
import { Divider, Typography } from '@material-ui/core';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
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
  linear-gradient(90deg, rgba(255, 255, 255, 0.3) 21.42%, rgba(255, 255, 255, 0.8) 65.21%, rgba(255, 255, 255, 0) 100%),
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

 export const MarginContainer = styled.div`
   margin: 8px;
`;

 export const Login_Container = styled.div`
  border-style: ridge;
  background-color: white;
  width: 240px;
  height:240px;
`;
export const Register_Container = styled.div`
  border-style: ridge;
  background-color: white;
  width: 350px;
  height:550px;
`;

export const marginBottom = styled.div`
  margin-bottom: 10px;
`;
export const FullWidth = styled.div`
  display: flex;
`;
export const FlexContainer = styled.div`
  display: flex;
  margin: 8px;
  align-items: center;
  place-content: center;
`;
export const FlexSpace = styled.div`
  display: flex;
  margin: 8px;
  height:15px;
`;



export const TypographyWithMargin = styled(Typography)`
  margin-left: 12px !important;
`;

