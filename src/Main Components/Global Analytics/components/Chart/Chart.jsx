import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import { Card } from "@material-ui/core";
import Map  from '../Map/map'

import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
    // console.log(dailyData);
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            borderColor: "rgb(212, 0, 255)",
            label: "Infected",
            pointRadius: 1,
            fill: true
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            borderColor: "red",
            label: "Deaths",
            pointRadius: 1,
            fill: true
          }
        ]
      }}
      options={{
        legend: {
          position: "top",
          labels: {
            usePointStyle: true
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true
              }
            }
          ]
        }
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            backgroundColor: [
              "#ff8800",
              "rgb(0, 252, 97)",
              "rgba(255, 0, 0, 0.932)"
            ],
            data: [confirmed.value, recovered.value, deaths.value]
          }
        ]
      }}
      options={{
        legend: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true
              }
            }
          ]
        },
        title: { display: true, text: `Current state in ${country}` }
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      <Card elevation={24} className={styles.card}>
        {country ? barChart : lineChart}
      </Card>
      <Map/>
    </div>
  );
};

export default Chart;
