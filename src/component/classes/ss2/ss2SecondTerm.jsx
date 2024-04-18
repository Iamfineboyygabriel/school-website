import React, { useState } from "react";
import StudentSideBar from "../../../component/dashboard/layout/studentlayout/StudentSideBar";
import TableContent from "../tableofcontents/TermContent";
import SchemeOfWork from "../tableofcontents/Schemeofwork";
import styles from "../jss1/css/term.module.scss";

const SS2SecondTerm = () => {
  const data = [
    {
      term: "Second Term",
      class: "SS2",
      subject: "Agricultural Science",
    },
    { term: "Second Term", class: "SS2", subject: "Animal Husbandry" },
    { term: "Second Term", class: "SS2", subject: "Biology" },
    { term: "Second Term", class: "SS2", subject: "Chemistry" },
    {
      term: "Second Term",
      class: "SS2",
      subject: "Catering and craft Practice",
    },
    {
      term: "Second Term",
      class: "SS2",
      subject: "Christian Religious Studies (CRS)",
    },
    { term: "Second Term", class: "SS2", subject: "Civic Education" },
    {
      term: "Second Term",
      class: "SS2",
      subject: "Commerce",
    },
    { term: "Second Term", class: "SS2", subject: "Computer Science/ICT" },
    { term: "Second Term", class: "SS2", subject: "Data Processing" },
    { term: "Second Term", class: "SS2", subject: "Economics" },
    { term: "Second Term", class: "SS2", subject: "English Language" },
    {
      term: "Second Term",
      class: "SS2",
      subject: "Financial Accounting",
    },
    { term: "Second Term", class: "SS2", subject: "General Mathematics" },
    { term: "Second Term", class: "SS2", subject: "Geography" },
    { term: "Second Term", class: "SS2", subject: "Government" },
    { term: "Second Term", class: "SS2", subject: "Literature in English" },
    { term: "Second Term", class: "SS2", subject: "Physics" },
  ];
  const selectedTerm = "Second Term";
  const selectedClass = "SS2";

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
          <h2>Subject(s) For SS2 Second-Term</h2>
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

export default SS2SecondTerm;
