import React from "react";
import styles from "./Cards.module.css";
import { Card,Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  //  <=as a props the "data" had been paased to this
  //  console.log(data);
  if (!confirmed) {
    return "Loading...";
  }
  return (
    
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Card elevation={10} className={cx(styles.card, styles.infected)}>
            <Typography
              style={{ fontWeight: "600", color: "rgba(243, 4, 183, 0.5)" }}
              gutterBottom
            >
              Infected
            </Typography>
            <Typography varient="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
          </Card>
        </Grid>
        <Grid item>
          <Card elevation={10} className={cx(styles.card, styles.recovered)}>
            <Typography
              style={{ fontWeight: "600", color: "rgb(0, 252, 97)" }}
              gutterBottom
            >
              Recovered
            </Typography>
            <Typography varient="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
          </Card>
        </Grid>
        <Grid item>
          <Card elevation={10} className={cx(styles.card, styles.deaths)}>
            <Typography
              style={{ fontWeight: "600", color: "rgba(255, 0, 0, 0.932)" }}
              gutterBottom
            >
              Deaths
            </Typography>
            <Typography varient="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
