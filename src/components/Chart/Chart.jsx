import React, { useState, useEffect } from 'react';
// import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';
// import { fetchDailyData } from '../../api';

const Chart = () => {
  /*
  const [ dailyData, setDailyData ] = useState([]);

  useEffect( () => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    }

    console.log('daily data');
    console.log(dailyData);

    fetchAPI();
  }, [dailyData]);

  const lineChart = (
    dailyData.length || 'undefined'
    ? (
      <Line
        data = { 
          {
            labels : dailyData.map(({ date }) => date),
            datasets : [ {
              data : dailyData.map(({ confirmed }) => confirmed),
              label : 'Infected',
              borderColor : '#5393ff',
              fill : true
            }, {
              data : dailyData.map(({ deaths }) => deaths),
              label : 'Deaths',
              borderColor : '#ff4569',
              fill : true
            } ]
          } 
        }
      />
      ) : null
  );
*/
  return(
    <div className={styles.container}>
      <h1>Chart</h1>
    </div>
  )
};

export default Chart;