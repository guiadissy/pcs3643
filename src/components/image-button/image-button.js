import React from 'react';
import {ButtonBase, Typography} from '@material-ui/core';

const ImageButton = (props) => {
  return (
    <ButtonBase>
      {props.image}
      <Typography>
        {props.title}
      </Typography>
    </ButtonBase>
  );
};

export default ImageButton;