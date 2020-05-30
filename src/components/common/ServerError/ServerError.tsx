import React from "react";

const ServerError = ({ errorMsg = "" }) => {
  return (
    <div style={{ textAlign: "center", margin: 8, color: "red" }}>
      {errorMsg || "Opps! Something went wrong. Please try again later."}
    </div>
  );
};

export default ServerError;
