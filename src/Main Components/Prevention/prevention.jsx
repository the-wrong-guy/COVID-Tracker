import React from "react";
import { Typography } from "@material-ui/core";
import styles from './prevention.module.css'

export default function Prevention() {
  return (
    <div className={styles.container}>
    <Typography className={styles.header} variant="h5" color="initial">Prevention</Typography>
      <iframe
        className={styles.iframe}
        src="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
        title="COVID_Prevention_Measures"
      />
    </div>
  );
}
