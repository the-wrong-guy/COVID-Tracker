import React,{useState,useEffect} from 'react'
import { Paper, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup';
import styles from './paperBar.module.css'


const PaperBar = ({title,data}) => {
    const [TestPerMillon,setTestPerMillon] = useState('')
    const [TotalSamplesTested,setTotalSamplesTested] = useState('')
    const [PositivityRate,setPositivityRate] = useState('')

    useEffect(()=>{
        fetch('https://api.covid19india.org/data.json')
        .then(response=>response.json())
        .then(data=>{
            let localdta = data.tested[data.tested.length-1]
            // console.log(localdta)
            setPositivityRate(localdta.testpositivityrate)
            setTestPerMillon(localdta.testspermillion)
            setTotalSamplesTested(localdta.totalsamplestested)
        }) 
        .catch(err=>console.log(err))
    },[])
    return (
        <div className={styles.container}>
            <div className={styles.paperContainer}>
                <Paper elevation={15} className={styles.paper}>
                    <div><Typography className={styles.typo1} variant="subtitle1" color="initial">Tests per million</Typography></div>
                    <div><Typography variant="subtitle1" color="initial"><CountUp  start ={0} end={TestPerMillon} duration = {3.5} separator = ","/></Typography></div>
                </Paper>
            </div>
            <div  className={styles.paperContainer}>
                <Paper elevation={15} className={styles.paper}>
                    <div><Typography className={styles.typo2} variant="subtitle1" color="initial">Total samples tested</Typography></div>
                    <div><Typography variant="subtitle1" color="initial"><CountUp  start ={0} end={TotalSamplesTested} duration = {3.5} separator = ","/></Typography></div>
                </Paper>
            </div>
            <div className={styles.paperContainer}>
                <Paper elevation={15} className={styles.paper}>
                    <div><Typography className={styles.typo3} variant="subtitle1" color="initial">Positivity rate</Typography></div>
                    <div><Typography variant="subtitle1" color="initial">{PositivityRate}</Typography></div>
                </Paper>
            </div>
        </div>
    )
}


export default PaperBar