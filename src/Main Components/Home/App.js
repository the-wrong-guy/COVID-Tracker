import React from 'react';
import './App.css';
import {CssBaseline,Typography} from '@material-ui/core';
import CountryCard from './components/Country Data/country';
import StateCard from './components/State Data/state'
import ComboBox from './components/State Data/options'
import Footer from './components/Footer/footer'
import Daily from './components/State Wise Daily/daily'
import DoughnutChart from './components/Doughnut Chart/doughnut'


import { StateData } from './api/api'
import PaperBar from './components/Paper Bar/paperBar';


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
    // console.log(data);
    return (
      <div className="App">
        <CssBaseline/>
        <CountryCard/>
        <PaperBar/>
        <Typography style={{fontWeight : "550",marginTop:"50px",fontSize:"20px"}} align="center">State Wise Data</Typography>
        <ComboBox handleStateChange={this.handleStateChange}/>
        <StateCard data={data} states={states}/>
        <Daily/>
        <DoughnutChart/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
