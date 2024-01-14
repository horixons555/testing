"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsChart() {
  const data = {
    labels: ["Orange", "Mango", "Grapes", "Apple"],
    datasets: [
      {
        label: "# of Votes",
        data: [30, 10, 40, 20],
        backgroundColor: [
          "rgba(233, 196, 106, 1)",
          "rgba(22, 138, 173, 1)",
          "rgba(240, 113, 103, 1)",
          "rgba(9, 188, 138, 1)",
        ],
        borderColor: [
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };
  return (
    <div className="bg-white/5 myborder rounded-2xl p-5">
      <h2 className="text-white font-semibold text-2xl mb-5">
        Best Selling Products
      </h2>
      <div className="p-20">
        <Pie data={data} />
      </div>
    </div>
  );
}
