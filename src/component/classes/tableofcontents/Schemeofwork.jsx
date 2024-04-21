import React, { useEffect, useState } from "react";
import styles from "./schemeofwork.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import StudentSideBar from "../../../component/dashboard/layout/studentlayout/StudentSideBar";
import ReactLoading from "react-loading";
import Modal from "../modal/Modal";
import { SchemeOfWorkData } from "./SchemeOfWorkData.jsx";

const SchemeOfWork = ({ selectedSubject, selectedTerm }) => {
  const { classGrade, term, subject } = useParams();
  const [schemeOfWorkContent, setSchemeOfWorkContent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchSchemeOfWorkData = () => {
      const classData = SchemeOfWorkData[classGrade];
      if (classData) {
        const termData = classData[term.replace(/ /g, "")]; // Replace spaces with empty string
        if (termData) {
          const subjectData = termData[subject];
          if (subjectData) {
            console.log("Scheme of work data:", subjectData);
            setSchemeOfWorkContent(subjectData);
          } else {
            console.error(
              `Scheme of work data not found for ${classGrade}, ${term}, ${subject}`
            );
          }
        } else {
          console.error(`Term data not found for ${classGrade}, ${term}`);
        }
      } else {
        console.error(`Class data not found for ${classGrade}`);
      }
    };

    fetchSchemeOfWorkData();
  }, [classGrade, term, subject]);

  const handleOpenModal = (content) => {
    setSelectedContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedContent(null);
    setSelectedOption(null);
  };

  const handleReadingOption = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitModal = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (selectedOption === "audio") {
        navigate(
          `/audio/${classGrade}/${term}/${subject}/${selectedContent.topics}`
        );
      } else if (selectedOption === "video") {
        navigate(
          `/video/${classGrade}/${term}/${subject}/${selectedContent.topics}`
        );
      } else if (selectedOption === "text") {
        navigate(
          `/text/${classGrade}/${term}/${subject}/${selectedContent.topics}`
        );
      }
    }, 4000);
  };

  const isSubmitDisabled = !selectedOption;

  return (
    <StudentSideBar>
      <div className={styles.schemenocopy}>
        <div className={styles.schemeheader}>
          <h2 className={styles.title}>
            Scheme of Work for {subject} - {classGrade} {term}
          </h2>
        </div>

        <table className={styles.schemeTable}>
          <thead>
            <tr>
              <th className={styles.week}>Week</th>
              <th className={styles.topics}>Topics</th>
              <th className={styles.content}>Content(s)</th>
            </tr>
          </thead>
          <tbody>
            {schemeOfWorkContent &&
              schemeOfWorkContent.map((weekData, index) => (
                <tr key={index}>
                  <td className={styles.weekData}>{weekData.week}</td>
                  <td className={styles.topicsData}>{weekData.topics}</td>
                  <td className={styles.contentData}>
                    <ul>
                      {Array.isArray(weekData.content) ? (
                        // If content is an array, map through it
                        weekData.content.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))
                      ) : (
                        // If content is a string, render it as a single list item
                        <li>{weekData.content}</li>
                      )}
                    </ul>
                    <button
                      className={styles.readMoreButton}
                      onClick={() => handleOpenModal(weekData)}
                    >
                      View Content
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {showModal && (
          <Modal onCloseModal={handleCloseModal}>
            <h2 className={styles.modalheader}>
              Welcome! Unlock Your Learning Journey
            </h2>
            <p className={styles.modaldetails}>
              Subject: <span>{subject}</span> <br />
              Topic: <span>
                {selectedContent && selectedContent.topics}
              </span>{" "}
              <br />
              Class Grade: <span>{classGrade}</span> <br />
              Term: {term}
            </p>
            <h3 className={styles.wish}>
              How do you wish to view this content?
            </h3>
            <div className={styles.checkbox}>
              <div>
                <input
                  type="checkbox"
                  className={styles.box}
                  id="audioOption"
                  checked={selectedOption === "audio" ? styles.selected : ""}
                  onChange={() => handleReadingOption("audio")}
                />
                <label htmlFor="audioOption">Audio</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className={styles.box}
                  id="videoOption"
                  checked={selectedOption === "video"}
                  onChange={() => handleReadingOption("video")}
                />
                <label htmlFor="videoOption">Video</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className={styles.box}
                  id="textOption"
                  checked={selectedOption === "text"}
                  onChange={() => handleReadingOption("text")}
                />
                <label htmlFor="textOption">Written Text</label>
              </div>
            </div>
            <div className={styles.submit}>
              {isLoading ? (
                <ReactLoading
                  color="{
                  color: #064e3b"
                  width={25}
                  height={25}
                  type="spin"
                />
              ) : (
                <button
                  className={`${styles.submitbutton} ${
                    isSubmitDisabled ? styles.disabled : ""
                  }`}
                  onClick={handleSubmitModal}
                  disabled={isSubmitDisabled}
                  style={{
                    color: !selectedOption ? "grey" : "#064e3b",
                  }}
                >
                  Submit
                </button>
              )}
            </div>
          </Modal>
        )}
      </div>
    </StudentSideBar>
  );
};

export default SchemeOfWork;
