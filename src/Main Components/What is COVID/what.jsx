import React,{useState} from "react";
import { Typography } from "@material-ui/core";
import styles from './what.module.css'

var Spinner = require('react-spinkit')
export default function What() {
  const [loading1 , setLoading1] = useState(true)
  const [loading2 , setLoading2] = useState(true)

  return (
    <div className={styles.container}>
      <Typography className={styles.header} variant="h5" color="initial">What is COVID-19?</Typography>
      <div style={{position:"relative"}}>
      {loading1 ? (<div style={{position:"relative",width:"100%",display:"flex",justifyContent:"center"}}><Spinner name="ball-pulse-sync" color="aqua"/></div>):('')}
      <iframe
      src="https://www.youtube.com/embed/OZcRD9fV7jo"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="What is COVID-19?"
      className={styles.iframe}
      onLoad={()=>setLoading1(false)}
      />
      </div>
      <div>
      {loading2 ? (<div style={{position:"relative",width:"100%",display:"flex",justifyContent:"center",marginTop:"20px"}}><Spinner name="ball-pulse-sync" color="aqua"/></div>):('')}
      <iframe
      src="https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus"
      title="defination of covid"
      onLoad={()=>setLoading2(false)}
      className={styles.iframe2}
      />
      </div>
      
     
    </div>
  );
}
