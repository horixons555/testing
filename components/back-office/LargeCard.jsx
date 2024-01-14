import React from "react";
import { BadgeDollarSign } from "lucide-react";
import { FaArrowDownLong } from "react-icons/fa6";

export default function LargeCard({ data }) {
  return (
    <div className={`flex py-5 items-center flex-col rounded-lg ${data.color}`}>
      <BadgeDollarSign size={30} />
      <h1 className="text-lg leading-none font-semibold mb-2 mt-3">
        {data.period}
      </h1>
      <FaArrowDownLong size={20} />
      <h1 className="text-2xl font-bold leading-none mt-3">
        PKR. {data.sales}
      </h1>
    </div>
  );
}
