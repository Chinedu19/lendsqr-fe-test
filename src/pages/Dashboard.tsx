import React, { useEffect } from "react";
import Logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";
import { toast } from "react-toastify";
import useAuthGuard from "../hooks/useAuthGuard";
import "./Dashboard.css";
type DashboardProps = {};

const Dashboard = ({}: DashboardProps) => {
  const appContext = useAppContext();
  const navigate = useNavigate();
  const { getSession } = useAuthGuard();
  const session = getSession();
  useEffect(() => {
    if (!appContext.currentUser && !session) {
      toast.error(`Login session expired, please login`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
    } else {
      toast.success(
        `Welcome back ${appContext?.currentUser?.name || session?.email}`,
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  }, []);

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
