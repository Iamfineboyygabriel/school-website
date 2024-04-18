import React, { useState } from "react";
import StudentSideBar from "../../../component/dashboard/layout/studentlayout/StudentSideBar";
import TableContent from "../tableofcontents/TermContent";
import SchemeOfWork from "../tableofcontents/Schemeofwork";
import styles from "../jss1/css/term.module.scss";

const SS3ThirdTerm = () => {
  const data = [
    {
      term: "Third Term",
      class: "SS3",
      subject: "Agricultural Science",
    },
    { term: "Third Term", class: "SS3", subject: "Animal Husbandry" },
    { term: "Third Term", class: "SS3", subject: "Biology" },
    { term: "Third Term", class: "SS3", subject: "Chemistry" },
    {
      term: "Third Term",
      class: "SS3",
      subject: "Catering and craft Practice",
    },
    {
      term: "Third Term",
      class: "SS3",
      subject: "Christian Religious Studies (CRS)",
    },
    { term: "Third Term", class: "SS3", subject: "Civic Education" },
    {
      term: "Third Term",
      class: "SS3",
      subject: "Commerce",
    },
    { term: "Third Term", class: "SS3", subject: "Computer Science/ICT" },
    { term: "Third Term", class: "SS3", subject: "Data Processing" },
    { term: "Third Term", class: "SS3", subject: "Economics" },
    { term: "Third Term", class: "SS3", subject: "English Language" },
    {
      term: "Third Term",
      class: "SS3",
      subject: "Financial Accounting",
    },
    { term: "Third Term", class: "SS3", subject: "General Mathematics" },
    { term: "Third Term", class: "SS3", subject: "Geography" },
    { term: "Third Term", class: "SS3", subject: "Government" },
    { term: "Third Term", class: "SS3", subject: "Literature in English" },
    { term: "Third Term", class: "SS3", subject: "Physics" },
  ];
  const selectedTerm = "Third Term";
  const selectedClass = "SS3";

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
          <h2>Subject(s) For SS3 Third-Term</h2>
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

export default SS3ThirdTerm;
