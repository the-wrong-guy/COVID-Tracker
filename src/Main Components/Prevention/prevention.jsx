import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import styles from "./prevention.module.css";
var Spinner = require("react-spinkit");
export default function Prevention() {
  return (
    <div className={styles.container}>
      <Typography className={styles.header} variant='h5' color='initial'>
        Prevention
      </Typography>
      <iframe
        className={styles.iframe}
        src='https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html'
        title='COVID Prevention Measures'
      />
    </div>
  );
}
