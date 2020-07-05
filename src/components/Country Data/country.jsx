import React from "react";
import { CardContent,Card,Grid,Box, Paper, Typography,IconButton} from "@material-ui/core";
import CountUp from 'react-countup';
import styles from './country.module.css'
import cx from 'classnames'
import CountrySkeleton from '../skeletons/CountrySkeleton'

export default class CountryCard extends React.Component{

        state = {
          loading : true,
          confirmed : [],
          deaths : [],
          recovered : [],
          curTime : new Date().toLocaleString()
        };

        async componentDidMount () {
          const url = 'https://api.covid19india.org/data.json';
          const response = await fetch(url);
          const data = await response.json();
          const pop = data.cases_time_series.pop()
          this.setState({confirmed:pop.totalconfirmed, deaths:pop.totaldeceased, recovered:pop.totalrecovered, loading:false}) ;
          console.log(data);
        }

        // spacing deafult value is 8px , so the 3*8=24px width column

        render(){
          return (
            <div className={styles.container}>
            { this.state.loading || !this.state.confirmed || !this.state.deaths || !this.state.recovered  ? 
              (<React.Fragment>
                <Grid container justify="center">
                  <Grid item><CountrySkeleton/></Grid>  
                </Grid>  
              </React.Fragment>) : 
              
              (<React.Fragment>
              <Grid container justify="center">
                <Grid item>
                  <div className={styles.countryLogo}>
                    <img src="https://img.icons8.com/color/48/000000/india-circular.png" alt='indiaflag'/>
                  </div>
                <Paper elevation={24} className={cx(styles.paper2,styles.image)}>
                    <Typography className={cx(styles.infected)}  varient="caption">Infected</Typography>
                    <Typography className={cx(styles.text)} varient="h6"><CountUp  start ={0} end={this.state.confirmed} duration = {3.5} separator = ","/></Typography>
                    <Typography className={cx(styles.deaths)}  varient="caption">Deceased</Typography>
                    <Typography className={cx(styles.text)} varient="h6"><CountUp  start ={0} end={this.state.deaths} duration = {3.5} separator = ","/></Typography>
                    <Typography className={cx(styles.recovered)}  varient="caption">Recovered</Typography>
                    <Typography className={cx(styles.text)} varient="h6"><CountUp  start ={0} end={this.state.recovered} duration = {3.5} separator = ","/></Typography>
                    <Typography color="textSecondary" varient="overline">As on {this.state.curTime}</Typography>
                </Paper>
                </Grid>
                <Grid item>
                    
                </Grid>
                </Grid>
            </React.Fragment> )
          }
          </div> 
          );
        }
}

