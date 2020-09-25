import React from "react";
import { Grid, Paper, Typography} from "@material-ui/core";
import CountUp from 'react-countup';
import styles from './country.module.css'
import cx from 'classnames'
import CountrySkeleton from '../skeletons/CountrySkeleton'
import ChartSkeleton from '../skeletons/ChartSkeleton'
import Chart from '../Country Chart/countryLineChart'
import moment from 'moment';
// import {
//   createMuiTheme,
//   makeStyles,
//   ThemeProvider
// } from "@material-ui/core/styles";

// const theme = createMuiTheme({
//   palette: {
//     type: "dark"
//   }
// });
export default class CountryCard extends React.Component{

        state = {
          loading : true,
          confirmed : [],
          deaths : [],
          recovered : [],
          date : '',
          curTime : new Date().toLocaleString()
        };

        async componentDidMount () {
          const url = 'https://api.covid19india.org/data.json';
          const response = await fetch(url);
          const data = await response.json();
          const pop = data.cases_time_series.pop()
          this.setState({confirmed:pop.totalconfirmed, deaths:pop.totaldeceased, recovered:pop.totalrecovered,date : pop.date, loading:false}) ;
          // console.log(data);
        }

        // spacing deafult value is 8px , so the 3*8=24px width column

        render(){

          const active = this.state.confirmed - this.state.recovered;
          // console.log(active) 

          return (
     
            <div className={styles.container}>
            { this.state.loading || !this.state.confirmed || !this.state.deaths || !this.state.recovered  ? 
              (<React.Fragment>
                <Grid container  justify="space-evenly">
                  <Grid item><CountrySkeleton/></Grid>
                  <Grid item><ChartSkeleton/></Grid>  
                </Grid>  
              </React.Fragment>) : 
              
              (<React.Fragment>
              <Typography style={{fontWeight : "550",marginBottom:"30px",fontSize:"20px"}} align="center">Country Data</Typography>
              <Grid container className={styles.container} justify="space-evenly">
                <Grid item>
                <Paper elevation={24} className={cx(styles.paper2,styles.image)}>
                    <Typography className={cx(styles.infected)}  varient="caption">Confimred</Typography>
                    <Typography className={cx(styles.text)} varient="h6"><CountUp  start ={0} end={this.state.confirmed} duration = {3.5} separator = ","/></Typography>
                    <Typography className={cx(styles.recovered)}  varient="caption">Recovered</Typography>
                    <Typography className={cx(styles.text)} varient="h6"><CountUp  start ={0} end={this.state.recovered} duration = {3.5} separator = ","/></Typography>
                    <Typography className={cx(styles.active)}  varient="caption">Active</Typography>
                    <Typography className={cx(styles.text)} varient="h6"><CountUp  start ={0} end={active} duration = {3.5} separator = ","/></Typography>
                    <Typography className={cx(styles.deaths)}  varient="caption">Deceased</Typography>
                    <Typography className={cx(styles.text)} varient="h6"><CountUp  start ={0} end={this.state.deaths} duration = {3.5} separator = ","/></Typography>
                    <Typography color="textSecondary" varient="overline">As on {moment(this.state.date, "DD/MM/YYYY HH:mm:ss").calendar()}</Typography>
                </Paper>
                </Grid>
                <Grid item>
                    <Chart/>
                </Grid>
                </Grid>
            </React.Fragment> )
            
          }
          </div>
      

          );
        }
}

