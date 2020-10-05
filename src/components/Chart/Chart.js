import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { Typography } from '@material-ui/core';


import styles from './Chart.module.css';

class Chart extends Component{
  render(){
    const cases = this.props.cases;
    const deaths = this.props.deaths;
    const recoveries = this.props.recoveries;
    
    const globalBarChart = (
      cases ? (
        <Bar 
        data={ {
          labels : ['Cases', 'Recovered', 'Deaths'],
          datasets : [{
            label : 'People',
            backgroundColor : ['#5393ff', '#33eb91', '#ff4569'],
            data : [cases, recoveries, deaths]
          }]
          } }
          options = { {
            legend : { display : false }
          } }
        />
      ) : null
    );

    const countryData = this.props.countryData;

    const barChart = (
      countryData.cases ? (
        <Bar 
          data={ {
            labels : ['Cases', 'Recovered', 'Deaths'],
            datasets : [{
              label : 'People',
              backgroundColor : ['#5393ff', '#33eb91', '#ff4569'],
              data : [countryData.cases, countryData.total_recovered, countryData.deaths]
            }]
          } }
          options = { {
            legend : { display : false },
            title : { display : true, text : `${countryData.country_name}`}
          } }
        />
      ) : null
    ); 

    return(
      <div className={ styles.container } >
        <div className={styles.country}>
          { countryData ? barChart : null }
        </div>

        <div classname={styles.global}>
          <Typography align="center" variant="h5" color="textSecondary"> Global </Typography>
          { cases ?  globalBarChart : null }
        </div>
      </div>
    )
  }
}

export default Chart;