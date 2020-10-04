import axios from 'axios';

export const fetchData = async () => {
  
  try{
    const { data /* : { world_total : { active_cases, new_cases, serious_critical, total_cases, total_deaths, total_recovered, statistic_taken_at } }*/ } = await axios({
        "method":"GET",
        "url":"https://corona-virus-world-and-india-data.p.rapidapi.com/api",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"corona-virus-world-and-india-data.p.rapidapi.com",
        "x-rapidapi-key":"5a5d42f21dmshba59072f1280ee2p136991jsn8456bd564f95",
        "useQueryString":true
      }
    });

    /*
    const modifiedData = {
      active_cases : parseInt(active_cases.replace(/,/g, '')) ,
      new_cases : parseInt(new_cases.replace(/,/g, '')),
      serious_critical : parseInt(serious_critical.replace(/,/g, '')),
      total_cases : parseInt(total_cases.replace(/,/g, '')),
      total_deaths : parseInt(total_deaths.replace(/,/g, '')),
      total_recovered : parseInt(total_recovered.replace(/,/g, '')),
      statistic_taken_at
    };
*/
    return data;
    
  } catch(error){ 
    console.log(error);
  }
};