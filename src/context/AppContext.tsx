import React, { useEffect, useReducer } from "react";
import { UserData, AppState, AppReducerActions, AppActions } from "../types";
import { baseUrl, getAppUsers } from "../api";
import { ApplicationContext, initialState } from ".";
import axios from "axios";

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

    case "ADDUSERS":
      if (state.currentUser) {
        console.log("Getting users");
        if (action.payload) {
          return { ...state, appUsers: action.payload.appUsers };
        }
        console.error("payload required");
      } else {
        console.error("no user logged in");
        return state;
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
    let controller: AbortController | null = null;
    // Get app users if admin is logged in
    console.log("useEffect");
    if (appState.currentUser) {
      console.log("starting Process");
      controller = new AbortController();
      axios
        .get(baseUrl, {
          signal: controller.signal,
        })
        .then((value) => {
          console.log(value.data);
          appDispatch({
            type: "ADDUSERS",
            payload: { ...appState, appUsers: value.data },
          });
        })
        .catch((err) => console.error(err));
    }
    return () => {
      // Cancel request if state unmounts
      if (controller) controller.abort();
    };
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
