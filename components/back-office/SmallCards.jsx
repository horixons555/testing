import React from "react";
import SmallCard from "./SmallCard";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi";

export default function SmallCards() {
  const orderStatus = [
    {
      iconBg: "bg-ylw",
      title: "Total Orders",
      numbers: 120,
      icon: HiShoppingCart,
    },
    {
      title: "Orders Pending",
      numbers: 120,
      iconBg: "bg-rose-500",
      icon: PiArrowsCounterClockwiseBold,
    },
    {
      title: "Orders Processing",
      numbers: 120,
      iconBg: "bg-blue-500",
      icon: FaTruck,
    },
    {
      title: "Orders Delivred",
      numbers: 120,
      iconBg: "bg-green",
      icon: FaCheck,
    },
  ];
  return (
    <div className="grid mt-6 lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2">
      {orderStatus.map((data, i) => {
        return <SmallCard data={data} />;
      })}
    </div>
  );
}
