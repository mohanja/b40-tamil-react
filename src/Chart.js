import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


const labels = [
  "Jan",
  " ",
  "Mar",
  " ",
  "May",
  " ",
  "Jul",
  " ",
  "Sep",
  " ",
  "Nov",
  " "
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Earnings ",
      data: [
        0,
        10000,
        5000,
        15000,
        10000,
        20000,
        15000,
        25000,
        20000,
        30000,
        25000,
        40000
      ],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: " rgb(197, 202, 202)",
      lineTension: 0.3
    }
  ]
};

export function Chart() {

  return <Line data={data} />
}