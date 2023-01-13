import React, { Fragment } from "react";
import Logo from "../assets/logo.svg";
import SearchBar from "./SearchBar";
import {
  HiOutlineBell,
  HiOutlineCog,
  HiOutlineLogout,
  HiUser,
} from "react-icons/hi";
import { AiFillCaretDown } from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import useAppContext from "../hooks/useAppContext";
type NavbarProps = {};
const demoImgUrl = "https://picsum.photos/200";
const Navbar = ({}: NavbarProps) => {
  const { currentUser } = useAppContext();
  return (
    <div className="flex items-center justify-between bg-white shadow-md p-[30px] z-50">
      <img src={Logo} className="" />
      <SearchBar className="-ml-5" />
      <div className="flex items-center space-x-5">
        <p className="text-base underline text-primary mr-4">Docs</p>
        <HiOutlineBell size={22} className="text-primary" />
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center rounded-md text-base font-medium text-primary hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <img
                src={demoImgUrl}
                className="w-[48px] h-[48px] rounded-full mr-5"
              />
              {currentUser?.name}
              <AiFillCaretDown
                className="ml-1 -mr-1 text-primary hover:text-primary/90"
                size={10}
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-secondary text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <HiUser className="mr-2 h-5 w-5" aria-hidden="true" />
                      Profile
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-secondary text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <HiOutlineCog
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      Settings
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-secondary text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <HiOutlineLogout
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
