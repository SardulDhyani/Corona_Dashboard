import React, { Component } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './Country.module.css';

class Country extends Component {

  render(){
    return(
      <FormControl className={styles.formControl}>
       <NativeSelect defaultValue="" onChange={ (e) => { this.props.handleCountryChange(e.target.value) } }>
         { this.props.country_names.map( (c, i) => <option key={i} value={i}>{c}</option>) }
       </NativeSelect>
     </FormControl>
    );
  };

}

export default Country;