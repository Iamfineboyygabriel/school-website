import React, { useState } from "react";
import StudentSideBar from "../../../component/dashboard/layout/studentlayout/StudentSideBar";
import TableContent from "../tableofcontents/TermContent";
import Schemeofwork from "../tableofcontents/Schemeofwork";
import styles from "../jss1/scss/term.module.scss";
import ReactLoading from "react-loading";

const Jss3ThirdTerm = () => {
  const data = [
    // {
    //   term: "Third",
    //   class: "JSS3",
    //   subject: "Agricultural Science",
    // },
    // { term: "Third", class: "JSS3", subject: "Basic Science" },
    // { term: "Third", class: "JSS3", subject: "Basic Technology" },
    // {
    //   term: "Third",
    //   class: "JSS3",
    //   subject: "Business Studies",
    // },
    {
      term: "ThirdTerm",
      class: "JSS3",
      subject: "Christian Religious Studies",
    },
    // { term: "Third", class: "JSS3", subject: "Civic Education" },
    { term: "ThirdTerm", class: "JSS3", subject: "Computer Studies" },
    // { term: "Third", class: "JSS3", subject: "English Studies" },
    // { term: "Third", class: "JSS3", subject: "Home Economics" },
    // { term: "Third", class: "JSS3", subject: "Mathematics" },
    // { term: "Third", class: "JSS3", subject: "Music" },
    // {
    //   term: "Third",
    //   class: "JSS3",
    //   subject: "Physical and Health Education (PHE)",
    // },
    // { term: "Third", class: "JSS3", subject: "Social Studies" },
  ];
  const selectedTerm = "ThirdTerm";
  const selectedClass = "JSS3";

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
          <h2>Subject(s) For JSS3 Third Term</h2>
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

export default Jss3ThirdTerm;
