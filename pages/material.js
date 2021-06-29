import React from 'react';
import Typography from '@material-ui/core/Typography';
import '@fontsource/roboto';
import Button from '@material-ui/core/Button';

export default () => {
  return(
    <div>
      <Typography 
      variant = 'h1'
      gutterBottom
      align = 'center'
      color = 'secondary'>
        This is a h1
      </Typography>
      
      <Button
      variant = 'contained'
      color = 'secondary'
      size = 'large'
      href = '/'>
        Go back to homepage
      </Button>
    </div>
    )
}