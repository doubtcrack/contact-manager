import React from "react";
import { Typography, Grid } from "@material-ui/core";
import CardComponent from "./Card/Card";

const Cards = ({ data: { cases, recovered, deaths, active } }) => {
  if (!cases) {
    return "Loading...";
  }

  return (
    <div className="flex flex-column my-20">
      <Grid container spacing={3} justify="center">
        <CardComponent
          className="border-b-4 border-blue-300"
          cardTitle="Infected"
          value={cases}
          lastUpdate={active}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className="border-b-4 border-green-300"
          cardTitle="Recovered"
          value={recovered}
          lastUpdate={active}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className="border-b-4 border-red-300"
          cardTitle="Deaths"
          value={deaths}
          lastUpdate={active}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export { Cards };
