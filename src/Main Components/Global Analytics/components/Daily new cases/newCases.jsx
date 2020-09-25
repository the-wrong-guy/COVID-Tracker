import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import {Card} from '@material-ui/core'
import styles from './newCases.module.css'
const options = {
  legend: {
    display: false,
  },
  title: {
    display: true,
    text: 'Daily New Cases'
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },

  scales: {
    xAxes: [
      { 
        gridLines: {
          display: false,
        },
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: true,
        },
        ticks: {
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};
const casesTypeColors = {
  cases: {
    hex: "#a820df",
    rgb: "rgb(26, 187, 232)",
    half_op: "rgb(26, 187, 232,0.5)",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgba(125,215,29)",
    half_op: "rgba(125,215,29,0.5)",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgba(251,68,67)",
    half_op: "rgba(251,68,67,0.5)",
    multiplier: 2000,
  }
};
const DailyCases = ({ casesType = "cases", ...props }) => {
  const [data, setData] = useState({});
  const buildChartData = (data) => {
    const chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
    return chartData;
  };
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then((response) => response.json())
        .then((data) => {
          const chartData = buildChartData(data);
          setData(chartData);
        });
    };
    fetchData();
  }, [casesType]);
  return (
    <div className={props.className}>
     <Card elevation={9} className={styles.card}>
     {data?.length > 0 && (
        <Line
          options={options}
          data={{
            datasets: [
              {
                borderColor:  casesTypeColors[casesType].hex,
                backgroundColor: casesTypeColors[casesType].half_op,
                data: data,
              },
            ],
          }}
        />
      )}
     </Card>
      
    </div>
  );
};

export default DailyCases;

