import React, { useState } from "react";
import StudentSideBar from "../../../component/dashboard/layout/studentlayout/StudentSideBar";
import TableContent from "../tableofcontents/TermContent";
import SchemeOfWork from "../tableofcontents/Schemeofwork";
import styles from "../jss1/css/term.module.scss";

const SS1FirstTerm = () => {
  const data = [
    {
      term: "FirstTerm",
      class: "SS1",
      subject: "Agricultural Science",
    },
    // { term: "FirstTerm", class: "SS1", subject: "Animal Husbandry" },
    { term: "FirstTerm", class: "SS1", subject: "Biology" },
    { term: "FirstTerm", class: "SS1", subject: "Chemistry" },
    {
      term: "FirstTerm",
      class: "SS1",
      subject: "Catering and craft Practice",
    },
    {
      term: "FirstTerm",
      class: "SS1",
      subject: "Christian Religious Studies (CRS)",
    },
    { term: "FirstTerm", class: "SS1", subject: "Civic Education" },
    {
      term: "FirstTerm",
      class: "SS1",
      subject: "Commerce",
    },
    { term: "FirstTerm", class: "SS1", subject: "Computer Science/ICT" },
    { term: "FirstTerm", class: "SS1", subject: "Data Processing" },
    { term: "FirstTerm", class: "SS1", subject: "Economics" },
    { term: "FirstTerm", class: "SS1", subject: "English Language" },
    {
      term: "FirstTerm",
      class: "SS1",
      subject: "Financial Accounting",
    },
    { term: "FirstTerm", class: "SS1", subject: "General Mathematics" },
    { term: "FirstTerm", class: "SS1", subject: "Geography" },
    { term: "FirstTerm", class: "SS1", subject: "Government" },
    { term: "FirstTerm", class: "SS1", subject: "Literature in English" },
    { term: "FirstTerm", class: "SS1", subject: "Physics" },
  ];
  const selectedTerm = "FirstTerm";
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
          <h2>Subject(s) For SS1 First Term</h2>
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

export default SS1FirstTerm;
