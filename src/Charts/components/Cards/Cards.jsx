import React from "react";
import CardComponent from "./Card/Card";

const Info = ({ data: { cases, recovered, deaths, active } }) => {
  if (!cases) {
    return "Loading...";
  }

  return (
    <div className="container">
      <div className=" flex container p-3 justify-center max-sm:flex-wrap">
        <CardComponent
          className="border-b-4 border-indigo-500"
          cardTitle="Infected"
          value={cases}
          lastUpdate={active}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className="border-b-4 border-green-500"
          cardTitle="Recovered"
          value={recovered}
          lastUpdate={active}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className="border-b-4 border-red-500"
          cardTitle="Deaths"
          value={deaths}
          lastUpdate={active}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </div>
    </div>
  );
};

export default Info;
