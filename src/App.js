import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';

import Cards from './components/Cards/Cards';
import Country from './components/Country/Country';
import Chart  from './components/Chart/Chart';

import styles from './App.module.css';

import { fetchData, fetchCountryData } from './api';

import coronaImage from './images/covid.png';

class App extends Component {

  state = {
    total_cases : '',
    total_deaths : '',
    total_recovered : '',
    statistic_taken_at : '',
    countries_names : [],
    country : {}
  }
  
  handleCountryChange = async ( index ) => {
    if(index === 'global'){
      return null;
    } else{
      const country_data = await fetchCountryData(index);
      this.setState({country : country_data});
    }
  }

  componentDidMount(){
    fetchData()
    .then( ({ countries_stat, world_total }) => {
      const country_names = countries_stat.map( c => c.country_name );

      const globalData = {
        country_name : 'Global',
        cases : parseInt(world_total.total_cases.replace(/,/g, '')),
        deaths : parseInt(world_total.total_deaths.replace(/,/g, '')),
        total_recovered : parseInt(world_total.total_recovered.replace(/,/g, ''))
      };

      this.setState({ 
        total_cases : parseInt(world_total.total_cases.replace(/,/g, '')), 
        total_deaths : parseInt(world_total.total_deaths.replace(/,/g, '')), 
        total_recovered : parseInt(world_total.total_recovered.replace(/,/g, '')), 
        statistic_taken_at : world_total.statistic_taken_at,
        country_data : globalData
      });

      this.setState(prevState => ({
        countries_names: country_names
      }));
    })
    .catch(err=>{
      console.log(err);
    });    
  }


  render(){
    const theme = createMuiTheme({palette: {type: 'dark'} });


    console.log(this.state.country);

    return(
      <div className={styles.container}>
        <ThemeProvider theme={theme}>
          <img className={styles.covidImage}  src={coronaImage} alt="COVID-19 Dashboard" />
          <Cards  cases={this.state.total_cases} deaths={this.state.total_deaths} recovered={this.state.total_recovered} lastUpdated={this.state.statistic_taken_at}/>
          <Country country_names={this.state.countries_names} handleCountryChange = {this.handleCountryChange} />
          <Chart cases={this.state.total_cases} deaths={this.state.total_deaths} recoveries={this.state.total_recovered} countryData={this.state.country} />
          
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