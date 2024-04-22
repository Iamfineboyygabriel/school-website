import React, { useState } from "react";
import StudentSideBar from "../../../component/dashboard/layout/studentlayout/StudentSideBar";
import TableContent from "../tableofcontents/TermContent";
import Schemeofwork from "../tableofcontents/Schemeofwork";
import styles from "../jss1/css/term.module.scss";
import ReactLoading from "react-loading";

const Jss2ThirdTerm = () => {
  const data = [
    {
      term: "ThirdTerm",
      class: "JSS2",
      subject: "Agricultural Science",
    },
    { term: "ThirdTerm", class: "JSS2", subject: "Basic Science" },
    { term: "ThirdTerm", class: "JSS2", subject: "Basic Technology" },
    {
      term: "ThirdTerm",
      class: "JSS2",
      subject: "Business Studies",
    },
    {
      term: "ThirdTerm",
      class: "JSS2",
      subject: "Christian Religious Studies",
    },
    { term: "ThirdTerm", class: "JSS2", subject: "Civic Education" },
    { term: "ThirdTerm", class: "JSS2", subject: "Computer Studies" },
    {
      term: "ThirdTerm",
      class: "JSS2",
      subject: "Cultural and Creative Arts",
    },
    { term: "ThirdTerm", class: "JSS2", subject: "English Studies" },
    { term: "ThirdTerm", class: "JSS2", subject: "Home Economics" },
    { term: "ThirdTerm", class: "JSS2", subject: "Mathematics" },
    { term: "ThirdTerm", class: "JSS2", subject: "Music" },
    {
      term: "ThirdTerm",
      class: "JSS2",
      subject: "Physical and Health Education (PHE)",
    },
    { term: "ThirdTerm", class: "JSS2", subject: "Social Studies" },
  ];
  const selectedTerm = "ThirdTerm";
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
          <h2>Subject(s) For JSS2 Third-Term</h2>
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

export default Jss2ThirdTerm;
