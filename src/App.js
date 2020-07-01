import React from 'react';
import './App.css';
import {CssBaseline} from '@material-ui/core';
import CountryCard from './components/Country Data/country';
import StateCard from './components/State Data/state'
import  BackToTop from './components/Menu Bar/menu'
import Chart from './components/Country Chart/countryLineChart'
import ComboBox from './components/State Data/options'
import Footer from './components/Footer/footer'
import Map from './components/Map/map' 

import { StateData } from './api/api'


class App extends React.Component{

  state = {
    data : {},
    states: '',
}

async componentDidMount () {
    const  dataFromApi = await StateData();
    this.setState({ data: dataFromApi})
}

handleStateChange = async(states) => {
    const  fetchedData = await StateData(states);
    
    this.setState({data: fetchedData, states: states})
    
}
  render(){
    const {data, states} = this.state;
    console.log(data);
    return (
      <div className="App">
        <CssBaseline/>
        
        <CountryCard/>
        <Chart/>
        <ComboBox handleStateChange={this.handleStateChange}/>
        <StateCard data={data} states={states}/>
        <Map/>
        <Footer/>
      </div>
    );
  }
}

export default App;
