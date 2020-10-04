import React, { Component }from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

class Cards extends Component{
  render(){
    const theme = createMuiTheme({palette: {type: 'dark'} });
    
    return(
      <div className={styles.container}>
        <ThemeProvider theme={theme}>

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
        </ThemeProvider>
      </div>
    )
  }
};


/*
  state = {
    total_cases : '',
    total_recovered : '',
    total_deaths : '',
    statistic_taken_at : ''
  };

  componentDidMount(){
    
    
    this.setState({
      total_cases : parseInt(this.props.data.total_cases.replace(/,/g, '')),
      total_recovered : parseInt(this.props.data.total_recovered.replace(/,/g, '')),
      total_deaths : parseInt(this.props.data.total_deaths.replace(/,/g, '')),
      statistic_taken_at : this.props.data.statistic_taken_at
    });
  }
  
  render(){
    const theme = React.useMemo(() => createMuiTheme({palette: {type: 'dark'} }) );
    
    if(!this.props.data.active_cases){
      return 'Loading...';
    }

    return(
      <div className={styles.container}>
      <ThemeProvider theme={theme}>

        <Grid container style={{marginTop : "10px"}} spacing={1} direction="row" justify="center" alignItems="center">

          <Grid item component={Card} spacing={3} xs={12} md={3} className={ cx(styles.card, styles.infected) }>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Total Cases</Typography>
              <Typography variant="h5"> 
                <CountUp start={0} end={ this.total_cases } duration={1} separator="," /> 
              </Typography>
              <Typography color="textSecondary"> { new Date(this.statistic_taken_at).toDateString() } </Typography>
              <Typography variant="body2">Number of total Cases of covid</Typography>
            </CardContent>
          </Grid>

          <Grid item component={Card} spacing={3} xs={12} md={3} className={ cx(styles.card, styles.recovered) }>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Total Recovered</Typography>
              <Typography variant="h5"> 
                <CountUp start={0} end={ this.total_recovered } duration={1} separator="," /> 
              </Typography>
              <Typography color="textSecondary"> { new Date(this.statistic_taken_at).toDateString() } </Typography>
              <Typography variant="body2">Number of total Recoveries of covid</Typography>
            </CardContent>
          </Grid>
        
          <Grid item component={Card} spacing={3} xs={12} md={3} className={ cx(styles.card, styles.deaths) }>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Total Deaths</Typography>
              <Typography variant="h5">
                <CountUp start={0} end={ this.total_deaths } duration={1} separator="," /> 
              </Typography>
              <Typography color="textSecondary"> { new Date(this.statistic_taken_at).toDateString() } </Typography>
              <Typography variant="body2">Number of total deaths by covid19</Typography>
            </CardContent>
          </Grid>

        </Grid>

      </ThemeProvider>
    </div>
    )
  }
*/



















// const Cards = ({ data /*:{ active_cases, new_cases, serious_critical, total_cases, total_deaths, total_recovered, statistic_taken_at } */}) => {

//   const theme = React.useMemo(() => createMuiTheme({palette: {type: 'dark'} }) );

  /*
  if(!active_cases){
    return 'Loading...';
  }
*/
/*
  const otherData = `
  <Grid container style={{marginTop : "10px"}} spacing={1} direction="row" justify="center" alignItems="center">

  <Grid item component={Card} spacing={3} xs={12} md={3} className={ cx(styles.card, styles.infected) }>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>Active Cases</Typography>
      <Typography variant="h5">
        <CountUp start={0} end={ active_cases } duration={1} separator="," /> 
      </Typography>
      <Typography color="textSecondary"> { new Date(statistic_taken_at).toDateString() } </Typography>
      <Typography variant="body2">Number of total active cases of covid</Typography>
    </CardContent>
  </Grid>

  <Grid item component={Card} spacing={3} xs={12} md={3} className={ cx(styles.card, styles.infected) }>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>New Cases</Typography>
      <Typography variant="h5">
        <CountUp start={0} end={ new_cases } duration={1} separator="," /> 
      </Typography>
      <Typography color="textSecondary"> { new Date(statistic_taken_at).toDateString() } </Typography>
      <Typography variant="body2">Number of New cases of covid</Typography>
    </CardContent>
  </Grid>

  <Grid item component={Card} spacing={3} xs={12} md={3} className={ cx(styles.card, styles.infected) }>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>Serious Critical</Typography>
      <Typography variant="h5">
        <CountUp start={0} end={ serious_critical } duration={1} separator="," /> 
      </Typography>
      <Typography color="textSecondary"> { new Date(statistic_taken_at).toDateString() } </Typography>
      <Typography variant="body2">Number of New cases of covid</Typography>
    </CardContent>
  </Grid>

</Grid>
  `;
  */
  // return(
  //   <div>
  //     <h1>Cards</h1>
  //   </div>
    /*
    
    <div className={styles.container}>
      <ThemeProvider theme={theme}>

        <Grid container style={{marginTop : "10px"}} spacing={1} direction="row" justify="center" alignItems="center">

          <Grid item component={Card} spacing={3} xs={12} md={3} className={ cx(styles.card, styles.infected) }>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Total Cases</Typography>
              <Typography variant="h5"> 
                <CountUp start={0} end={ total_cases } duration={1} separator="," /> 
              </Typography>
              <Typography color="textSecondary"> { new Date(statistic_taken_at).toDateString() } </Typography>
              <Typography variant="body2">Number of total Cases of covid</Typography>
            </CardContent>
          </Grid>

          <Grid item component={Card} spacing={3} xs={12} md={3} className={ cx(styles.card, styles.recovered) }>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Total Recovered</Typography>
              <Typography variant="h5"> 
                <CountUp start={0} end={ total_recovered } duration={1} separator="," /> 
              </Typography>
              <Typography color="textSecondary"> { new Date(statistic_taken_at).toDateString() } </Typography>
              <Typography variant="body2">Number of total Recoveries of covid</Typography>
            </CardContent>
          </Grid>
        
          <Grid item component={Card} spacing={3} xs={12} md={3} className={ cx(styles.card, styles.deaths) }>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Total Deaths</Typography>
              <Typography variant="h5">
                <CountUp start={0} end={ total_deaths } duration={1} separator="," /> 
              </Typography>
              <Typography color="textSecondary"> { new Date(statistic_taken_at).toDateString() } </Typography>
              <Typography variant="body2">Number of total deaths by covid19</Typography>
            </CardContent>
          </Grid>

        </Grid>

      </ThemeProvider>
    </div>
    */
//   )
// };

export default Cards;