import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const LoginSuccess = () => {
  const [searchParams] = useSearchParams();
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (searchParams.has("user")) {
      setUsername(searchParams.get("user"));
    }
  }, [searchParams]);

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div className="h3-thin text-green-800 font-extrabold">LoginSuccess </div>
      <div className="font-bold text-gray-800">
        {" "}
        Username:{" "}
        <span className="font-extralight border-b-2 border-black px-2">
          {username}
        </span>
      </div>
    </div>
  );
};

export default LoginSuccess;
