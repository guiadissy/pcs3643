import styled from 'styled-components';
import backgroudImage from '../../assets/images/smartphone.jfif'
import { Divider } from '@material-ui/core';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;


export const AlignLeft = styled.div`
  display: flex;
`;

export const AlignRight = styled.div`
  display: flex;
`;

export const Body = styled.div`
  background-image:
  linear-gradient(90deg, #FFFFFF 21.42%, rgba(255, 255, 255, 0.62) 65.21%, rgba(255, 255, 255, 0) 100%),
  url(${backgroudImage});
  height: 100%;
  width: 100%;
  min-height: 1000px;
`;

export const FullWidthDivider = styled(Divider)`
  width: 100%;
  margin: 12px 0 !important;
  background-color: blue !important;
`;

 export const PageWrapper = styled.div`
  margin: 8px;
`;

export const RadioBox = styled.div`
  padding: 3em;
  display: flex;
`;

