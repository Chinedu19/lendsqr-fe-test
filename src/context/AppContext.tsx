import React, { useEffect, useReducer } from "react";
import { UserData, AppState, AppReducerActions, AppActions } from "../types";
import { getAppUsers } from "../api";
import { ApplicationContext, initialState } from ".";

const userInfoReducer = (
  state: AppState,
  action: AppReducerActions<AppState, AppActions>
): AppState => {
  switch (action.type) {
    case "LOGIN":
      if (action.payload) {
        return { ...state, currentUser: action.payload.currentUser };
      } else {
        console.error("payload is required");
      }
    case "LOGOUT":
      return initialState;

    case "GETUSERS":
      if (state.currentUser) {
        getAppUsers()
          .then((data: UserData) => {
            return { ...state, appUsers: data };
          })
          .catch((err) => {
            console.error(err);
            return { ...state, appUsers: [] };
          });
      }

    default:
      return state;
  }
};
type AppContextProps = {
  children: React.ReactNode;
};
const AppContext = ({ children }: AppContextProps) => {
  const [appState, appDispatch] = useReducer(userInfoReducer, initialState);

  useEffect(() => {
    // Get app users if admin is logged in
    if (appState.currentUser) {
      appDispatch({ type: "GETUSERS" });
    }
  }, [appState.currentUser]);
  return (
    <ApplicationContext.Provider
      value={{
        ...appState,
        dispatch: appDispatch,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
export default AppContext;
