import Link from "next/link";
import React from "react";
import "../../styles/main.css";
import page from "./../../app/(back-office)/dashboard/(catelogue)/banners/page";

export default function SideBar() {
  return (
    <div className="side-bar w-52 h-screen pt-3">
      <div className="border border-r rounded-xl pt-5 border-white/50 main-div ml-4">
        <Link
          href="#"
          className="text-white ml-6 font-semibold text-xl text-emerald-500"
        >
          HORIXONS
        </Link>
        <div className="flex flex-col mt-6 space-y-5 pl-6 text-slate-50">
          <Link href="#">Dashboard</Link>
          <Link href="#">Catalogue</Link>
          <Link href="#">Customers</Link>
          <Link href="#">Markets</Link>
          <Link href="#">Farmers</Link>
          <Link href="#">Orders</Link>
          <Link href="#">Staff</Link>
          <Link href="#">Settings</Link>
          <Link href="#">Online Store</Link>
        </div>
      </div>
    </div>
  );
}
