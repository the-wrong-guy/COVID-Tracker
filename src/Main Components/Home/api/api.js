

var url = 'https://api.covid19india.org/data.json';

 export const StateData = async(states) =>{
  let stateName = 'Assam'
  if(states){
    stateName = states;
    console.log("triggered")
  }
  try{
  const response =await fetch(url);
  const data = await response.json();
  const pop = data.statewise;
  const index = pop.findIndex(st => st.state === stateName)
  const statedta = {
      active :pop[index].active,
      confirmed : pop[index].confirmed,
      deaths : pop[index].deaths,
      recovered: pop[index].recovered,
      lastUpdated : pop[index].lastupdatedtime
    }
    return statedta
  }catch(error){console.log(error)}

}



export async function ChartData() {

    try{
        let response = await fetch(`https://api.covid19india.org/data.json`);
        return await response.json()
        .then(data=>{
            const pop = data.cases_time_series
            const modifiedData = pop.map((totalData)=>({
                confirmed : totalData.totalconfirmed,
                deaths : totalData.totaldeceased,
                recovered : totalData.totalrecovered,
                date : totalData.date
            }))
            return modifiedData;
        });
      }catch(err){
        console.error(err);
}
}

export async function options() {
  const response =await fetch(url);
  const data = await response.json();
  const pop = data.statewise.map(st=>st.state);
  return pop
}