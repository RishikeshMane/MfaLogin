import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import RingSpinner from "../common/RingSpinner";

const LoginModal = ({ isModal, onToggleModal, message, isSpinning }) => {
  const [passwordMessage, setPasswordMessage] = useState(
    "waiting for password..."
  );
  useEffect(() => {
    if (!isSpinning) {
      setPasswordMessage("password created successfully...");
    }
  }, [isSpinning]);
  return (
    <Modal
      isOpen={isModal}
      ariaHideApp={false}
      onRequestClose={onToggleModal}
      overlayClassName="f-modal-overlay"
      shouldCloseOnOverlayClick={true}
      className="price-breakout-modal w-[min(60%,450px)]"
    >
      <div className="text-white p-2 text-lg flex flex-col justify-center text-center transition-all">
        <div className="flex justify-between">
          <div className="">Login modal</div>
          <div
            className=" flex justify-end cursor-pointer"
            onClick={onToggleModal}
          >
            X
          </div>
        </div>
        <div className="w-full flex flex-col justify-center pt-6">
          <div className="flex justify-center py-4 text-blue-400">
            {" "}
            {message && message?.message}
          </div>
          {isSpinning && (
            <div className="flex justify-center">
              <h2 className="text-7xl text-blue-700 font-extrabold">
                {message && message?.user?.auth_code}
              </h2>
            </div>
          )}
          <div className="">{passwordMessage}</div>
          <div className="flex justify-center pt-2">
            <RingSpinner isLoading={isSpinning} />
          </div>
        </div>
      </div>
    </Modal>
  );
};
LoginModal.propTypes = {
  isModal: PropTypes.bool,
  onToggleModal: PropTypes.func,
  message: PropTypes.object,
  isSpinning: PropTypes.bool,
};

export default LoginModal;
