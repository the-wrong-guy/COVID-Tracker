import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import {Paper} from '@material-ui/core'
import styles from '../State Data/state.module.css'
import stylesTwo from './StateSkeleton.module.css'
import cx from 'classnames'

export default function CountrySkeleton(){
    return(
            <Paper className={cx(stylesTwo.container)}>
                <Skeleton animation="wave"  className={stylesTwo.text} width="40%" variant="text"  />
                <Skeleton animation="wave" className={stylesTwo.text} width="60%" variant="text"  />

                <Skeleton animation="wave"  className={stylesTwo.text} width="40%" variant="text"  />
                <Skeleton animation="wave" className={stylesTwo.text} width="60%" variant="text"  />

                <Skeleton animation="wave"  className={stylesTwo.text} width="40%" variant="text"  />
                <Skeleton animation="wave" className={stylesTwo.text} width="60%" variant="text"  />

                <Skeleton animation="wave"  className={stylesTwo.text} width="40%" variant="text"  />
                <Skeleton animation="wave" className={stylesTwo.text} width="60%" variant="text"  />

                <Skeleton animation="wave" style={{marginTop:"20px"}} className={stylesTwo.text} width="70%" variant="text"  />
            </Paper>
    )
}