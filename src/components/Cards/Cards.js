import React, { Component }from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

class Cards extends Component{
  render(){
    return(
      <div className={styles.container}>

          <Grid container style={{marginTop : "10px"}} spacing={1} direction="row" justify="center" alignItems="center">

            <Grid item component={Card} spacing={3} xs={12} md={3} className={ cx(styles.card, styles.infected) }>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>Total Cases</Typography>
                <Typography variant="h5"> 
                  <CountUp start={0} end={ this.props.cases } duration={1} separator="," /> 
                </Typography>
                <Typography color="textSecondary"> { new Date(this.props.lastUpdated).toDateString() } </Typography>
                <Typography variant="body2">Total Cases of COVID-19</Typography>
              </CardContent>
            </Grid>

            <Grid item component={Card} spacing={3} xs={12} md={3} className={ cx(styles.card, styles.recovered) }>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>Total Recovered</Typography>
                <Typography variant="h5"> 
                  <CountUp start={0} end={ this.props.recovered } duration={1} separator="," /> 
                </Typography>
                <Typography color="textSecondary"> { new Date(this.props.lastUpdated).toDateString() } </Typography>
                <Typography variant="body2">Total Recoveries from COVID-19</Typography>
              </CardContent>
            </Grid>
          
            <Grid item component={Card} spacing={3} xs={12} md={3} className={ cx(styles.card, styles.deaths) }>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>Total Deaths</Typography>
                <Typography variant="h5">
                  <CountUp start={0} end={ this.props.deaths } duration={1} separator="," /> 
                </Typography>
                <Typography color="textSecondary"> { new Date(this.props.lastUpdated).toDateString() } </Typography>
                <Typography variant="body2">Total Deaths By COVID-19</Typography>
              </CardContent>
            </Grid>

          </Grid>
          
      </div>
    )
  }
};

export default Cards;