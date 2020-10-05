import axios from 'axios';

export const fetchData = async () => {
  try{
    const { data } = await axios({
        "method":"GET",
        "url":"https://corona-virus-world-and-india-data.p.rapidapi.com/api",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"corona-virus-world-and-india-data.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_SECRET,
        "useQueryString":true
      }
    });

    return data;

  } catch(error){ 
    console.log(error);
  }
};

export const fetchCountryData = async (index) => {
  const i = index;
  try{
    const { data : { countries_stat } } = await axios({
        "method":"GET",
        "url":"https://corona-virus-world-and-india-data.p.rapidapi.com/api",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"corona-virus-world-and-india-data.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_SECRET,
        "useQueryString":true
      }
    });

    console.log(countries_stat[i]);

    const modifiedData = {
      country_name : countries_stat[i].country_name,
      cases : parseInt(countries_stat[i].cases.replace(/,/g, '')),
      deaths : parseInt(countries_stat[i].deaths.replace(/,/g, '')),
      total_recovered : parseInt(countries_stat[i].total_recovered.replace(/,/g, ''))
    }
    return modifiedData;

  } catch(error){ 
    console.log(error);
  }
};