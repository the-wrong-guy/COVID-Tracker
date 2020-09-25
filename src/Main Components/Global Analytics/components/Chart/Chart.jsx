import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import { Card } from "@material-ui/core";
import DailyCases from '../Daily new cases/newCases'
import numeral from "numeral";

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


// let DATE = dailyData.map(({ date }) => new Date(date).toLocaleString())
// console.log(DATE)

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            borderColor: "rgba(255, 157, 0, 0.98)",
            backgroundColor:"rgba(255, 157, 0, 0.5)",
            label: "Infected",
            pointRadius: 0,
            
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            borderColor: "rgba(255, 72, 0, 0.98)",
            backgroundColor:"rgba(255, 72, 0, 0.5)",
            label: "Deaths",
            pointRadius: 0,
            
          }
        ]
      }}
      options={{
        responsive :true,
        maintainAspectRatio: false,
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
              },
              ticks:{
                lineHeight: 1.5,
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                lineWidth: 1
              },
              ticks: {
                callback: function (value, index, values) {
                  return numeral(value).format("0a");
                },
                lineHeight: 3
                
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
        responsive :true,
        maintainAspectRatio: false,
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
              },
              ticks: {
                callback: function (value, index, values) {
                  return numeral(value).format("0a");
                },
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
      <Card elevation={10} className={styles.card}>
        {country ? barChart : lineChart}
      </Card>
      <DailyCases/>
    </div>
  );
};

export default Chart;
