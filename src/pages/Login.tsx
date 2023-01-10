import React from "react";
import Hero from "../assets/hero.png";
const Login = () => {
  return (
    <div className="w-full flex flex-col md:flex-row bg-white">
      <div className="flex flex-1 items-center">
        <img src={Hero} className="w-3/4" />
      </div>
      <div className="flex flex-1 justify-center items-center">
        hello my love
      </div>
    </div>
  );
};

export default Login;
