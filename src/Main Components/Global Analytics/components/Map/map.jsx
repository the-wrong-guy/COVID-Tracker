import React,{useState} from 'react';
import {Typography,Paper} from '@material-ui/core'
import styles from './map.module.css'
import Spinner from 'react-spinkit'


export default function Map(){

  const [loading , setLoading] = useState(true)
let hideSpinner = () => {
  setLoading(false)
  // console.log('Finished')
  };

    return(
        <div>
        <Paper elevation={24} className={styles.paper}>
        {loading ? (
          <div className={styles.loader}>
          <Spinner name="ball-clip-rotate-multiple" color="red"/>
          </div>
        ) : null}
        <iframe className={styles.iframe}
        title='corona map'
        src="https://www.trackcorona.live/map"
        onLoad={hideSpinner}
      ></iframe>
        </Paper>
      </div>
    );
}