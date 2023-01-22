import React from "react";
import { useState, useEffect } from "react";
import { fetchData } from "../Charts/api";

import { Cards, CountryPicker, Chart } from "../Charts/components";
import image from "../Charts/images/image.png";

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetchData());
    };
    fetchAPI();
  }, []);

  const handleCountryChange = async (selectedCountry) => {
    const data = await fetchData(selectedCountry);
    setData(data);
    setCountry(selectedCountry);
  };

  return (
    <>
      <div className="container  w-full lg:w-4/5">
        <div className="p-8 flex justify-center">
          <img className="p-4" src={image} alt="COVID-19" />
        </div>

        <Cards data={data} />
        {/* <CountryPicker handleCountryChange={this.handleCountryChange} /> */}
        <Chart data={data} country={"afghanistan"} />
      </div>
    </>
  );
};
export default App;
