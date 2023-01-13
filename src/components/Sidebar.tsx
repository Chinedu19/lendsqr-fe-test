import React, { useState } from "react";
import { sidebarBusiness, sidebarCustomers, siderbarSettings } from "../data";
import Home from "../assets/icons/home 1.svg";
import Briefcase from "../assets/icons/briefcase 1.svg";
import SignOut from "../assets/icons/sign-out 1.svg";
import { AiOutlineDown } from "react-icons/ai";
type SidebarProps = {};

const Sidebar = ({}: SidebarProps) => {
  const [openOrganziation, setOpenOrganization] = useState(false);
  return (
    <aside className="h-screen overflow-y-scroll bg-white sidebar-panel lg:w-[283px]">
      <div className="my-6">
        <div
          onClick={() => setOpenOrganization(!openOrganziation)}
          className="w-full cursor-pointer pl-[28px] border-l-[3px] py-[10px] pb-1 border-transparent flex items-center space-x-3"
        >
          <img src={Briefcase} />
          <p className="text-primary">Switch Organization</p>
          <AiOutlineDown size={10} className="text-primary" />
        </div>
        {openOrganziation && (
          <>
            <div className="w-full cursor-pointer my-3 pl-[28px] border-l-[3px] py-[5px] border-transparent hover:bg-secondary/[0.06] hover:border-secondary flex items-center space-x-3">
              <p className="text-primary text-sm">Meta</p>
            </div>
            <div className="w-full cursor-pointer my-3 pl-[28px] border-l-[3px] py-[5px] border-transparent hover:bg-secondary/[0.06] hover:border-secondary flex items-center space-x-3">
              <p className="text-primary text-sm">Quora</p>
            </div>
          </>
        )}
      </div>
      <div className="w-full cursor-pointer my-3 pl-[28px] border-l-[3px] py-[10px] border-transparent hover:bg-secondary/[0.06] hover:border-secondary flex items-center space-x-3">
        <img src={Home} />
        <p className="text-primary">Dashboard</p>
      </div>
      <div className="">
        <p className="text-xs text-subprimary pl-[30px] uppercase font-medium py-[10px]">
          Customers
        </p>
        {sidebarCustomers.map((item) => (
          <NavItem icon={item.icon} title={item.title} key={item.title} />
        ))}
      </div>
      <div className="py-5">
        <p className="text-xs text-subprimary pl-[30px] uppercase font-medium py-[10px]">
          BUSINESSES
        </p>
        {sidebarBusiness.map((item) => (
          <NavItem icon={item.icon} title={item.title} key={item.title} />
        ))}
      </div>
      <div className="py-5 border-b border-b-primary/10">
        <p className="text-xs text-subprimary pl-[30px] uppercase font-medium py-[10px]">
          SETTINGS
        </p>
        {siderbarSettings.map((item) => (
          <NavItem icon={item.icon} title={item.title} key={item.title} />
        ))}
      </div>
      <div className="py-5">
        <NavItem icon={<img src={SignOut} />} title={"Logout"} />
        <p className="mt-4 text-primary ml-[30px] text-xs">v1.2.0</p>
      </div>
    </aside>
  );
};

type NavItemProps = {
  icon: React.ReactNode;
  title: string;
};
const NavItem = ({ icon, title }: NavItemProps) => {
  return (
    <div className="w-full cursor-pointer pl-[28px] border-l-[3px] py-[10px] border-transparent hover:bg-secondary/[0.06] hover:border-secondary flex items-center space-x-3">
      {icon}
      <p className="text-primary">{title}</p>
    </div>
  );
};

export default Sidebar;
