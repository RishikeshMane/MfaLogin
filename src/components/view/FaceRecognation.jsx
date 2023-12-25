import React from "react";

const FaceRecognation = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        data-src={process.env.PUBLIC_URL + "/FaceRecognition/index.html"}
        src={process.env.PUBLIC_URL + "/FaceRecognition/index.html"}
        allowFullScreen={true}
        allow="autoplay"
        data-ll-status="loaded"
        className="w-[100%] h-[90vh] lazy entered loaded"
      ></iframe>
    </div>
  );
};

export default FaceRecognation;
