"use client";
import React, { useState } from "react";
import data from "../../data.json";

export default function CustomDataTable() {
  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentlyDisplayedData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / PAGE_SIZE);
  const pageEndIndex = Math.min(startIndex + PAGE_SIZE, data.length);

  function handlePageChange(page) {

  }

  return (
    <div className="mb-10">
      <h2 className="text-white font-semibold text-2xl mt-5">Recent Orders</h2>

      <div className="relative overflow-x-auto mt-5 shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-emerald-600">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 "
                  />
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                ID#
              </th>
              <th scope="col" className="px-6 py-3">
                First name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentlyDisplayedData.map((item, i) => {
              return (
                <tr className="bg-white/5 hover:bg-white/20 border border-gray-700 duration-500">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-3 h-3 text-blue-600 border-none outline-none bg-gray-100 border-gray-300 rounded-full dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-white whitespace-nowrap"
                  >
                    {item.id}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-white whitespace-nowrap"
                  >
                    {item.first_name}
                  </th>
                  <td className="px-6 py-4 text-white">{item.last_name}</td>
                  <td className="px-6 py-4 text-white">{item.email}</td>
                  <td className="px-6 py-4 text-white">{item.gender}</td>
                  <td className="px-6 py-4 text-white">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <nav
          className="flex items-center flex-colum flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-lg font-normal mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing{" "}
            <span className="font-semibold text-yellow-500 mx-1">
              {startIndex + 1} - {pageEndIndex}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-yellow-500 mx-1">
              {data.length}
            </span>
          </span>
          <ul className="inline-flex h-9">
            <li>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage == 1}
                className="h-8 px-3 mx-1 bg-red-400 rounded-lg leading-4 flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>
            </li>

            {
              Array.from({ length: totalPages }, (item, index) => {
                if (index == 10) {
                  return null;
                } else {
                  return (
                    <li key={index}>
                      <button
                        onClick={() => setCurrentPage(index + 1)}
                        className={`h-8 px-3 mx-0.5 rounded-lg 
                        ${currentPage == index + 1 ?
                            "bg-white text-black duration-500" :
                            "bg-slate-600 duration-500"}
                             leading-4 flex items-center justify-center`}>
                        {index + 1}
                      </button>
                    </li>
                  );
                }
              })
            }

            <li>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={totalPages == currentPage}
                className="h-8 px-3 mx-1 bg-red-400 rounded-lg leading-4 flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
