import React, { useState } from "react";
import StudentSideBar from "../../../component/dashboard/layout/studentlayout/StudentSideBar";
import TableContent from "../tableofcontents/TermContent";
import SchemeOfWork from "../tableofcontents/Schemeofwork";
import styles from "./css/term.module.scss";

const Jss1ThirdTerm = () => {
  const data = [
    {
      term: "Third Term",
      class: "JSS1",
      subject: "Agricultural Science",
    },
    { term: "Third Term", class: "JSS1", subject: "Basic Science" },
    { term: "Third Term", class: "JSS1", subject: "Basic Technology" },
    { term: "Third Term", class: "JSS1", subject: "Business Studies" },
    {
      term: "Third Term",
      class: "JSS1",
      subject: "Christian Religioud Studies (CRS)",
    },
    { term: "Third Term", class: "JSS1", subject: "Civic Education" },
    { term: "Third Term", class: "JSS1", subject: "Computer Studies" },
    {
      term: "Third Term",
      class: "JSS1",
      subject: "Cultural and Creative Art",
    },
    { term: "Third Term", class: "JSS1", subject: "English Studies" },
    { term: "Third Term", class: "JSS1", subject: "Home Economics" },
    { term: "Third Term", class: "JSS1", subject: "Mathematics" },
    { term: "Third Term", class: "JSS1", subject: "Music" },
    {
      term: "Third Term",
      class: "JSS1",
      subject: "Physcal and Health Education",
    },
    { term: "Third Term", class: "JSS1", subject: "Social Studies" },
  ];
  const selectedTerm = "Third Term";
  const selectedClass = "JSS1";

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

export default Jss1ThirdTerm;
