import React from "react";
import LoginComponent from "./LoginComponent";

const LoginView = () => {
  return (
    <div className=" h-screen ">
      <header className=" text-white py-4 text-center text-2xl">
        MFA Login
      </header>
      <div className="flex justify-center">
        <LoginComponent />
      </div>
    </div>
  );
};

export default LoginView;
