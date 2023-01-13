import React, { useContext } from "react";
import { ApplicationContext } from "../context";

const useAppContext = () => useContext(ApplicationContext);

export default useAppContext;
