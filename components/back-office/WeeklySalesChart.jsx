"use client";
import React, { useState } from "react";
import { TbReportMoney, TbReportAnalytics } from "react-icons/tb";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function WeeklySalesChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const tabs = [
    {
      title: "Sales",
      type: "sales",
      Icon: TbReportMoney,
      data: {
        labels,
        datasets: [
          {
            label: "Sales",
            data: labels.map(() =>
              faker.datatype.number({ min: -1000, max: 1000 })
            ),
            borderColor: "rgb(9, 188, 138)",
            backgroundColor: "rgba(9, 188, 138, 0.5)",
          },
        ],
      },
    },
    {
      title: "Orders",
      type: "orders",
      Icon: TbReportAnalytics,
      data: {
        labels,
        datasets: [
          {
            label: "Orders",
            data: labels.map(() =>
              faker.datatype.number({ min: -1000, max: 1000 })
            ),
            borderColor: "rgb(240, 113, 103)",
            backgroundColor: "rgba(240, 113, 103, 0.5)",
          },
        ],
      },
    },
  ];
  const [chartToDislplay, setChartToDisplay] = useState(tabs[0].type);
  return (
    <div className="bg-white/5 myborder rounded-2xl p-5">
      <h2 className="text-white font-semibold text-2xl">
        Weekly Sales Overview
      </h2>

      <div class="border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {tabs.map((tab, i) => {
            return (
              <li class="me-2 cursor-pointer" key={i}>
                <h2
                  onClick={() => setChartToDisplay(tab.type)}
                  class={`${chartToDislplay == tab.type
                    ? tab.type == "sales"
                      ? " inline-flex items-center justify-center p-4 text-emerald-600 border-b-2 border-emerald-600 rounded-t-lg active dark:text-emerald-500 mr-5 duration-500 hover:duration-500 dark:border-emerald-500 group"
                      : "inline-flex items-center justify-center p-4 text-red-400 border-b-2 border-red-400 rounded-t-lg active dark:text-red-400 mr-5 duration-500 hover:duration-500 dark:border-red-400 group"
                    : "inline-flex items-center duration-500 hover:duration-500 mr-5 justify-center p-4 border-b-2 border-transparent rounded-t-lg active group"
                    } `}
                >
                  <tab.Icon size={20} className="mr-1" />
                  {tab.title}
                </h2>
              </li>
            );
          })}
        </ul>
      </div>

      {tabs.map((tab, i) => {
        if (chartToDislplay == tab.type) {
          return (
            <div>
              <h2 className="my-3">{tab.title}</h2>
              <Line options={options} data={tab.data} />
            </div>
          );
        }
      })}
    </div>
  );
}
