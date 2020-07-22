import React from 'react';
import './App.css';
import {CssBaseline,Typography} from '@material-ui/core';
import CountryCard from './components/Country Data/country';
import StateCard from './components/State Data/state'
import Chart from './components/Country Chart/countryLineChart'
import ComboBox from './components/State Data/options'
import Footer from './components/Footer/footer'
import Daily from './components/State Wise Daily/daily'
import Test from './components/Test per 1000/test'


import { StateData } from './api/api'


class Home extends React.Component{

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
        <Typography style={{fontWeight : "550",marginTop:"50px",fontSize:"20px"}} align="center">State Wise Data</Typography>
        <ComboBox handleStateChange={this.handleStateChange}/>
        <StateCard data={data} states={states}/>
        <Chart/>
        <Daily/>
        <Test/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
