import React from "react";
import { IoSunny } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { HiMenu } from "react-icons/hi";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 bg-black h-16 text-slate-50 border border-white/50 my-3 rounded-xl">
      <HiMenu
        size={25}
        className="hover:bg-emerald-500 cursor-pointer duration-500 rounded-full flex items-center justify-center w-10 h-10 p-2"
      />
      <div className="flex flex-row items-center space-x-10">
        <IoSunny
          size={25}
          className="icon-hover cursor-pointer duration-500 rounded-full flex items-center justify-center w-10 h-10 p-2"
        />


        <button type="button" className="relative">
          <FiBell
            size={25}
            className="icon-hover cursor-pointer duration-500 rounded-full flex items-center justify-center w-10 h-10 p-2"
          />
          <div className="absolute -top-1 flex items-center justify-center text-sm px-1 -right-0 bg-white h-5 text-black rounded-full">20</div>
        </button>

        {/* <LuUser
          size={25}
          className="icon-hover cursor-pointer duration-500 rounded-full flex items-center justify-center w-10 h-10 p-2"
        /> */}

        <Image src="/profile.png" alt="" width={30} height={30} className="rounded-full" />

      </div>
    </div>
  );
}
