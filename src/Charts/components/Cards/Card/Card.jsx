import React from "react";
import CountUp from "react-countup";

const CardComponent = ({
  className,
  cardTitle,
  value,
  lastUpdate,
  cardSubtitle,
}) => (
  <div
    className={
      "max-w-sm rounded overflow-hidden shadow-lg p-10 mx-5 text-center  border-b-4 " +
      className
    }
  >
    <div>
      <h2 className={"font-bold text-xl mb-2 h-10"}>{cardTitle}</h2>
      <div class="border-b-2 border-gray-50 my-2"></div>
      <div className="text-gray-700 text-base">
        <CountUp start={0} end={value} duration={2.75} separator="," />
      </div>
      <div class="border-b-2 border-gray-50 my-2"></div>

      <div className="text-gray-700 text-base">Active: {lastUpdate}</div>
      <div className="text-gray-700 text-base">{cardSubtitle}</div>
    </div>
  </div>
);

export default CardComponent;
