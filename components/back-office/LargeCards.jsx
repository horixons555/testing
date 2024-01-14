import React from "react";
import LargeCard from "./LargeCard";

export default function LargeCards() {
  const orderStats = [
    {
      period: "Today Orders",
      sales: 12000,
      color: "bg-green",
    },
    {
      period: "Yesterday Orders",
      sales: 12000,
      color: "bg-rose-500",
    },
    {
      period: "This Month",
      sales: 12000,
      color: "bg-ylw",
    },
    {
      period: "Last Month",
      sales: 12000,
      color: "bg-blue-500",
    },
    {
      period: "All Time",
      sales: 12000,
      color: "bg-orange-400",
    },
  ];
  return (
    <div className="grid  sm:grid-cols-1 lg:grid-cols-5 gap-3 md:grid-cols-2">
      {orderStats.map((item, i) => {
        return <LargeCard data={item} key={i} />;
      })}
    </div>
  );
}
