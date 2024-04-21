import React, { useState } from "react";
import StudentSideBar from "../../../component/dashboard/layout/studentlayout/StudentSideBar";
import TableContent from "../tableofcontents/TermContent";
import Schemeofwork from "../tableofcontents/Schemeofwork";
import styles from "./css/term.module.scss";
import ReactLoading from "react-loading";

const Jss1FirstTerm = () => {
  const data = [
    {
      class: "JSS1",
      term: "FirstTerm",
      subject: "Agricultural Science",
    },
    { term: "FirstTerm", class: "JSS1", subject: "Basic Science" },
    { term: "FirstTerm", class: "JSS1", subject: "Basic Technology" },

    {
      term: "FirstTerm",
      class: "JSS1",
      subject: "Business Studies",
    },
    {
      term: "FirstTerm",
      class: "JSS1",
      subject: "Christian Religious Studies",
    },
    { term: "FirstTerm", class: "JSS1", subject: "Civic Education" },
    { term: "FirstTerm", class: "JSS1", subject: "Computer Studies" },
    {
      term: "FirstTerm",
      class: "JSS1",
      subject: "Cultural and Creative Arts",
    },
    { term: "FirstTerm", class: "JSS1", subject: "English Studies" },
    { term: "FirstTerm", class: "JSS1", subject: "Home Economics" },
    { term: "FirstTerm", class: "JSS1", subject: "Mathematics" },
    { term: "FirstTerm", class: "JSS1", subject: "Music" },
    {
      term: "FirstTerm",
      class: "JSS1",
      subject: "Physical and Health Education (PHE)",
    },
    { term: "FirstTerm", class: "JSS1", subject: "Social Studies" },
  ];
  const selectedTerm = "FirstTerm";
  const selectedClass = "JSS1";

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubjectClick = (subject) => {
    console.log("handle selected subject", handleSubjectClick);
    setIsLoading(true);
    setSelectedSubject(subject);

    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  };

  return (
    <StudentSideBar>
      <div className={styles.header}>
        <div>
          <h2>Subject(s) For JSS1 First-Term</h2>
        </div>
      </div>
      <TableContent
        data={data}
        selectedTerm={selectedTerm}
        selectedClass={selectedClass}
        onSubjectClick={handleSubjectClick}
      />
      {isLoading && (
        <div className={styles.loading}>
          <ReactLoading color="#064e3b" width={25} height={25} type="spin" />
          <p>Loading...</p>
        </div>
      )}
      {selectedSubject && !isLoading && (
        <Schemeofwork
          selectedSubject={selectedSubject}
          selectedTerm={selectedTerm}
        />
      )}
    </StudentSideBar>
  );
};

export default Jss1FirstTerm;
