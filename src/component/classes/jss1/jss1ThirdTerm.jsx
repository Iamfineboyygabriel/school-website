import React, { useState } from "react";
import StudentSideBar from "../../../component/dashboard/layout/studentlayout/StudentSideBar";
import TableContent from "../tableofcontents/TermContent";
import SchemeOfWork from "../tableofcontents/Schemeofwork";
import styles from "./scss/term.module.scss";

const Jss1ThirdTerm = () => {
  const data = [
    {
      term: "ThirdTerm",
      class: "JSS1",
      subject: "Agricultural Science",
    },
    { term: "ThirdTerm", class: "JSS1", subject: "Basic Science" },
    { term: "ThirdTerm", class: "JSS1", subject: "Basic Technology" },
    { term: "ThirdTerm", class: "JSS1", subject: "Business Studies" },
    {
      term: "ThirdTerm",
      class: "JSS1",
      subject: "Christian Religioud Studies (CRS)",
    },
    { term: "ThirdTerm", class: "JSS1", subject: "Civic Education" },
    { term: "ThirdTerm", class: "JSS1", subject: "Computer Studies" },
    {
      term: "ThirdTerm",
      class: "JSS1",
      subject: "Cultural and Creative Art",
    },
    { term: "ThirdTerm", class: "JSS1", subject: "English Studies" },
    { term: "ThirdTerm", class: "JSS1", subject: "Home Economics" },
    { term: "ThirdTerm", class: "JSS1", subject: "Mathematics" },
    { term: "ThirdTerm", class: "JSS1", subject: "Music" },
    {
      term: "ThirdTerm",
      class: "JSS1",
      subject: "Physcal and Health Education",
    },
    { term: "ThirdTerm", class: "JSS1", subject: "Social Studies" },
  ];
  const selectedTerm = "ThirdTerm";
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
