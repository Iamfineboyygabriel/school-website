import React from "react";
import { useParams } from "react-router-dom";
import { SchemeOfWorkData } from "../../../classes/tableofcontents/SchemeOfWorkData"; // Import the scheme of work data

const ClassSubjectsTopicsUpload = () => {
  // Get class grade and term from URL params
  const { classGrade, term: termFormatted } = useParams();
  const term = termFormatted.replace(" ", ""); // Remove spaces to match the structure in SchemeOfWorkData

  // Retrieve subjects and topics based on class grade and term from the scheme of work data
  const subjects = SchemeOfWorkData[classGrade]?.[term];

  // If subjects or topics are not found, display an error message
  if (!subjects) {
    return <div>No data available for the selected class grade and term.</div>;
  }

  return (
    <div>
      <h1
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          color: "#064e3b",
          fontFamily: "Roboto, sans-serif",
        }}
      >{`${classGrade} - ${termFormatted}`}</h1>
      {Object.entries(subjects).map(([subjectName, topics], index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2
            style={{
              color: "#064e3b",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            {subjectName}
          </h2>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Week
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Topic
                </th>
              </tr>
            </thead>
            <tbody>
              {topics.map((topic, topicIndex) => (
                <tr key={topicIndex} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {topic.week}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {topic.topics}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ClassSubjectsTopicsUpload;
