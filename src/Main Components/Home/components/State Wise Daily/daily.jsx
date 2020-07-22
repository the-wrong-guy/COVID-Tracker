import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Axios from "axios";
import {Paper,Typography} from '@material-ui/core'
import styles from '../Country Chart/countryLineChart.module.css'

class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
      postings: [],
      str: ""
    };
  }

  componentDidMount() {
    Axios.get("https://api.covid19india.org/states_daily.json")
      .then(response => {
        ////console.log(response)
        // this.setState({lists:response.data})
        //
        this.setState({ postings: response.data.states_daily });
        //console.log(response.data.states_daily)
        const postings = response.data.states_daily;
        //console.log(postings)

        const daily = postings[postings.length - 3];
        //console.log(daily)
        var sortable = [];
        for (var vehicle in daily) {
          sortable.push([vehicle, daily[vehicle]]);
        }

        sortable.sort(function(a, b) {
          return a[1] - b[1];
        });
        //console.log(sortable)
        var final_state = [];
        var final_val = [];
        var date = "";
        var j = 0;
        for (var i = sortable.length - 1; i >= 0; i--) {
          if (sortable[i][0] === "date") date = sortable[i][1];
          if (
            sortable[i][0] !== "date" &&
            sortable[i][0] !== "status" &&
            sortable[i][0] !== "tt" &&
            sortable[i][0] !== "dd"
          ) {
            if (sortable[i][0] === "ar") {
              final_state[j] = "Arunachal Pradesh";
            }
            if (sortable[i][0] === "br") {
              final_state[j] = "Bihar";
            }
            if (sortable[i][0] === "mh") {
              final_state[j] = "Maharashtra";
            }
            if (sortable[i][0] === "gj") {
              final_state[j] = "Gujarat";
            }
            if (sortable[i][0] === "tg") {
              final_state[j] = "Telangana";
            }
            if (sortable[i][0] === "pb") {
              final_state[j] = "Punjab";
            }
            if (sortable[i][0] === "jh") {
              final_state[j] = "Jharkhand";
            }
            if (sortable[i][0] === "ga") {
              final_state[j] = "Goa";
            }
            if (sortable[i][0] === "wb") {
              final_state[j] = "West Bengal";
            }
            if (sortable[i][0] === "mz") {
              final_state[j] = "Mizoram";
            }
            if (sortable[i][0] === "rj") {
              final_state[j] = "Rajasthan";
            }
            if (sortable[i][0] === "up") {
              final_state[j] = "Uttar Pradesh";
            }
            if (sortable[i][0] === "hr") {
              final_state[j] = "Haryana";
            }
            if (sortable[i][0] === "la") {
              final_state[j] = "Ladakh";
            }
            if (sortable[i][0] === "mp") {
              final_state[j] = "Madhya Pradesh";
            }
            if (sortable[i][0] === "ut") {
              final_state[j] = "Uttarakhand";
            }
            if (sortable[i][0] === "an") {
              final_state[j] = "Andaman and Nicobar Islands";
            }
            if (sortable[i][0] === "tn") {
              final_state[j] = "Tamil Nadu";
            }
            if (sortable[i][0] === "mn") {
              final_state[j] = "Manipur";
            }
            if (sortable[i][0] === "ct") {
              final_state[j] = "Chhattisgarh";
            }
            if (sortable[i][0] === "un") {
              final_state[j] = "State Unassigned";
            }
            if (sortable[i][0] === "py") {
              final_state[j] = "Puducherry";
            }
            if (sortable[i][0] === "ml") {
              final_state[j] = "Meghalaya";
            }
            if (sortable[i][0] === "mz") {
              final_state[j] = "Mizoram";
            }
            if (sortable[i][0] === "dn") {
              final_state[j] = "Dadra and Nagar Haveli and Daman and Diu";
            }
            if (sortable[i][0] === "nl") {
              final_state[j] = "Nagaland";
            }
            if (sortable[i][0] === "ld") {
              final_state[j] = "Lakshadweep";
            }
            if (sortable[i][0] === "sk") {
              final_state[j] = "Sikkim";
            }
            if (sortable[i][0] === "jk") {
              final_state[j] = "Jammu and Kashmir";
            }
            if (sortable[i][0] === "ka") {
              final_state[j] = "Karnataka";
            }

            if (sortable[i][0] === "or") {
              final_state[j] = "Odisha";
            }
            if (sortable[i][0] === "ap") {
              final_state[j] = "Andhra Pradesh";
            }
            if (sortable[i][0] === "kl") {
              final_state[j] = "Kerala";
            }
            if (sortable[i][0] === "tr") {
              final_state[j] = "Tripura";
            }
            if (sortable[i][0] === "as") {
              final_state[j] = "Assam";
            }
            if (sortable[i][0] === "hp") {
              final_state[j] = "Himachal Pradesh";
            }
            if (sortable[i][0] === "dl") {
              final_state[j] = "Delhi";
            }
            if (sortable[i][0] === "ch") {
              final_state[j] = "Chandigarh";
            }
            if (sortable[i][0] === "ct") {
              final_state[j] = "Chattisgarh";
            }

            // final_state[j]=final_state[j].toUpperCase()
            final_val[j] = Math.abs(sortable[i][1]);
            j++;
          }
        }
        this.setState({ str: date });
        //console.log(date)
        //console.log(final_state)
        //console.log(final_val)

        this.setState({
          chartData: {
            labels: final_state,
            datasets: [
              {
                label: `Positive Cases as on ${date}`,
                data: final_val,
                backgroundColor: [
                  "rgba(255,3,0,1)",
                  "rgba(219,3,0,1)",
                  "rgba(152,3,0,1)",
                  "rgba(255,3,0,0.7)",
                  "rgba(101,191,217,1)",
                  "rgba(101,191,217,0.59)",
                  "rgba(101,79,161,0.98)",
                  "rgba(208,79,197,0.98)",
                  "rgba(208,79,197,0.65)",
                  "rgba(43,144,197,1)",
                  "rgba(43,144,197,0.56)",
                  "rgba(0,255,255,0.56)",
                  "rgba(0,208,255,1)",
                  "rgba(0,251,14,1)",
                  "rgba(0,251,14,0.6)",
                  "rgba(147,251,94,1)",
                  "rgba(212,101,212,1)",
                  "rgba(101,101,212,1)",
                  "rgba(234,101,212,1)",
                  "rgba(98,101,212,1)",
                  "rgba(89,101,212,1)",
                  "rgba(190,101,212,1)",
                  "rgba(199,101,212,1)",
                  "rgba(220,101,212,1)",
                  "rgba(190,101,212,1)",
                  "rgba(190,101,212,1)",
                  "rgba(150,101,160,1)",
                  "rgba(0,251,14,0.45)",
                  "rgba(90,200,120,1)",
                  "rgba(90,200,120,1)",
                  "rgba(150,101,160,1)",
                  "rgba(150,101,160,1)",
                  "rgba(150,101,160,1)",
                  "rgba(90,200,120,1)",
                  "rgba(90,200,120,1)",
                  "rgba(90,200,120,1)",
                  "rgba(90,200,120,1)"
                ]
              }
            ]
          }
        });
      })
      .catch(error => {
        ////console.log(error)
      });
  }

  static defaultProps = {
    displayTitle: true,
    // displayLegend: true,
    legendPosition: "bottom",
    location: "City"
  };

  render() {
  
    return (
      <div className={styles.container}>
     
       <Paper elevation={24} className={styles.Card}>
        <Bar
          data={this.state.chartData}
          options={{
            title: {
                display: this.props.displayTitle,
                text: "State-wise Daily Positive Cases",
                fontSize: 15,
                verticalAlign: "bottom"
              },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
        </Paper>
      </div>
    );
  }
}

export default Daily;
