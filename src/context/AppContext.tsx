import React, { useEffect, useMemo, useReducer } from "react";
import { UserData, AppState, AppReducerActions, AppActions } from "../types";
import { baseUrl, getAppUsers } from "../api";
import { ApplicationContext, initialState } from ".";
import axios from "axios";
import useAuthGuard from "../hooks/useAuthGuard";

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
      console.log("Getting users");
      if (action.payload) {
        return { ...state, appUsers: action.payload.appUsers };
      } else {
        console.error("payload required");
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
  const { getSession } = useAuthGuard();
  const session = useMemo(() => getSession(), []);
  useEffect(() => {
    let controller: AbortController | null = null;
    // Get app users if admin is logged in
    console.log("useEffect");
    if (appState.currentUser || session) {
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
  }, [appState.currentUser, session]);
  return (
    <ApplicationContext.Provider
      value={{
        ...appState,
        dispatch: appDispatch,
        session: session,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
export default AppContext;
