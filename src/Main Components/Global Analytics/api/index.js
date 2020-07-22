import axios from 'axios'


var url = 'https://covid19.mathdro.id/api';

export const dataApi = async (country) => { 
  let changeableUrl = url;

  if(country){
    changeableUrl = `${url}/countries/${country}`
  }

 try {
   const { data : { confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl)
   
   return{ confirmed,recovered,deaths,lastUpdate }

 }catch(error){console.log(error)}
}



export async function fetchDailyData() {
    
    try{
        let response = await fetch(`${url}/daily`);
        return await response.json()
        .then(data=>{
            const modifiedData = data.map((dailyData)=>({
                confirmed : dailyData.confirmed.total,
                deaths : dailyData.deaths.total,
                recovered : dailyData.recovered.total,
                date : dailyData.reportDate,
            }))
            return modifiedData;
        });
      }catch(err){
        console.error(err);
}
}

export async function  fetchCountries() {
   
        let response =await fetch(`${url}/countries`)
        return await response.json()
        .then(data=>{
          let country = data.countries;
          const eachCountryName = country.map(element=> element.name);
          return eachCountryName;
          // console.log(eachCountryName)
        })
        .catch(error=>console.log(error))
    
}



// const res =  fetch('https://covid19.mathdro.id/api/countries')
//         .then(response=>response.json())
//         .then(data=>{
//           let country = data.countries;
//           return country.map(element=> element.name)
//         })

//         console.log(res);





// fetch(url)
// .then(res=>res.json())
// .then(data => {
//    const confirmed = data.confirmed;
//    const recovered = data.recovered;
//    const deaths = data.deaths;
//    const lastUpdate = data.lastUpdate;

//     return {confirmed, recovered, deaths, lastUpdate}
// })