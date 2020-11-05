import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

class Chart extends Component{
  render(){
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
          { barChart }
        </div>
      </div>
    )
  }
}

export default Chart;