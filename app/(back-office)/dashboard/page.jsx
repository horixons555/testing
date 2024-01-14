import React from "react";
import Heading from "./../../../components/back-office/Heading";
import LargeCads from "./../../../components/back-office/LargeCards";
import SmallCards from "./../../../components/back-office/SmallCards";
import DashboardCharts from "./../../../components/back-office/DashboardCharts";
import CustomDataTable from "./../../../components/back-office/CustomeDataTable";

export default function page() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      <LargeCads />
      <SmallCards />
      <DashboardCharts />
      <CustomDataTable />
    </div>
  );
}
