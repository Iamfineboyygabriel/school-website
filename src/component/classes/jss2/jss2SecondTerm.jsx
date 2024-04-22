import React, { useState } from "react";
import StudentSideBar from "../../../component/dashboard/layout/studentlayout/StudentSideBar";
import TableContent from "../tableofcontents/TermContent";
import Schemeofwork from "../tableofcontents/Schemeofwork";
import styles from "../jss1/css/term.module.scss";
import ReactLoading from "react-loading";

const Jss2SecondTerm = () => {
  const data = [
    {
      term: "SecondTerm",
      class: "JSS2",
      subject: "Agricultural Science",
    },
    { term: "SecondTerm", class: "JSS2", subject: "Basic Science" },
    { term: "SecondTerm", class: "JSS2", subject: "Basic Technology" },
    {
      term: "SecondTerm",
      class: "JSS2",
      subject: "Business Studies",
    },
    {
      term: "SecondTerm",
      class: "JSS2",
      subject: "Christian Religious Studies",
    },
    { term: "SecondTerm", class: "JSS2", subject: "Civic Education" },
    { term: "SecondTerm", class: "JSS2", subject: "Computer Studies" },
    {
      term: "SecondTerm",
      class: "JSS2",
      subject: "Cultural and Creative Arts",
    },
    { term: "SecondTerm", class: "JSS2", subject: "English Studies" },
    { term: "SecondTerm", class: "JSS2", subject: "Home Economics" },
    { term: "SecondTerm", class: "JSS2", subject: "Mathematics" },
    { term: "SecondTerm", class: "JSS2", subject: "Music" },
    {
      term: "SecondTerm",
      class: "JSS2",
      subject: "Physical and Health Education (PHE)",
    },
    { term: "SecondTerm", class: "JSS2", subject: "Social Studies" },
  ];
  const selectedTerm = "SecondTerm";
  const selectedClass = "JSS2";

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubjectClick = (subject) => {
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
          <h2>Subject(s) For JSS2 Second-Term</h2>
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

export default Jss2SecondTerm;
