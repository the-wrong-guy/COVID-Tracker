import React from 'react'
import {Typography} from "@material-ui/core"
import RemoteWork from './remote-work-man.svg'
import styles from './error.module.css'

export default function Error(){
    return(
        <div className={styles.container}>
            <Typography variant="h2" className={styles.header} color="initial">Error 404!</Typography><br/>
            <span className={styles.header2}>Page not found</span>
        </div>
    );
}