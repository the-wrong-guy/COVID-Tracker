import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import styles from '../Country Chart/countryLineChart.module.css'
import cx from 'classnames'

export default function ChartSkeleton(){
    return(
        <Skeleton animation="wave" variant="rect" height={200} width={411} className={styles.Card} />
    )
}