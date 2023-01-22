import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../../api";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);
  // console.log(country);
  // const barChart = confirmed ? (
  //   <Bar
  //     data={{
  //       labels: ["Infected", "Recovered", "Deaths"],
  //       datasets: [
  //         {
  //           label: "People",
  //           backgroundColor: [
  //             "rgba(0, 0, 255, 0.5)",
  //             "rgba(0, 255, 0, 0.5)",
  //             "rgba(255, 0, 0, 0.5)",
  //           ],
  //           data: [confirmed, recovered, deaths],
  //         },
  //       ],
  //     }}
  //     options={{
  //       legend: { display: false },
  //       title: { display: true, text: `Current state in ${country}` },
  //     }}
  //   />
  // ) : null;

  // let labelsarray = dailyData.map(({ date }) =>
  //   new Date(date).toLocaleDateString()
  // );
  // const temp = dailyData.map((data) => console.log(data));

  //  My workplace

  // const [labelsarray, setLabelsArray] = useState([]);

  // useEffect(() => {
  //   setLabelsArray(
  //     dailyData.map(({ date }) => new Date(date).toLocaleDateString())
  //   );
  // }, [dailyData]);

  // console.log("my label array " + labelsarray);
  // My workplace

  // const lineChart = dailyData[0]
  //   ? {
  //       labels: dailyData.map(({ date }) =>
  //         new Date(date).toLocaleDateString()
  //       ),
  //       datasets: [
  //         {
  //           data: dailyData.map((data) => data.confirmed),
  //           label: "Infected",
  //           borderColor: "#3333ff",
  //           fill: true,
  //         },
  //         {
  //           data: dailyData.map((data) => data.deaths),
  //           label: "Deaths",
  //           borderColor: "red",
  //           backgroundColor: "rgba(255, 0, 0, 0.5)",
  //           fill: true,
  //         },
  //         {
  //           data: dailyData.map((data) => data.recovered),
  //           label: "Recovered",
  //           borderColor: "green",
  //           backgroundColor: "rgba(0, 255, 0, 0.5)",
  //           fill: true,
  //         },
  //       ],
  //     }
  //   : null;

  // return <div className="container">{country ? barChart : lineChart}</div>;
  return <div className="container">{" <Line data={lineChart} />"}</div>;
};

export default Chart;
