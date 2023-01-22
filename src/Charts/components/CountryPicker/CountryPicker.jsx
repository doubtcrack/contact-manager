import React, { useState, useEffect } from "react";
// import { NativeSelect, FormControl } from "@material-ui/core";

// import { fetchCountries } from "../../api";

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([
    "Afganistan",
    "Albania",
    "Algeria",
    "Fiji",
    "France",
    "Hungary",
  ]);
  // console.log(countries);
  // useEffect(() => {
  //   const fetchAPI = async () => {s
  //     setCountries(await fetchCountries());
  //   };

  //   fetchAPI();
  // }, []);
  console.log(countries);
  return (
    // <FormControl className="w-2/5 mb-3">
    //   <NativeSelect
    //     defaultValue=""
    //     onChange={(e) => handleCountryChange(e.target.value)}
    //   >
    //     <option value="">United States</option>
    //     {countries.map((country, i) => (
    //       <option key={i} value={country}>
    //         {country}
    //       </option>
    //     ))}
    //   </NativeSelect>
    // </FormControl>
    <>CountryPicker</>
  );
};

export default Countries;
