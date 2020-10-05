import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Cards from './components/Cards/Cards';
import Country from './components/Country/Country';
// import Chart  from './components/Chart/Chart';

import styles from './App.module.css';

import { fetchData } from './api';

import coronaImage from './images/covid.png';

class App extends Component {

  state = {
      total_cases : '',
      total_deaths : '',
      total_recovered : '',
      statistic_taken_at : '',
      countries_names : []
    }
  
  componentDidMount(){
  
      fetchData()
      .then( ({ countries_stat, world_total }) => {
        const country_names = countries_stat.map( c => c.country_name );
        console.log(country_names);

        this.setState({ 
          total_cases : parseInt(world_total.total_cases.replace(/,/g, '')), 
          total_deaths : parseInt(world_total.total_deaths.replace(/,/g, '')), 
          total_recovered : parseInt(world_total.total_recovered.replace(/,/g, '')), 
          statistic_taken_at : world_total.statistic_taken_at,
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

    console.log(this.state.countries_names);
    const theme = createMuiTheme({palette: {type: 'dark'} });

    
    return(
      <div className={styles.container}>
        <ThemeProvider theme={theme}>
          <img className={styles.covidImage}  src={coronaImage} alt="COVID-19 Dashboard" />
          <Cards  cases={this.state.total_cases} deaths={this.state.total_deaths} recovered={this.state.total_recovered} lastUpdated={this.state.statistic_taken_at}/>
          <Country country_names={this.state.countries_names} />
        </ThemeProvider>
      </div>
    )
  };
  
}

export default App;