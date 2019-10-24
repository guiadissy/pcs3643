import styled from 'styled-components';
import {Typography} from "@material-ui/core";

export const TypographyWithMargin = styled(Typography)`
  margin: ${props => props.marginY || 0 } ${props => props.marginX || 0} !important;
`;
