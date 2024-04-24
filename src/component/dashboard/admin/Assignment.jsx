import React from "react";
import styles from "./scss/allstudent.module.scss";
import { Link } from "react-router-dom"; // Import Link for routing
import nodata from "../../../assets/svg/nodata.svg";

const Assignment = ({ assignments, handleViewSubmission }) => {
  // Demo assignments data
  const demoAssignments = [
    {
      id: 1,
      studentName: "John Doe",
      assignmentName: "React Project",
      dueDate: "2024-04-20",
      submitted: true,
    },
    {
      id: 2,
      studentName: "Jane Smith",
      assignmentName: "JavaScript Exercise",
      dueDate: "2024-04-25",
      submitted: false,
    },
    // Add more demo assignments as needed
  ];

  // Use demo assignments if actual assignments data is not provided
  assignments = assignments || demoAssignments;

  // Handle potential missing data gracefully
  if (!assignments || assignments.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <img
          src={nodata}
          alt="No assignments"
          style={{ width: "18em", height: "18em" }} // Adjust the size as needed
        />
        <div
          style={{ fontFamily: "italic", color: "orangered", fontSize: "bold" }}
        >
          No assignments available.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.content}>
      <h2 style={{ display: "flex", justifyContent: "center" }}>Assignments</h2>
      <table className={styles.studentTable}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Assignment Name</th>
            <th>Due Date</th>
            <th>Submitted</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment.id}>
              <td>{assignment.studentName}</td>
              <td>{assignment.assignmentName}</td>
              <td>{assignment.dueDate}</td>
              <td>{assignment.submitted ? "Yes" : "No"}</td>
              <td>
                <Link to={`/assignments/${assignment.id}`}>
                  View Submission
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Assignment;
