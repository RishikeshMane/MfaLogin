import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Loginfail = () => {
  const [searchParams] = useSearchParams();
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (searchParams.has("user")) {
      setUsername(searchParams.get("user"));
    }
  }, [searchParams]);

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div className="h3-thin text-red-600 font-extrabold">
        Login Failed. Please try again{" "}
      </div>
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

export default Loginfail;
