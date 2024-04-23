import React from "react";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const navigate = useNavigate();

  const handleClassTermSelect = (classGrade, term) => {
    navigate(`/upload/${classGrade}/${term}`);
  };

  // Function to render menu items
  const renderMenuItems = (classGrade) => {
    const terms = ["First Term", "Second Term", "Third Term"];
    return (
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {terms.map((term, index) => (
          <li key={index} onClick={() => handleClassTermSelect(classGrade, term)} style={{ cursor: "pointer", marginBottom: "8px" }}>
            {`${classGrade} - ${term}`}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color:"#064e3b", fontFamily:"Roboto,sans-serif" }}>Upload content </h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ddd", padding: "8px",color:"#064e3b", fontFamily:"Roboto,sans-serif" }}>Class Grade</th>
            <th style={{ borderBottom: "1px solid #ddd", padding: "8px",color:"#064e3b", fontFamily:"Roboto,sans-serif" }}>Select Term</th>
          </tr>
        </thead>
        <tbody>
          {["JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"].map((classGrade, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ borderRight: "1px solid #ddd", padding: "8px",color:"#064e3b", fontFamily:"Roboto,sans-serif" }}>{classGrade}</td>
              <td style={{ padding: "8px",color:"#064e3b", fontFamily:"Roboto,sans-serif" }}>{renderMenuItems(classGrade)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Upload;
