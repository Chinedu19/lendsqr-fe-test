import React, { useState } from "react";
import { CgArrowLongLeft } from "react-icons/cg";
import StarRatings from "react-star-ratings";
import UserTabs from "./UserTab";
import classNames from "classnames";
type UserInfoProps = {};

export const UserInfo = ({}: UserInfoProps) => {
  const [active, setActive] = useState<
    "general" | "documents" | "bank" | "loans" | "savings" | "app"
  >("general");
  return (
    <div>
      <div className="flex items-center space-x-2">
        <CgArrowLongLeft />
        <span className="text-subprimary text-base">Back to Users</span>
      </div>
      <div className="flex items-center justify-between mb-[40px]">
        <h5 className="text-primary font-medium text-2xl mb-[40px]">Users</h5>
        <div className="flex space-x-3 ">
          <button className="border border-[#E4033B] py-3 px-4 text-sm text-[#E4033B] rounded-lg font-semibold uppercase">
            Blacklist User
          </button>
          <button className="border border-secondary py-3 px-4 text-sm !text-secondary rounded-lg font-semibold uppercase">
            Activate User
          </button>
        </div>
      </div>
      <div className="p-[30px] pb-[0] user-card bg-white">
        <div className="flex items-center space-x-3">
          <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full bg-primary/[0.16]">
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.04053 31.1796C2.47961 28.2202 3.79365 25.6264 5.97961 23.4C8.74053 20.6 12.0732 19.2 15.9796 19.2C19.886 19.2 23.2204 20.6 25.9796 23.4C28.1796 25.6266 29.5062 28.2204 29.9593 31.1796M24.1405 10.0204C24.1405 12.247 23.3468 14.1532 21.7593 15.7408C20.1734 17.3408 18.253 18.1408 16.0001 18.1408C13.7594 18.1408 11.8409 17.3408 10.2409 15.7408C8.65337 14.1533 7.85965 12.247 7.85965 10.0204C7.85965 7.76727 8.65341 5.84679 10.2409 4.25959C11.8409 2.67367 13.7596 1.87991 16.0001 1.87991C18.2532 1.87991 20.1737 2.67367 21.7593 4.25959C23.3468 5.84711 24.1405 7.76739 24.1405 10.0204Z"
                stroke="#213F7D"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="">
            <h2 className="text-[22px] text-primary font-medium">
              Grace Effiom
            </h2>
            <p className="text-sm text-subprimary">LSQFf587g90</p>
          </div>
          <div className="border-x self-stretch border-x-subprimary/20 flex flex-col justify-center px-4">
            <h3 className="text-sm text-subprimary font-medium">User’s Tier</h3>
            <StarRatings
              numberOfStars={3}
              rating={1}
              starSpacing="5px"
              starDimension="14px"
              starRatedColor="#E9B200"
            />
            <div className="flex"></div>
          </div>
          <div className="">
            <p className="block text-primary font-medium text-[22px]">
              ₦200,000.00
            </p>
            <span className="text-primary">9912345678/Providus Bank</span>
          </div>
        </div>
        <div className="mt-[50px] px-[30px] grid grid-cols-6 gap-x-10">
          <div
            className={classNames(
              `cursor-pointer border-b border-b-transparent transition-all`,
              { "!border-b-secondary": active === "general" }
            )}
            onClick={() => {
              setActive("general");
            }}
          >
            <p
              className={classNames(
                `text-black/80 text-center transition-all`,
                { "!text-secondary": active === "general" }
              )}
            >
              General Details
            </p>
          </div>
          <div
            className={classNames(
              `cursor-pointer border-b border-b-transparent transition-all`,
              { "!border-b-secondary": active === "documents" }
            )}
            onClick={() => {
              setActive("documents");
            }}
          >
            <p
              className={classNames(
                `text-black/80 text-center transition-all`,
                { "!text-secondary": active === "documents" }
              )}
            >
              Documents
            </p>
          </div>
          <div
            className={classNames(
              `cursor-pointer border-b border-b-transparent transition-all`,
              { "!border-b-secondary": active === "bank" }
            )}
            onClick={() => {
              setActive("bank");
            }}
          >
            <p
              className={classNames(
                `text-black/80 text-center transition-all`,
                { "!text-secondary": active === "bank" }
              )}
            >
              Bank Details
            </p>
          </div>
          <div
            className={classNames(
              `cursor-pointer border-b border-b-transparent transition-all`,
              { "!border-b-secondary": active === "loans" }
            )}
            onClick={() => {
              setActive("loans");
            }}
          >
            <p
              className={classNames(
                `text-black/80 text-center transition-all`,
                { "!text-secondary": active === "loans" }
              )}
            >
              Loans
            </p>
          </div>
          <div
            className={classNames(
              `cursor-pointer border-b border-b-transparent transition-all`,
              { "!border-b-secondary": active === "savings" }
            )}
            onClick={() => {
              setActive("savings");
            }}
          >
            <p
              className={classNames(
                `text-black/80 text-center transition-all`,
                { "!text-secondary": active === "savings" }
              )}
            >
              Savings
            </p>
          </div>
          <div
            className={classNames(
              `cursor-pointer border-b border-b-transparent transition-all`,
              { "!border-b-secondary": active === "app" }
            )}
            onClick={() => {
              setActive("app");
            }}
          >
            <p
              className={classNames(
                `text-black/80 text-center transition-all`,
                { "!text-secondary": active === "app" }
              )}
            >
              App and System
            </p>
          </div>
        </div>
      </div>

      <UserTabs active="" />
    </div>
  );
};
