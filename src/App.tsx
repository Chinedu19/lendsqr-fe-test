import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/dashboard/Users";
import AppContext from "./context/AppContext";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
