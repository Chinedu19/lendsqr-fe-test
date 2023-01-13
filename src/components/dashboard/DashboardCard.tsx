import React from "react";

type DashboardCardProps = {
  iconSrc: string;
  title: string;
  number: number | string;
};

const DashboardCard = ({ iconSrc, title, number }: DashboardCardProps) => {
  return (
    <div className="bg-white mr-4 w-[240px] user-card rounded p-[30px] pt-[20px]">
      <img src={iconSrc} />
      <h4 className="text-subprimary text-sm font-medium mt-[14px] mb-3">
        {title}
      </h4>
      <p className="text-primary text-2xl font-semibold rounded">
        {number.toLocaleString()}
      </p>
    </div>
  );
};

export default DashboardCard;
