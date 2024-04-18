import React from "react";
// import styles from "./css/test.module.scss"
import styles from "./css/allstudent.module.scss";

const Test = () => {
  // Dummy data for students who have submitted the test
  const submittedStudents = [
    { id: 1, name: "John Doe", score: 85 },
    { id: 2, name: "Jane Smith", score: 92 },
    { id: 3, name: "Michael Johnson", score: 78 },
    // Add more dummy data as needed
  ];

  return (
    <div className={styles.content}>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Submitted Students
      </h2>
      <table className={styles.studentTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {submittedStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test;
