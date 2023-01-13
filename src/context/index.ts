import React, { createContext } from "react";
import { AppContextType } from "../types";

export const initialState = {
  appUsers: [],
  isLoggedIn: false,
  currentUser: null,
};
export const ApplicationContext = createContext<AppContextType>({
  ...initialState,
  dispatch: () => {},
});
