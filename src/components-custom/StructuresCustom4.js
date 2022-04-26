import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    panelCont:{
   height: '300px',
      marginTop:'40px',
  },
  	panel:{
      backgroundColor:  'black',
      opacity:'70%',
      borderRadius:'16px',
      height: '100%',
     
  },
  lineBreak:{
    height:'2px',
    width:'100%',
    backgroundColor:'white'
  },
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
<Container maxWidth="md" mt={4} className={classes.panelCont}>
  <Box className={classes.panel} p={6}>
    <Typography className={classes.nodeMeterTitleCont} variant="h3" component="h2">Admin</Typography>
    <Box className={classes.lineBreak}></Box>
  </Box>

</Container>
  );
}