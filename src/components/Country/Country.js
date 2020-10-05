import React, { Component } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './Country.module.css';

class Country extends Component {

  render(){
    return(
      <FormControl className={styles.formControl}>
       <NativeSelect>
         <option value="global">Global</option>
         { this.props.country_names.map( (c, i) => <option key={i} value={c}>{c}</option>) }
       </NativeSelect>
     </FormControl>
    );
  };
  
}

export default Country;