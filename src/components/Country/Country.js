import React, { Component } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './Country.module.css';

class Country extends Component {
  // state = {
  //   country_name : []
  // };

  // async componentDidMount(){
  //   /*
  //   fetchCountries()
  //   .then(countries => {
  //     this.setState({country_name: countries});
  //   });
  //   */
  //   console.log('component did mount called');
  //   const countries = await fetchCountries();
  //   await this.setState({country_name:countries});
  // }

  render(){
    // let countries_array = [];
    console.log('Country.js render');
    
    // const countries = this.props.countries;
    // countries_name = countries.map( (country) =>{
    //   return country.country_name;
    // });
    // console.log(Object.entries(countries));
    // console.log(this.state.country_name);
    console.log(this.props.country_names);
    // console.log(Object.entries(countries));
    // countries_array = Object.entries(countries).map( c => {
    //   console.log(c.country_name);
    //   return c.country_name;
    // });

    // console.log(countries_array);
    // console.log(typeof(countries_array));
    return(
      <FormControl className={styles.formControl}>
       <NativeSelect>
         <option value="global">Global</option>
       </NativeSelect>
     </FormControl>
    );
  };
}

// const Country = () => {


//   const [ fetchedCountries, setFetchedCountries ] = useState([]);

//   useEffect(() => {
//     const fetchAPI = async () => {
//       setFetchedCountries(await fetchCountries);
//     }

//     fetchAPI();
//   }, [setFetchedCountries]);

//   console.log('Country.jsx');
//   console.log(fetchedCountries);

//   return(
//     <FormControl className={styles.formControl}>
//       <NativeSelect>
//         <option value="global">Global</option>
//       </NativeSelect>
//     </FormControl>
//   )
// };

export default Country;