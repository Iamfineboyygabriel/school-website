import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./scss/classsubjecttopicupload.module.scss";
import { SchemeOfWorkData } from "../../../classes/tableofcontents/SchemeOfWorkData"; // Import the scheme of work data

const ClassSubjectsTopicsUpload = () => {
  // Get class grade and term from URL params
  const { classGrade, term: termFormatted } = useParams();
  const term = termFormatted.replace(" ", ""); // Remove spaces to match the structure in SchemeOfWorkData

  // Retrieve subjects and topics based on class grade and term from the scheme of work data
  const subjects = SchemeOfWorkData[classGrade]?.[term];

  // State to track if inputs are filled for each row
  const [isRowFilled, setIsRowFilled] = useState(
    Array(subjects.length).fill(false)
  );
  // If subjects or topics are not found, display an error message
  if (!subjects) {
    return <div>No data available for the selected class grade and term.</div>;
  }

  // Function to handle file input change
  const handleInputChange = (index, field) => {
    // Update the respective field in the row
    const updatedRowFilled = [...isRowFilled];
    updatedRowFilled[index] = { ...updatedRowFilled[index], [field]: true };
    setIsRowFilled(updatedRowFilled);
  };

  // Function to handle submit button click
  const handleSubmit = (index) => {
    // Logic to handle submission
    console.log(`Submitting data for week ${subjects[index].week}`);
  };

  return (
    <div className={styles.container}>
      <h1>{`${classGrade} - ${termFormatted}`}</h1>
      {Object.entries(subjects).map(([subjectName, topics], index) => (
        <div key={index} className={styles.containerinside}>
          <h2>{subjectName}</h2>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead className="thread">
              <tr className="thread">
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    color: "#064e3b",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Week
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    color: "#064e3b",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Topic
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    color: "#064e3b",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Upload Video
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    color: "#064e3b",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Upload Document
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    color: "#064e3b",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Upload Assignment
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    color: "#064e3b",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {topics.map((topic, topicIndex) => (
                <tr key={topicIndex}>
                  <td
                    style={{
                      border: "1px solid #ddd",
                      padding: "3em",
                      color: "#064e3b",
                    }}
                  >
                    {topic.week}
                  </td>
                  <td
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      color: "#064e3b",
                    }}
                  >
                    {topic.topics}
                  </td>
                  <td
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      color: "#064e3b",
                    }}
                  >
                    <input
                      type="file"
                      accept="video/*"
                      onChange={() => handleInputChange(topicIndex, "video")}
                    />
                  </td>
                  <td
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      color: "#064e3b",
                    }}
                  >
                    <input
                      type="file"
                      accept=".doc,.docx,.pdf"
                      onChange={() => handleInputChange(topicIndex, "document")}
                    />
                  </td>
                  <td
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      color: "#064e3b",
                    }}
                  >
                    <input
                      type="file"
                      accept=".doc,.docx,.pdf"
                      onChange={() =>
                        handleInputChange(topicIndex, "assignment")
                      }
                    />
                  </td>
                  <td
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      color: "#064e3b",
                    }}
                  >
                    <button
                      className={styles.submitButton}
                      onClick={() => handleSubmit(topicIndex)}
                      disabled={
                        !isRowFilled[topicIndex]?.video ||
                        !isRowFilled[topicIndex]?.document ||
                        !isRowFilled[topicIndex]?.assignment
                      }
                    >
                      Submit
                    </button>
                    <button className={styles.editButton}>Edit</button>
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
