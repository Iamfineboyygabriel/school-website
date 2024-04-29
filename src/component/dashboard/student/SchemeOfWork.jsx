import React, { useEffect, useState } from "react";
import styles from "./schemeofwork.module.scss";
import { GetLessons } from "../../shared/redux/slices/GetLessons.slices";
import { useAppSelector, useAppDispatch } from "../../shared/redux/reduxHooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SchemeOfWork = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const getLessons = useAppSelector((state) => state?.lessons?.lessons);
  console.log("student lessons", getLessons);
  useEffect(() => {
    setLoading(true);
    dispatch(GetLessons())
      .unwrap()
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        const errorMessage = err.message;
        toast.error(errorMessage);
      });
  }, [dispatch]);

  return (
    <div>
      <h2>All Contents</h2>

      <div className={styles.schemeOfWorkTable}>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Class</th>
              <th>Term</th>
              <th>Topic</th>
              <th>Description</th>
              <th>Content</th>
              <th>Document</th>
              <th>Video</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="8">Loading...</td>
              </tr>
            ) : (
              getLessons?.map((lesson) => (
                <tr key={lesson.lesson_id}>
                  <td>{lesson.subject}</td>
                  <td>{lesson.class}</td>
                  <td>{lesson.term}</td>
                  <td>{lesson.topic}</td>
                  <td>{lesson.description}</td>
                  <td>{lesson.content}</td>
                  <td>{lesson.document}</td>
                  <td>{lesson.video}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SchemeOfWork;
