import React,{useState} from 'react';
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
        <h5 className={styles.title}>Global Corona Map</h5>
        <div className={styles.interactive} >

        {loading ? (
          <div className={styles.loader}>
          <Spinner name="ball-clip-rotate-multiple" color="green"/>
          </div>
        ) : null}

        <iframe className={styles.iframe}
        title='corona map'
        src="https://www.trackcorona.live/map"
        onLoad={hideSpinner}
      ></iframe>
        </div>
      </div>
    );
}