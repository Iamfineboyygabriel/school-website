import React from "react";
import { Link } from "react-router-dom";

const Upload = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Admin Upload All Lectures</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ margin: "1rem", textAlign: "center" }}>
          <Link to="/jss1">
            <div className="classBox">JSS1</div>
          </Link>
        </div>
        <div style={{ margin: "1rem", textAlign: "center" }}>
          <Link to="/jss2">
            <div className="classBox">JSS2</div>
          </Link>
        </div>
        <div style={{ margin: "1rem", textAlign: "center" }}>
          <Link to="/jss3">
            <div className="classBox">JSS3</div>
          </Link>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ margin: "1rem", textAlign: "center" }}>
          <Link to="/sss1">
            <div className="classBox">SSS1</div>
          </Link>
        </div>
        <div style={{ margin: "1rem", textAlign: "center" }}>
          <Link to="/sss2">
            <div className="classBox">SSS2</div>
          </Link>
        </div>
        <div style={{ margin: "1rem", textAlign: "center" }}>
          <Link to="/sss3">
            <div className="classBox">SSS3</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Upload;
