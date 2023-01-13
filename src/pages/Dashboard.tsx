import React from "react";
import Logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

type DashboardProps = {};

const Dashboard = ({}: DashboardProps) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-[60px]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
