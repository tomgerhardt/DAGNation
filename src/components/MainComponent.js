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

import { useEthers, AvalancheTestnet, useCall, useContractFunction } from "@usedapp/core"
import { utils } from 'ethers'
import DAGNationABI from "../DAGNationABI.json"
import { Contract } from '@ethersproject/contracts'
import { useState } from "react"



//setup smart contract interface
const DAGNationAddress = '0x6FB1bE7acf35b116bB97144c4eAb01EC0F80839A'
const DAGNInterface = new utils.Interface(DAGNationABI)
const contract = new Contract(DAGNationAddress, DAGNInterface)

const useStyles = makeStyles((theme) => ({
  heroTitle:{
    textTransform: 'uppercase',
  },
  panel:{
    backgroundColor: 'rgb(0,0,0,70%)',
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
    backgroundColor:'#1bb3be',
    
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
    doublePanelCont:{
      height: '340px',
      paddingTop: '20px'
    },
    doublePanel:{
        width:'50%',
        display:'inline-block',
        height:'100%'
    },
    panelDetail:{
      backgroundColor:  'rgb(0,0,0,70%)',
      borderRadius:'16px',
      height: '100%',
      width: '100%',
      display:'inline-block',
    },
    lineBreak:{
      height:'2px',
      width:'100%',
      backgroundColor:'white'
    },
    claimButton:{
      display:'block',
      
    },
    panelCont:{
    height: '300px',
      marginTop:'40px',
    },
      panel:{
      backgroundColor:  'rgb(0,0,0,70%)',
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






const RewardsComponent = () => {
    
    const classes = useStyles();
    
    const { account } = useEthers()
    const isConnected = account !== undefined
    
    //send claim write to contract
    const { state, send } = useContractFunction(contract, 'claimBusd', { transactionName: 'Claim' })
    const { status } = state
    const writeClaimBUSD = () => {
        send()
    }
    
    //grab wallet rewards amount
    function getRewardsAmount() {
       const { value, error } =
           useCall(
               {
                   contract: contract, // instance of called contract
                   method: 'getHolderBusdAmount', // Method to be called
                   args: [account], // Method arguments - address to be checked
               }
           ) ?? {};
       if (error) {
           console.error(error.message)
           return undefined
       }
       return value?.[0].toString()
    }
    const rewardsAmount = Math.trunc( getRewardsAmount()  / 1000000000000000000 )
                           
    //grab wallet staked amount
    function getStakedAmount() {
      const { value, error } =
          useCall(
              {
                  contract: contract, // instance of called contract
                  method: 'getHolderAmountInPool', // Method to be called
                  args: [account], // Method arguments - address to be checked
              }
          ) ?? {};
      if (error) {
          console.error(error.message)
          return undefined
      }
      return value?.[0].toString()
    }
    const stakedAmount = getStakedAmount()
    const stakedPercentage = 0
                                     
                                     
    //grab wallet waiting amount
    function getWaitingAmount() {
    const { value, error } =
       useCall(
           {
               contract: contract, // instance of called contract
               method: 'getHolderWaitingAmount', // Method to be called
               args: [account], // Method arguments - address to be checked
           }
       ) ?? {};
    if (error) {
       console.error(error.message)
       return undefined
    }
    return value?.[0].toString()
    }
    const waitingAmount = getWaitingAmount()
    
    return (
        <Container maxWidth="md" mt={4} className={classes.doublePanelCont}>
            <Box className={classes.doublePanel} style={{paddingRight:'10px'}}>
                <Box className={classes.panelDetail} p={6}>
                <Typography className={classes.nodeMeterTitleCont} variant="h3" component="h2">My $DAG</Typography>
                <Box className={classes.lineBreak}></Box>
                <Box mt={2}>
                    <Box style={{display:'inline-block', marginRight:"5px"}}><Typography className={classes.nodeMeterTitleCont} variant="h3" component="h2">{waitingAmount}</Typography></Box>
                    <Box style={{display:'inline-block'}}>
                        <Box><Typography className={classes.nodeMeterTitleCont} variant="body" color="primary">DAG Queued</Typography></Box>
                        <Box><Typography className={classes.nodeMeterTitleCont} variant="body" color="primary">for next epoch</Typography></Box>
                    </Box>
                </Box>
                <Box mt={1}>
                    <Box style={{display:'inline-block', marginRight:"5px"}}><Typography className={classes.nodeMeterTitleCont} variant="h3" component="h2">{stakedAmount}</Typography></Box>
                    <Box style={{display:'inline-block'}}>
                        <Box><Typography className={classes.nodeMeterTitleCont} variant="body" color="primary">DAG Staked</Typography></Box>
                        <Box><Typography className={classes.nodeMeterTitleCont} variant="body" color="primary">on node</Typography></Box>
                    </Box>
                </Box>
                </Box>
            </Box>
            <Box className={classes.doublePanel} style={{paddingLeft:'10px'}}>
                <Box className={classes.panelDetail} p={6}>
                    <Typography className={classes.nodeMeterTitleCont} variant="h3" component="h2">My Rewards</Typography>
                    <Box className={classes.lineBreak}></Box>
                    <Box mt={2}>
                        <Typography className={classes.nodeMeterTitleCont} variant="h3" component="h2">{rewardsAmount}</Typography>
                      <Typography className={classes.nodeMeterTitleCont} variant="body" color="primary">$BUSD</Typography>
                    </Box>
                    <Box mt={1}>
                        <Box style={{display:'inline-block'}}><Button className={classes.claimButton} variant="contained" size="large" onClick={() => writeClaimBUSD()}>Claim</Button></Box>
                        
                    </Box>
                </Box>
            </Box>
            
        
        </Container>
    )
}






const AdminComponent = () => {
    
    const classes = useStyles();
    
    const { account } = useEthers()
    const isConnected = account !== undefined
    
    //see if wallet is admin
    function getAdminStatus() {
       const { value, error } =
           useCall(
               {
                   contract: contract, // instance of called contract
                   method: 'checkAdmin', // Method to be called
                   args: [account], // Method arguments - address to be checked
               }
           ) ?? {};
       if (error) {
           console.error(error.message)
           return false
       }
       return value?.[0].toString()
    }
    const isAdmin = getAdminStatus()

    return (
            <div>
                {isAdmin===true ?
                <Container maxWidth="md" mt={4} className={classes.panelCont}>
                <Box className={classes.panel} p={6}>
                  <Typography className={classes.nodeMeterTitleCont} variant="h3" component="h2">Admin</Typography>
                  <Box className={classes.lineBreak}></Box>
                </Box>
                </Container>
        : <div style={{minHeight:"200px"}}></div> }
            </div>
    )
}






export default function Component(props) {
  const classes = useStyles();
    
    const meterWidth = Object.assign({wid:'0%'});
    
    const { account } = useEthers()
    const isConnected = account !== undefined
    
    
    
    //send invest write to contract
    const { state, send} = useContractFunction(contract, 'invest', { transactionName: 'Invest' })
    const { status } = state
    const [investBNBamount, setInvestBNBamount] = useState('')
    const writeInvestBNB = () => {
        send({ value: utils.parseEther(investBNBamount) })
    }
    
    
    
    //functions to grab data from contract and update interface
    function getDAGamount() {
        const { value, error } =
            useCall(
                {
                    contract: contract, // instance of called contract
                    method: 'getTotalDag', // Method to be called
                    args: [], // Method arguments - address to be checked for power
                }
            ) ?? {};
        if (error) {
            console.error(error.message)
            return undefined
        }
        //update dag meter
    
        const meterPerc = (value / 250000)
        Object.assign(meterWidth, {wid:meterPerc*50+'%'} )
       return value?.[0].toString()
    }
    const stakedDAGamount = getDAGamount()
    const meterBar = React.createRef()

                           
                           
  return (
<section>
  <Container maxWidth="md" >
          <Box px={6} pt={8} pb={6} textAlign="left">
      <Typography className={classes.heroTitle} variant="h3" component="h2" gutterBottom={true}>Accessible softnode ownership</Typography>
      <Typography variant="body" color="primary">DAGNation provides the opportunity to benefit from the rewrds of node ownership on the Constellation Network. Nodes require 250k $DAG to be staked in them to earn rewards. With DAGNation, you can stake as little at .25 $BNB to participate.</Typography>
    </Box>
  </Container>
  <Container maxWidth="md" mt={4}>
    <Box className={classes.panel} p={6}>

      <Typography className={classes.nodeMeterTitleCont} variant="h3" component="h2">{stakedDAGamount}</Typography>
      <Typography className={classes.nodeMeterTitleCont} variant="body" color="primary"> $DAG Staked</Typography>
      <box component="div" className={classes.nodeMeterCont}>
        <box className={classes.nodeMeterBK}></box>
          <box className={classes.nodeMeterProg} style={{width: meterWidth.wid}}></box>

        <box component="div" className={classes.nodeMeterTickCont}>
          <box component="div" className={classes.nodeMeterTick}></box>
          <typography>250k $DAG</typography>
          <typography>(node minimum)</typography>
        </box>
      </box>

          <Box mt={4}><Typography variant="h3" component="h2">Buy $DAG and Stake</Typography></Box>
          <Box my={2}>
          <TextField style={{marginRight:"20px", top:"2px"}} size="small" id="outlined-basic"
        InputProps={{
          startAdornment: <InputAdornment position="start">$BNB</InputAdornment>,
        }}
          placeholder=".25 Min" variant="outlined" onChange={event => setInvestBNBamount(event.target.value)} />
          
          
          <Button variant="contained" size="large" onClick={() => writeInvestBNB()}>Buy and Stake</Button>
          
          </Box>
      <Typography display='block' variant="body" color="primary">Your $BNB is swapped for $DAG and put into a queue to wait until the next Softnode epoch starts, where it will be staked in a Constellation Network Softnode. If at least 250,000 $DAG is staked before the epoch starts, produced rewards will be split among stakers per their percentage of the node.</Typography>
    </Box>
  </Container>
    
    <RewardsComponent />
    <AdminComponent />
    
</section>
  );
}
                          
