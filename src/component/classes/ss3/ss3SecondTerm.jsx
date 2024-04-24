import React, { useState } from "react";
import StudentSideBar from "../../../component/dashboard/layout/studentlayout/StudentSideBar";
import TableContent from "../tableofcontents/TermContent";
import SchemeOfWork from "../tableofcontents/Schemeofwork";
import styles from "../jss1/scss/term.module.scss";

const SS3ThirdTerm = () => {
  const data = [
    {
      term: "Second Term",
      class: "SS3",
      subject: "Agricultural Science",
    },
    { term: "Second Term", class: "SS3", subject: "Animal Husbandry" },
    { term: "Second Term", class: "SS3", subject: "Biology" },
    { term: "Second Term", class: "SS3", subject: "Chemistry" },
    {
      term: "Second Term",
      class: "SS3",
      subject: "Catering and craft Practice",
    },
    {
      term: "Second Term",
      class: "SS3",
      subject: "Christian Religious Studies (CRS)",
    },
    { term: "Second Term", class: "SS3", subject: "Civic Education" },
    {
      term: "Second Term",
      class: "SS3",
      subject: "Commerce",
    },
    { term: "Second Term", class: "SS3", subject: "Computer Science/ICT" },
    { term: "Second Term", class: "SS3", subject: "Data Processing" },
    { term: "Second Term", class: "SS3", subject: "Economics" },
    { term: "Second Term", class: "SS3", subject: "English Language" },
    {
      term: "Second Term",
      class: "SS3",
      subject: "Financial Accounting",
    },
    { term: "Second Term", class: "SS3", subject: "General Mathematics" },
    { term: "Second Term", class: "SS3", subject: "Geography" },
    { term: "Second Term", class: "SS3", subject: "Government" },
    { term: "Second Term", class: "SS3", subject: "Literature in English" },
    { term: "Second Term", class: "SS3", subject: "Physics" },
  ];
  const selectedTerm = "Second Term";
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
        <div>s
          <h2>Subject(s) For SS3 Second-Term</h2>
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
