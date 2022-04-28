import React from 'react';
import { useEthers } from "@usedapp/core";
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  toolbar:{
    justifyContent: 'center',

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  linkBrand: {
    flexGrow: 1,
    display: "flex",
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    }
  },
  linkBrandSmall: {
    display: 'none',
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
    }
  },
  
  navButtonSpan: {
	fontWeight: 'bold'
  },
  
  navIcon:{
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    }
  }
}
));

export default function Component(props) {
    const classes = useStyles();
    const { account, activateBrowserWallet, deactivate, chainId } = useEthers()
    const isConnected = account !== undefined
        
    return (
    <AppBar position="static" >
      <Container maxWidth="md">
        <Toolbar disableGutters='true' className={classes.toolbar}>
          <Link href="#" variant="h5" color="inherit" underline="none" className={classes.linkBrand}>
            <img src="https://static.shuffle.dev/uploads/files/7a/7a59a62bfc483385e4c70be7be0fe12f4fc1c2ac/NN-Logo-Text.svg" alt="" height="40" />
          </Link>
          <Link href="#" variant="h5" color="inherit" underline="none" className={classes.linkBrandSmall}>
            <img src="https://static.shuffle.dev/uploads/files/7a/7a59a62bfc483385e4c70be7be0fe12f4fc1c2ac/NN-Logo-Text.svg" alt="" height="40" />
          </Link>
          <Button href="/" size="small" variant="outlined">Whitepaper</Button>
              {account && <label className="h6 heading6">{account.slice(0, 4)}...{account.slice(-4)}</label>}
              {
                  isConnected ? (
                      <Button href="/" size="small" variant="contained" onClick={deactivate}>Disconnect</Button>
                  ) : (
                       <Button href="/" size="small" variant="contained" onClick={() => activateBrowserWallet()}>Connect</Button>
                  )
              }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
