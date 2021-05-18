import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import HomeCard from './HomeCard.js'

export default function SimpleContainer() {
  return (
    <React.Fragment>
        <HomeCard />          
    </React.Fragment>
  );
}