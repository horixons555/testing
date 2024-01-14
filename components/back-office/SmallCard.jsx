import React from "react";
import { HiShoppingCart } from "react-icons/hi";

export default function SmallCard({ data }) {
  const { title, numbers, iconBg, icon: Icon } = data;
  return (
    <div className="bg-white/5 myborder flex items-center justify-start flex-row px-5 rounded-lg py-4">
      <div
        className={`w-12 mr-5 h-12 flex items-center justify-center rounded-full ${iconBg}`}
      >
        <Icon size={25} />
      </div>
      <div>
        <h1 className="text-lg font-normal">{title}</h1>
        <h1 className="text-xl font-medium">{numbers}</h1>
      </div>
    </div>
  );
}
