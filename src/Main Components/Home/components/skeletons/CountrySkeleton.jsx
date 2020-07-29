import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import {Paper} from '@material-ui/core'
import styles from '../Country Data/country.module.css'
import stylesTwo from './Skeleton.module.css'
import cx from 'classnames'

export default function CountrySkeleton(){
    return(
            <Paper className={cx(styles.paper2)}>
                <Skeleton animation="wave"  width="55%" variant="text"  />
                <Skeleton animation="wave" className={cx(stylesTwo.text)} width="30%" variant="text"  />

                <Skeleton animation="wave"  width="55%" variant="text"  />
                <Skeleton animation="wave" className={cx(stylesTwo.text)} width="30%" variant="text"  />

                <Skeleton animation="wave"  width="55%" variant="text"  />
                <Skeleton animation="wave" className={cx(stylesTwo.text)} width="30%" variant="text"  />

                <Skeleton animation="wave"  width="55%" variant="text"  />
                <Skeleton animation="wave" className={cx(stylesTwo.text)} width="30%" variant="text"  />

                <Skeleton animation="wave" style={{marginTop:"20px"}} variant="text" width="70%"/>
            </Paper>
    )
}