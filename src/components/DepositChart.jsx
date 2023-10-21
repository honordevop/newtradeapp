"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: ["# of Votes"],
      data: [15.78, 13.16, 19.74, 25, 26.32],
      backgroundColor: [
        "rgb(204,22,103)",
        "rgb(19,175,204)",
        "rgb(59,138,153)",
        "rgb(54,255,173)",
        "rgb(255,120,118)",
      ],
      borderColor: [
        "rgba(	255, 255, 255)",
        // "rgba(54, 162, 235, 1)",
        // "rgba(255, 206, 86, 1)",
        // "rgba(75, 192, 192, 1)",
        // "rgba(153, 102, 255, 1)",
        // "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const DepositChart = () => {
  return <Doughnut data={data} />;
};

export default DepositChart;
