import React, { useState } from "react";
import StudentSideBar from "../../../component/dashboard/layout/studentlayout/StudentSideBar";
import TableContent from "../tableofcontents/TermContent";
import SchemeOfWork from "../tableofcontents/Schemeofwork";
import styles from "./css/term.module.scss";

const Jss1SecondTerm = () => {
  const data = [
    {
      term: "SecondTerm",
      class: "JSS1",
      subject: "Agricultural Science",
    },
    { term: "SecondTerm", class: "JSS1", subject: "Basic Science" },
    { term: "SecondTerm", class: "JSS1", subject: "Basic Technology" },
    { term: "SecondTerm", class: "JSS1", subject: "Business Studies" },
    {
      term: "SecondTerm",
      class: "JSS1",
      subject: "Christian Religioud Studies (CRS)",
    },
    { term: "SecondTerm", class: "JSS1", subject: "Civic Education" },
    { term: "SecondTerm", class: "JSS1", subject: "Compter Studies" },
    {
      term: "SecondTerm",
      class: "JSS1",
      subject: "Cultural and Creative Art",
    },
    { term: "SecondTerm", class: "JSS1", subject: "English Studies" },
    { term: "SecondTerm", class: "JSS1", subject: "Home Economics" },
    { term: "SecondTerm", class: "JSS1", subject: "Mathematics" },
    { term: "SecondTerm", class: "JSS1", subject: "Music" },
    {
      term: "SecondTerm",
      class: "JSS1",
      subject: "Physcal and Health Education",
    },
    { term: "SecondTerm", class: "JSS1", subject: "Social Studies" },
  ];
  const selectedTerm = "SecondTerm";
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
          <h2>Subject(s) For JSS1 Second Term</h2>
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

export default Jss1SecondTerm;
