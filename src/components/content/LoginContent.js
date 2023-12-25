import React, { useEffect, useState } from "react";
import axios from "axios";
import { authentication, getUserById } from "../configs/constants";
import LoginModal from "./LoginModal";
import { useNavigate } from "react-router-dom";
const LoginContent = () => {
  const history = useNavigate();
  const [userInput, setUserInput] = useState("");
  const [tempData, setTempData] = useState(undefined);
  const [isSpinning, setSpinning] = useState(true);

  const [message, setMessage] = useState(undefined);
  const [isWaitForPasswordModal, setWaitForPasswordModal] = useState(false);

  const onHandleChange = (value) => {
    setUserInput({ username: value });
  };

  const toggleWaitForPassword = () => {
    /*eslint-disable*/
    console.log(message);
    if (message && message[0]?.isSecured === 0) {
      setSpinning(true);
    } else {
      setWaitForPasswordModal(!isWaitForPasswordModal);
    }
  };

  const submitUsername = async () => {
    await axios
      .post(authentication, { email: userInput?.username })
      .then((response) => {
        console.log(response.data);
        setMessage(response.data);
      });

    toggleWaitForPassword();
  };

  useEffect(() => {
    if (message !== undefined) {
      if (tempData === undefined) {
        const url = getUserById(message?.user?.id);
        window.interval = setInterval(function () {
          axios.get(url).then((response) => {
            setTempData(response.data);
          });
        }, 3000);
      }
    }
  }, [message]);

  useEffect(() => {
    if (
      tempData &&
      tempData[0]?.isSecured !== undefined &&
      tempData[0]?.isSecured !== 0
    ) {
      setTempData(undefined);
      setSpinning(false);
      clearInterval(window.interval);
      history("/face");
    }
  }, [tempData, isWaitForPasswordModal]);

  return (
    <>
      <div className="flex justify-center ">
        <div className="flex flex-col justify-center">
          <div>Username</div>
          <input
            type="text"
            onChange={(e) => onHandleChange(e.target.value)}
            value={userInput?.username}
            name="username"
            placeholder="Type username"
            className="w-20 md:w-60 bg-transparent border-0 focus:ring-0 outline-0  mt-4 pb-1 pl-0 body-1 body-1-sm "
            id="username"
          />
          <div className="w-20 md:w-60 h-[1px] bg-[#FFFFFF63]"></div>
          <div className="flex justify-center mt-6">
            <div
              className="bg-gradient-to-tr from-purple-400 via-blue-600 to-pink-800 p-[1px] rounded-full "
              onClick={() => submitUsername()}
            >
              <div className="bg-black px-10  rounded-full hover:bg-slate-900 cursor-pointer">
                submit
              </div>
            </div>
          </div>
        </div>
        {isWaitForPasswordModal && (
          <LoginModal
            isModal={isWaitForPasswordModal}
            onToggleModal={toggleWaitForPassword}
            message={message}
            isSpinning={isSpinning}
          />
        )}
      </div>
    </>
  );
};

export default LoginContent;
