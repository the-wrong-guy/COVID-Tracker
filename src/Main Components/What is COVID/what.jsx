import React,{useState} from "react";
import { Typography } from "@material-ui/core";
import styles from './what.module.css'

export default function What() {
  const [loading , setLoading] = useState(true)
  let hideSpinner = () => {
    setLoading(false)
    // console.log('Finished')
    };
  return (
    <div className={styles.container}>
      <Typography className={styles.header} variant="h5" color="initial">What is COVID-19?</Typography>
      <iframe
        src="https://www.youtube.com/embed/OZcRD9fV7jo"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="What is COVID-19?"
        className={styles.iframe}
        onLoad={()=>setLoading(false)}
      />
      <iframe
      src="http://www.emro.who.int/health-topics/corona-virus/about-covid-19.html"
      title="defination of covid"
      className={styles.iframe2}
      />
    </div>
  );
}
