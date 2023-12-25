import React from "react";
import RingLoader from "react-spinners/RingLoader";
import PropTypes from "prop-types";

const RingSpinner = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="z-[100000] ">
          <div className="flex">
            <RingLoader color="white" loading={isLoading} size={60} />
          </div>
        </div>
      )}
    </>
  );
};

RingSpinner.propTypes = {
  isLoading: PropTypes.bool,
};
export default RingSpinner;
