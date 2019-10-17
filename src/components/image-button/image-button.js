import React from 'react';
import { ButtonBase, Typography } from '@material-ui/core';
import { ImageBlock } from './image-button.styled'

const ImageButton = (props) => {
  return (
    <ButtonBase>
      <ImageBlock>
          {props.image}
          <Typography>
            {props.title}
          </Typography>
     </ImageBlock>
    </ButtonBase>
  );
};

export default ImageButton;