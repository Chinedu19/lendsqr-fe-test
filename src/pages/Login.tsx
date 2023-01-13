import React from "react";
import Hero from "../assets/hero.png";
import Logo from "../assets/logo.svg";
import { Formik, Form } from "formik";
import InputField from "../components/inputs/InputField";
import PasswordField from "../components/inputs/PasswordField";
import * as Yup from "yup";
import useAppContext from "../hooks/useAppContext";

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(4).required(),
});

const Login = () => {
  const app = useAppContext();
  return (
    <div className="w-full flex flex-col md:flex-row bg-white lg:h-screen">
      <div className="w-full lg:w-1/2 lg:pl-[6.25rem] flex flex-col">
        <div className="w-full py-8 pl-10">
          <img src={Logo} className="" />
        </div>
        <div className="w-full h-full flex items-center justify-center relative">
          <img src={Hero} className="w-3/4" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex lg:pl-[6.25rem] flex-col justify-center login-panel">
        <h1 className="text-primary font-bold text-[40px]">Welcome!</h1>
        <p className="text-subprimary font-normal">Enter details to login.</p>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginValidationSchema}
          onSubmit={({ email, password }) => {
            if (email === "admin@mail.com" && password === "admin") {
              console.log("logged in");
            }
          }}
        >
          {() => (
            <Form className="space-y-6 mt-[60px]">
              <InputField name="email" placeholder="Email" />
              <PasswordField name="password" placeholder="Password" />
              <p className="text-secondary uppercase text-xs">
                Forgot Password
              </p>

              <button
                type="submit"
                className="w-full max-w-[447px] bg-secondary text-white rounded-[5px] p-4 uppercase text-sm"
              >
                Log in
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
