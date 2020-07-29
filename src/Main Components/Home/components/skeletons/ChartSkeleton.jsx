import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import stylesTwo from './ChartSkeleton.module.css'

export default function ChartSkeleton(){
    return(
        <Skeleton animation="wave" variant="rect" className={stylesTwo.Card} />
    )
}