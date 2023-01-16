import React from "react";

type UserTabsProps = {
  active: "";
};

const UserTabs = (props: UserTabsProps) => {
  return (
    <div className="p-[30px] my-4 user-card rounded-lg space-y-[30px]">
      <div className="border-b border-b-primary/10 pb-[30px]">
        <h2 className="font-medium text-base text-primary mb-[30px]">
          Personal Information
        </h2>
        <div className="grid grid-cols-5 gap-[30px]">
          <InfoItem title="Full name" desc="Grace Effiom" />
          <InfoItem title="Phone Number" desc="07060780922" />
          <InfoItem title="Email Address" desc="grace@gmail.com" />
          <InfoItem title="BVN" desc="07060780922" />
          <InfoItem title="Gender" desc="Female" />
          <InfoItem title="Marital status" desc="Single" />
          <InfoItem title="Children" desc="None" />
          <InfoItem title="Type of residence" desc="Parent’s Apartment" />
        </div>
      </div>
      <div className="border-b border-b-primary/10 pb-[30px]">
        <h2 className="font-medium text-base text-primary mb-[30px]">
          Education and Employment
        </h2>
        <div className="grid grid-cols-4 gap-[30px]">
          <InfoItem title="level of education" desc="Grace Effiom" />
          <InfoItem title="employment status" desc="07060780922" />
          <InfoItem title="sector of employment" desc="grace@gmail.com" />
          <InfoItem title="Duration of employment" desc="07060780922" />
          <InfoItem title="office email" desc="Female" />
          <InfoItem title="Monthly income" desc="Single" />
          <InfoItem title="loan repayment" desc="None" />
        </div>
      </div>
      <div className="border-b border-b-primary/10 pb-[30px]">
        <h2 className="font-medium text-base text-primary mb-[30px]">
          Socials
        </h2>
        <div className="grid grid-cols-3 gap-y-[30px] gap-x-4">
          <InfoItem title="Twitter" desc="Grace Effiom" />
          <InfoItem title="Facebook" desc="07060780922" />
          <InfoItem title="instagram" desc="grace@gmail.com" />
        </div>
      </div>
      <div className="border-b border-b-primary/10 pb-[30px]">
        <h2 className="font-medium text-base text-primary mb-[30px]">
          Guarantor
        </h2>
        <div className="grid grid-cols-4 gap-y-[30px]">
          <InfoItem title="full Name" desc="Grace Effiom" />
          <InfoItem title="Phone Number" desc="07060780922" />
          <InfoItem title="Email Address" desc="grace@gmail.com" />
          <InfoItem title="Relationship" desc="grace@gmail.com" />
        </div>
      </div>
      <div className="">
        <h2 className="font-medium text-base text-primary mb-[30px]"></h2>
        <div className="grid grid-cols-4 gap-[30px]">
          <InfoItem title="full Name" desc="Grace Effiom" />
          <InfoItem title="Phone Number" desc="07060780922" />
          <InfoItem title="Email Address" desc="grace@gmail.com" />
          <InfoItem title="Relationship" desc="grace@gmail.com" />
        </div>
      </div>
    </div>
  );
};

interface InfoProps {
  title: string;
  desc: string;
}
const InfoItem = ({ title, desc }: InfoProps) => {
  return (
    <div className="space-y-[8px]">
      <h3 className="text-subprimary text-xs uppercase">{title}</h3>
      <p className="text-subprimary text-base font-medium">{desc}</p>
    </div>
  );
};
export default UserTabs;
