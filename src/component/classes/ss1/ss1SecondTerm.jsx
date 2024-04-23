import React, { useState } from "react";
import StudentSideBar from "../../../component/dashboard/layout/studentlayout/StudentSideBar";
import TableContent from "../tableofcontents/TermContent";
import SchemeOfWork from "../tableofcontents/Schemeofwork";
import styles from "../jss1/css/term.module.scss";

const SS1SecondTerm = () => {
  const data = [
    {
      term: "SecondTerm",
      class: "SS1",
      subject: "Agricultural Science",
    },
    { term: "SecondTerm", class: "SS1", subject: "Animal Husbandry" },
    { term: "SecondTerm", class: "SS1", subject: "Biology" },
    { term: "SecondTerm", class: "SS1", subject: "Chemistry" },
    {
      term: "SecondTerm",
      class: "SS1",
      subject: "Christian Religious Studies (CRS)",
    },
    { term: "SecondTerm", class: "SS1", subject: "Civic Education" },
    {
      term: "SecondTerm",
      class: "SS1",
      subject: "Commerce",
    },
    { term: "SecondTerm", class: "SS1", subject: "Computer Science/ICT" },
    { term: "SecondTerm", class: "SS1", subject: "Data Processing" },
    { term: "SecondTerm", class: "SS1", subject: "Economics" },
    { term: "SecondTerm", class: "SS1", subject: "English Language" },
    {
      term: "SecondTerm",
      class: "SS1",
      subject: "Financial Accounting",
    },
    { term: "SecondTerm", class: "SS1", subject: "General Mathematics" },
    { term: "SecondTerm", class: "SS1", subject: "Geography" },
    { term: "SecondTerm", class: "SS1", subject: "Government" },
    { term: "SecondTerm", class: "SS1", subject: "Literature in English" },
    { term: "SecondTerm", class: "SS1", subject: "Physics" },
  ];
  const selectedTerm = "SecondTerm";
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
          <h2>Subject(s) For SS1 Second Term</h2>
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

export default SS1SecondTerm;
