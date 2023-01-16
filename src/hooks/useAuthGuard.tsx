import React from "react";
import { useSessionStorage } from "usehooks-ts";
import { CurrentUser } from "../types";

const useAuthGuard = () => {
  const [value, setValue] = useSessionStorage<CurrentUser | null>(
    "lendsqr-user",
    null
  );
  const getSession = () => {
    return value;
  };
  const setSession = (user: CurrentUser | null) => {
    setValue(user);
  };
  return {
    getSession,
    setSession,
  };
};

export default useAuthGuard;
