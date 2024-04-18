import React, { useState } from "react";
import StudentSideBar from "../../../component/dashboard/layout/studentlayout/StudentSideBar";
import TableContent from "../tableofcontents/TermContent";
import SchemeOfWork from "../tableofcontents/Schemeofwork";
import styles from "../jss1/css/term.module.scss";

const SS2ThirdTerm = () => {
  const data = [
    {
      term: "Third Term",
      class: "SS2",
      subject: "Agricultural Science",
    },
    { term: "Third Term", class: "SS1", subject: "Animal Husbandry" },
    { term: "Third Term", class: "SS1", subject: "Biology" },
    { term: "Third Term", class: "SS1", subject: "Chemistry" },
    {
      term: "Third Term",
      class: "SS1",
      subject: "Catering and craft Practice",
    },
    {
      term: "Third Term",
      class: "SS1",
      subject: "Christian Religious Studies (CRS)",
    },
    { term: "Third Term", class: "SS1", subject: "Civic Education" },
    {
      term: "Third Term",
      class: "SS1",
      subject: "Commerce",
    },
    { term: "Third Term", class: "SS1", subject: "Computer Science/ICT" },
    { term: "Third Term", class: "SS1", subject: "Data Processing" },
    { term: "Third Term", class: "SS1", subject: "Economics" },
    { term: "Third Term", class: "SS1", subject: "English Language" },
    {
      term: "Third Term",
      class: "SS1",
      subject: "Financial Accounting",
    },
    { term: "Third Term", class: "SS1", subject: "General Mathematics" },
    { term: "Third Term", class: "SS1", subject: "Geography" },
    { term: "Third Term", class: "SS1", subject: "Government" },
    { term: "Third Term", class: "SS1", subject: "Literature in English" },
    { term: "Third Term", class: "SS1", subject: "Physics" },
  ];
  const selectedTerm = "Third Term";
  const selectedClass = "SS1";

  // Define state to track the selected subject
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Define the function to handle subject click
  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <StudentSideBar>
      <div className={styles.header}>
        <div>
          <h2>Subject(s) For SS2 Third-Term</h2>
        </div>
      </div>
      <TableContent
        data={data}
        selectedTerm={selectedTerm}
        selectedClass={selectedClass}
        onSubjectClick={handleSubjectClick}
      />
      {selectedSubject && (
        <SchemeOfWork
          selectedSubject={selectedSubject}
          selectedTerm={selectedTerm}
        />
      )}
    </StudentSideBar>
  );
};

export default SS2ThirdTerm;
