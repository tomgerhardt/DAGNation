import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  doublePanelCont:{
    height: '300px',
  },
  panelDetail:{
    backgroundColor:  'black',
    opacity:'70%',
    borderRadius:'16px',
    height: '100%',
    width: '47%',
    display:'inline-block',
      marginTop:'20px',
        marginRight:'20px'
  },
  lineBreak:{
    height:'2px',
    width:'100%',
    backgroundColor:'white'
  },
  claimButton:{
    display:'block',
    
  },
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
<Container maxWidth="md" mt={4} className={classes.doublePanelCont}>
  <Box className={classes.panelDetail} p={6}>
    <Typography className={classes.nodeMeterTitleCont} variant="h3" component="h2">My Rewards</Typography>
    <Box className={classes.lineBreak}></Box>
    <Typography className={classes.nodeMeterTitleCont} variant="h3" component="h2">124.23</Typography>
    <Typography className={classes.nodeMeterTitleCont} variant="body" color="secondary">$BUSD</Typography>
    <Button className={classes.claimButton} variant="contained" size="large">Claim</Button>
  </Box>
  <Box className={classes.panelDetail} p={6}>
    <Typography className={classes.nodeMeterTitleCont} variant="h3" component="h2">My Stake</Typography>
    <Box className={classes.lineBreak}></Box>
    <Typography className={classes.nodeMeterTitleCont} variant="h3" component="h2">2,450</Typography>
    <Typography className={classes.nodeMeterTitleCont} variant="body" color="secondary">2.3% of Total</Typography>


  </Box>
</Container>
  );
}