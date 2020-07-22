import React,{useState} from 'react';
import {Typography} from '@material-ui/core'
import styles from './map.module.css'
var Spinner = require('react-spinkit')

export default function Map(){

  const [loading , setLoading] = useState(true)
let hideSpinner = () => {
  setLoading(false)
  console.log('Finished')
  };

    return(
        <div>
        <Typography className={styles.title} align="center" varient="h5">Global Corona Map</Typography>
        {loading ? (
          <div className={styles.loader}>
          <Spinner name="ball-clip-rotate-multiple" color="red"/>
          </div>
        ) : null}
        <div className={styles.interactive} >

        <iframe className={styles.iframe}
        title='corona map'
        src="https://www.trackcorona.live/map"
        onLoad={hideSpinner}
      ></iframe>
        </div>
      </div>
    );
}