import React, { useState } from "react";
import StudentSideBar from "../../../component/dashboard/layout/studentlayout/StudentSideBar";
import TableContent from "../tableofcontents/TermContent";
import SchemeOfWork from "../tableofcontents/Schemeofwork";
import styles from "../jss1/scss/term.module.scss";

const SS3SecondTerm = () => {
  const data = [
    {
      term: "First Term",
      class: "SS3",
      subject: "Agricultural Science",
    },
    { term: "First Term", class: "SS3", subject: "Animal Husbandry" },
    { term: "First Term", class: "SS3", subject: "Biology" },
    { term: "First Term", class: "SS3", subject: "Chemistry" },
    {
      term: "First Term",
      class: "SS3",
      subject: "Catering and craft Practice",
    },
    {
      term: "First Term",
      class: "SS3",
      subject: "Christian Religious Studies (CRS)",
    },
    { term: "First Term", class: "SS3", subject: "Civic Education" },
    {
      term: "First Term",
      class: "SS3",
      subject: "Commerce",
    },
    { term: "First Term", class: "SS3", subject: "Computer Science/ICT" },
    { term: "First Term", class: "SS3", subject: "Data Processing" },
    { term: "First Term", class: "SS3", subject: "Economics" },
    { term: "First Term", class: "SS3", subject: "English Language" },
    {
      term: "First Term",
      class: "SS3",
      subject: "Financial Accounting",
    },
    { term: "First Term", class: "SS3", subject: "General Mathematics" },
    { term: "First Term", class: "SS3", subject: "Geography" },
    { term: "First Term", class: "SS3", subject: "Government" },
    { term: "First Term", class: "SS3", subject: "Literature in English" },
    { term: "First Term", class: "SS3", subject: "Physics" },
  ];
  const selectedTerm = "First Term";
  const selectedClass = "SS3";

  // Define state to track the selected subject
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Define the function to handle subject clicsk
  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <StudentSideBar>
      <div className={styles.header}>
        <div>
          <h2>Subject(s) For SS3 First-Term</h2>
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

export default SS3SecondTerm;
