import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import {Paper} from '@material-ui/core'
import styles from '../State Data/state.module.css'
import stylesTwo from './Skeleton.module.css'
import cx from 'classnames'

export default function CountrySkeleton(){
    return(
            <Paper className={cx(styles.paper2)}>
            <Skeleton animation="wave"  width="40%" variant="text"  />
            <Skeleton animation="wave" className={cx(styles.text,stylesTwo.alignRight)} width="60%" variant="text"  />
            <Skeleton animation="wave" width="40%" variant="text"  />
            <Skeleton animation="wave" className={cx(styles.text)} width="60%" variant="text"  />
            <Skeleton animation="wave" width="40%" variant="text"  />
            <Skeleton animation="wave" className={cx(styles.text)} width="60%" variant="text"  />
            <Skeleton animation="wave" width="47%" variant="text"  />
            <Skeleton animation="wave" className={cx(styles.text)} width="60%" variant="text"  />
            <Skeleton animation="wave" variant="text" width="80%"/>
            </Paper>
    )
}