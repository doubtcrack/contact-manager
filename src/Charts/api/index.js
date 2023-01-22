import axios from "axios";

const url = "https://disease.sh/v3/covid-19";
const all = "https://disease.sh/v3/covid-19/all";
export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  // console.log(await axios.get(all));
  try {
    const {
      data: { cases, recovered, deaths, active },
    } = await axios.get(all);
    return { cases, recovered, deaths, active };
  } catch (error) {
    return error;
  }
};

// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get(`${url}/daily`);

//     return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
//   } catch (error) {
//     return error;
//   }
// };

// Instead of Global, it fetches the daily data for the US
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(
      "https://api.covidtracking.com/v1/us/daily.json"
    );

    return data.map(({ positive, recovered, death, dateChecked: date }) => ({
      confirmed: positive,
      recovered,
      deaths: death,
      date,
    }));
  } catch (error) {
    return error;
  }
};
// let data = async () => {await axios.get(`${url}/countries`)};
// console.log(data);
export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country);
    // return "afganistan";
  } catch (error) {
    return error;
  }
};
// console.log(fetchCountries);
