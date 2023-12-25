import React from "react";
import LoginContent from "../content/LoginContent";

const LoginComponent = () => {
  return (
    <div
      className="mt-10 w-[50%] bg-black py-10  signup-form
               max-w-sm
               rounded-2xl
               text-[#f6fffc]
               backdrop-blur-lg
               [ p-8 md:p-10 lg:p-10 ]
               
               [ border-[1px] border-solid border-white border-opacity-30 ]
               [ shadow-black/70 shadow-2xl ]"
    >
      <LoginContent />
    </div>
  );
};

export default LoginComponent;
