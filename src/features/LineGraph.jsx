import React from "react";

// import { Cards } from "../Charts/components/Cards/Cards";
import { CountryPicker, Chart } from "../Charts/components";

import { fetchData } from "../Charts/api";

class LineGraph extends React.Component {
  state = {
    data: {},
    country: "afganistan",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;
    // console.log(country);
    return (
      <div className="container">
        {/* <CountryPicker handleCountryChange={this.handleCountryChange} /> */}
        {/* <Cards data={data} /> */}
        {/* <Chart data={data} country={country} /> */}
        APIS will be here
      </div>
    );
  }
}

export default LineGraph;
