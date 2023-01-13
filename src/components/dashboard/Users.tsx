import React, { useMemo } from "react";
import DashboardCard from "./DashboardCard";
import { UserCardData } from "../../data";
import UserTable from "./UserTable";

type Props = {};

const Users = (props: Props) => {
  const transformedUserInfo = useMemo(() => {
    if (UserCardData) {
      return UserCardData.map((item) => ({ ...item, id: crypto.randomUUID() }));
    }
  }, [UserCardData]);
  return (
    <div>
      <h5 className="text-primary font-medium text-2xl mb-[40px]">Users</h5>
      <div className="flex flex-wrap gap-y-4">
        {transformedUserInfo &&
          transformedUserInfo.map((item) => (
            <DashboardCard
              iconSrc={item.iconSrc}
              title={item.title}
              number={item.number}
              key={item.id}
            />
          ))}
      </div>
      <UserTable />
    </div>
  );
};

export default Users;
