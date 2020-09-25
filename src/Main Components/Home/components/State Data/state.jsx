import React,{ useEffect,useState } from "react";
import { Grid, Paper, Typography} from "@material-ui/core";
import CountUp from 'react-countup';
import styles from './state.module.css'
import cx from 'classnames'
import StateSkeleton from '../skeletons/StateSkeleton'
import moment from 'moment'
    const StateCard = (props) =>{
        
              const [loading, setLoading] = useState(true);
              const [confirmed,setConfirmed] = useState('')
              const [active,setActive] = useState('')
              const [deaths,setDeaths] = useState('')
              const [recovered,setRecovered] = useState('')
              const [lastUpdated,setLastUpdated] = useState('')
              let curTime = new Date().toLocaleString()
              const { data, states } = props;
              console.log(props)

              useEffect(() => {

                async function deta(){
                await data
                setRecovered(data.recovered)
                setConfirmed(data.confirmed)
                setActive(data.active)
                setDeaths(data.deaths)
                setLastUpdated(data.lastUpdated)
                setLoading(false)
                }

                deta()
                
              }, [data])

              console.log(lastUpdated)

        // spacing deafult value is 8px , so the 3*8=24px width column

          return (
            <div className={styles.container}>
            { loading || !confirmed ? 
              (<React.Fragment>
                <Grid container justify="center">
                  <Grid item><StateSkeleton/></Grid>  
                </Grid>  
              </React.Fragment>) : 
              
              (<React.Fragment>
              <Grid container justify="center">
                <Grid item>
                 
                <Paper elevation={24} className={cx(styles.paper2,styles.image)}>
                    <Typography className={cx(styles.infected)} align="right"  varient="caption">Infected</Typography>
                    <Typography className={cx(styles.text)} align="right" varient="h6"><CountUp  start ={0} end={confirmed || 100} duration = {3.5} separator = ","/></Typography>

                    <Typography className={cx(styles.active)} align="right" varient="caption">Active</Typography>
                    <Typography className={cx(styles.text)} align="right" varient="h6"><CountUp  start ={0} end={active || 100} duration = {3.5} separator = ","/></Typography>

                    <Typography className={cx(styles.recovered)} align="right" varient="caption">Recovered</Typography>
                    <Typography className={cx(styles.text)} align="right" varient="h6"><CountUp  start ={0} end={recovered || 100} duration = {3.5} separator = ","/></Typography>

                    <Typography className={cx(styles.deaths)} align="right"  varient="caption">Deceased</Typography>
                    <Typography className={cx(styles.text)} align="right" varient="h6"><CountUp  start ={0} end={deaths || 100} duration = {3.5} separator = ","/></Typography>
                    
                    <Typography color="textSecondary" align="right" varient="overline">As on {moment(lastUpdated, "DD/MM/YYYY HH:mm:ss").calendar()}</Typography>
                </Paper>
                </Grid>
                </Grid>
            </React.Fragment> )
          }
          </div> 
          );
        }


export default StateCard;

//-----------------------------------------------------------------------------------------------------------------------------------------------/
  

