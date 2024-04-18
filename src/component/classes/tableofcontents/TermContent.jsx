import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import styles from "../jss1/css/term.module.scss";

const TermContent = ({ data }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubjectClick = (subject, classGrade, term) => {
    setIsLoading(true);

    setTimeout(() => {
      navigate(`/scheme-of-work/${classGrade}/${term}/${subject}`);
      setIsLoading(false);
    }, 4000);
  };

  return (
    <div className={styles.tableContainer}>
      {isLoading && (
        <div
          className={styles.loadingOverlay}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ReactLoading type="spin" color="blue" width={30} height={30} />
        </div>
      )}

      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.subject}>Subjects</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ class: classGrade, term, subject }, index) => (
            <tr
              className={styles.subjectRow}
              key={index}
              onClick={() => handleSubjectClick(subject, classGrade, term)}
            >
              <td className={styles.weekdata}>{subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TermContent;
