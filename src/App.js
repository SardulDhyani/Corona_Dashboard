import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';

import Cards from './components/Cards/Cards';
import Country from './components/Country/Country';
import Chart  from './components/Chart/Chart';
import logo from './covid-preloader.png';

import styles from './App.module.css';

import { fetchData } from './api';

import coronaImage from './images/covid.png';

class App extends Component {

  state = {
    isLoading : true,
    index : 0,
    countries_names : [],
    countries_stat : [],
    statistic_taken_at : ''
  }
  
  handleCountryChange = ( index ) => {
    this.setState({index : index});
  }

  componentDidMount(){
    fetchData()
    .then( ({ countries_stat, world_total, statistic_taken_at }) => {
      const world_data = {
        country_name : 'World',
        cases : parseInt(world_total.total_cases.replace(/,/g, '')),
        deaths : parseInt(world_total.total_deaths.replace(/,/g, '')),
        total_recovered : parseInt(world_total.total_recovered.replace(/,/g, ''))
      };

      const countries_data = countries_stat.map( data => {
        return {
          country_name : data.country_name,
          cases : parseInt(data.cases.replace(/,/g, '')),
          deaths : parseInt(data.deaths.replace(/,/g, '')),
          total_recovered : parseInt(data.total_recovered.replace(/,/g, ''))
        }
      } );

      countries_data.unshift(world_data);

      const countries_names = countries_data.map( data => data.country_name);

      this.setState({countries_stat : countries_data, statistic_taken_at : statistic_taken_at, isLoading : false, countries_names : countries_names })
      
    })
    .catch(err=>{
      console.log(err);
    });    
  }


  render(){
    const theme = createMuiTheme({palette: {type: 'dark'} });
    return(
      this.state.isLoading ?
      <div className={styles.preloader}>
          <img src={logo} className={styles.App_logo} alt="logo" />
      </div> 
      : 
      <div className={styles.container}>
        <ThemeProvider theme={theme}>
          <img className={styles.covidImage}  src={coronaImage} alt="COVID-19 Dashboard" />
          <Cards  cases={this.state.countries_stat[this.state.index].cases} deaths={this.state.countries_stat[this.state.index].deaths} recovered={this.state.countries_stat[this.state.index].total_recovered} lastUpdated={this.state.statistic_taken_at}/>
          <Country country_names={this.state.countries_names} handleCountryChange = {this.handleCountryChange} />
          <Chart countryData={this.state.countries_stat[this.state.index]} />
          
        </ThemeProvider>
          <div className={styles.footer}>
            <a href="https://github.com/SardulDhyani/" target="_blank">
              <span className={styles.name}>Sardul Dhyani</span>
            </a>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <a href="https://github.com/SardulDhyani/" target="_blank">
              <span><GitHubIcon fontSize="small" color="inherit" /></span>
            </a>
            <span>&nbsp;&nbsp;</span>
            <a href="https://www.linkedin.com/in/sardul-dhyani-b66a7916a/" target="_blank">
              <span><LinkedIn fontSize="small" color="inherit" /> </span>
            </a>
          </div>
      </div>
    )
  };

}

export default App;