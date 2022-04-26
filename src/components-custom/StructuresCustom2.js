import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
<section style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: 'calc(100vh - 65px)'}}>
  <Container maxWidth="md">
    <Typography variant="h3" component="h3" gutterBottom={true}>Stronger Together</Typography>
    <Typography variant="body" component="h3" gutterBottom={true}>Node Nation Membership NFT holders benefit from reflections from the treasury. See our  <Link href="#" color="primary">whitepaper</Link> for more information.</Typography>
  </Container>
</section>
  );
}