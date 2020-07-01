import React from 'react';
import styles from './map.module.css'

export default function Map(){
    return(
        <div >
        <h5 className={styles.title}>Global Corona Map</h5>
        <div className={styles.interactive} >
        <iframe className={styles.iframe}
        title='corona map'
        src="https://www.trackcorona.live/map"
      ></iframe>
        </div>
      </div>
    );
}