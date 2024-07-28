import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

const Linechart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData && historicalData.prices) {
      historicalData.prices.forEach((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <Chart
      chartType="LineChart"
      data={data}
      height="300px"
      width= '150%, center' 
      options={{
        legend: { position: "bottom" },
        hAxis: { title: "Date" },
        vAxis: { title: "Price" },
      }}
    />
  );
};

export default Linechart;
