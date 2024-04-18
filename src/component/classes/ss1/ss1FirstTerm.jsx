import React, { useState } from "react";
import StudentSideBar from "../../../component/dashboard/layout/studentlayout/StudentSideBar";
import TableContent from "../tableofcontents/TermContent";
import SchemeOfWork from "../tableofcontents/Schemeofwork";
import styles from "../jss1/css/term.module.scss";

const SS1ThirdTerm = () => {
  const data = [
    {
      term: "First Term",
      class: "SS1",
      subject: "Agricultural Science",
    },
    { term: "First Term", class: "SS1", subject: "Animal Husbandry" },
    { term: "First Term", class: "SS1", subject: "Biology" },
    { term: "First Term", class: "SS1", subject: "Chemistry" },
    {
      term: "First Term",
      class: "SS1",
      subject: "Catering and craft Practice",
    },
    {
      term: "First Term",
      class: "SS1",
      subject: "Christian Religious Studies (CRS)",
    },
    { term: "First Term", class: "SS1", subject: "Civic Education" },
    {
      term: "First Term",
      class: "SS1",
      subject: "Commerce",
    },
    { term: "First Term", class: "SS1", subject: "Computer Science/ICT" },
    { term: "First Term", class: "SS1", subject: "Data Processing" },
    { term: "First Term", class: "SS1", subject: "Economics" },
    { term: "First Term", class: "SS1", subject: "English Language" },
    {
      term: "First Term",
      class: "SS1",
      subject: "Financial Accounting",
    },
    { term: "First Term", class: "SS1", subject: "General Mathematics" },
    { term: "First Term", class: "SS1", subject: "Geography" },
    { term: "First Term", class: "SS1", subject: "Government" },
    { term: "First Term", class: "SS1", subject: "Literature in English" },
    { term: "First Term", class: "SS1", subject: "Physics" },
  ];
  const selectedTerm = "First Term";
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
          <h2>Subject(s) For JSS1 Third-Term</h2>
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

export default SS1ThirdTerm;
