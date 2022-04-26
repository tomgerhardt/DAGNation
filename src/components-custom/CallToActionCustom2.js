import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  heroTitle:{
    textTransform: 'uppercase',
  },
  panel:{
    backgroundColor:  'black',
    opacity:'70%',
    borderRadius:'16px'
  },
    
    
  nodeMeterTitleCont:{
    display:'inline',
  },
  nodeMeterCont:{
    display:'block',
 	position:'relative',  
      height:'100px',
  },
  nodeMeterBK:{
    position:'absolute',
    width:'100%',
    height:'60px',
    backgroundColor:'#111',
    border:'2px solid',
    borderRight:'0',
    borderColor:'white',
    borderRadius:'8px',
    borderBottomRightRadius:'0',
    borderTopRightRadius:'0',
  },
  nodeMeterProg:{
    position:'absolute',
    backgroundColor:'red',
    width:'20%',
    height:'56px',
    top:'2px',
    left:'2px',
    borderRadius:'6px',
    borderBottomRightRadius:'0',
    borderTopRightRadius:'0',
  },
    
  nodeMeterTickCont:{
    position:'absolute',
    left:'50%',
    top: '70px',
  },
  nodeMeterTick:{
    position:'absolute',
    width:'2px',
    height:'20px',
    backgroundColor:'white',
      top:'-20px',
        left:'0px'
  }, 
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
<section>
  <Container maxWidth="md" >
    <Box py={8} textAlign="left">
      <Typography className={classes.heroTitle} variant="h3" component="h2" gutterBottom={true}>Accessible softnode ownership</Typography>
      <Typography variant="body" color="secondary">DAGNation provides the opportunity to benefit from the rewrds of node ownership on the Constellation Network. Nodes require 250k $DAG to be staked in them to earn rewards. With DADNation, you can stake as little at .25BNB to participate.</Typography>
    </Box>
  </Container>
  <Container maxWidth="md" mt={4}>
    <Box className={classes.panel} p={6}>

      <Typography className={classes.nodeMeterTitleCont} variant="h3" component="h2">156,230</Typography>
      <Typography className={classes.nodeMeterTitleCont} variant="body" color="secondary">$DAG Staked</Typography>
      <box component="div" className={classes.nodeMeterCont}>
        <box className={classes.nodeMeterBK}></box>
        <box className={classes.nodeMeterProg}></box>

        <box component="div" className={classes.nodeMeterTickCont}>
          <box component="div" className={classes.nodeMeterTick}></box>
          <typography>250k $DAG</typography>
          <typography>(node minimum)</typography>
        </box>
      </box>

      <Typography variant="h3" component="h2">+ Add to Node</Typography>
      <TextField id="outlined-basic" 
        InputProps={{
          startAdornment: <InputAdornment position="start">$BNB</InputAdornment>,
        }}
        placeholder=".25 Min" variant="outlined" />
      <Button variant="contained" size="large">Add</Button>

      <Typography display='block' variant="body" color="secondary">Staked $BNB is swapped for $DAG and locked into a Constellation Network Softnode. Staked value will not be availible for withdrawl until Constellation Network Mainnet launches in Q3 2022, and at the end of the Softnode Period. If at least 250,000 $DAG is staked before the locking period, produced rewards will be split amoung stakers per their percentage of the node.</Typography>
    </Box>
  </Container>
</section>
  );
}