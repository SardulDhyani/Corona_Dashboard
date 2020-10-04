import React, { Component } from 'react';

import Cards from './components/Cards/Cards';
import Country from './components/Country/Country';

// import { Charts } from './components';
import styles from './App.module.css';

import { fetchData } from './api';

import coronaImage from './images/covid.png';

class App extends Component {

  state = {
      total_cases : '',
      total_deaths : '',
      total_recovered : '',
      statistic_taken_at : '',
      countries_names : ''
    }
  

    // this.setAllState = this.fetchAll();
    // super(props);
    // console.log('[App.js] constructor');
  
  
  componentDidMount(){
  
      fetchData()
      .then( ({ countries_stat, world_total }) => {
        // console.log(countries_stat);
        
        // const country_names = countries_stat.map( c => c.country_name );
        // console.log(country_names);

        // active_cases: "7,972,147"
        // deaths_per_1m_population: "133.2"
        // new_cases: "48,365"
        // new_deaths: "959"
        // serious_critical: "66,157"
        // statistic_taken_at: "2020-10-04 10:00:01"
        // total_cases: "35,171,534"
        // total_cases_per_1m_population: "4,512"
        // total_deaths: "1,038,487"
        // total_recovered: "26,160,900"
        this.setState({ 
          total_cases : parseInt(world_total.total_cases.replace(/,/g, '')), 
          total_deaths : parseInt(world_total.total_deaths.replace(/,/g, '')), 
          total_recovered : parseInt(world_total.total_recovered.replace(/,/g, '')), 
          statistic_taken_at : world_total.statistic_taken_at,
          countries_name : countries_stat.map( c => c.country_name )
        });
      })
      .catch(err=>{
        console.log(err);
      });
    
  }


  render(){
    /*
    fetchData()
    .then( ({ countries_stat, world_total }) => {
      // console.log(countries_stat);
      
      // const country_names = countries_stat.map( c => c.country_name );
      // console.log(country_names);

      // active_cases: "7,972,147"
      // deaths_per_1m_population: "133.2"
      // new_cases: "48,365"
      // new_deaths: "959"
      // serious_critical: "66,157"
      // statistic_taken_at: "2020-10-04 10:00:01"
      // total_cases: "35,171,534"
      // total_cases_per_1m_population: "4,512"
      // total_deaths: "1,038,487"
      // total_recovered: "26,160,900"
      this.setState =({ 
        total_cases : parseInt(world_total.total_cases.replace(/,/g, '')), 
        total_deaths : parseInt(world_total.total_deaths.replace(/,/g, '')), 
        total_recovered : parseInt(world_total.total_recovered.replace(/,/g, '')), 
        statistic_taken_at : world_total.statistic_taken_at,
        countries_name : countries_stat.map( c => c.country_name )
      });
    })
    .catch(err=>{
      console.log(err);
    });
    */

    // console.log('Current State');
    console.log(this.state.countries_names);

    // <Country country_names={this.state.countries_names} />

    return(
      <div className={styles.container}>
        <img className={styles.covidImage}  src={coronaImage} alt="COVID-19 Dashboard" />
        <Cards  cases={this.state.total_cases} deaths={this.state.total_deaths} recovered={this.state.total_recovered} lastUpdated={this.state.statistic_taken_at}/>
      </div>
    )
  };
}

export default App;