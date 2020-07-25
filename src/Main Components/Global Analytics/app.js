import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import {Typography} from '@material-ui/core'
import styles from "./App.module.css";
import { dataApi } from "./api";

class Global extends React.Component {
  state = {
    data: {},
    country: ""
  };

  async componentDidMount() {
    const dataFromApi = await dataApi();
    this.setState({ data: dataFromApi });
    // console.log(data);
    // console.log('This is componentDidmount sec')
  }

  handleCountryChange = async country => {
    const fetchedData = await dataApi(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Typography className={styles.header} style={{fontWeight : "550",marginTop:"50px",fontSize:"20px"}} color="initial">Global Statistics</Typography>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default Global;
