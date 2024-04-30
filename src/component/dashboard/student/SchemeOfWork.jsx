import React, { useEffect, useState } from "react";
import styles from "./schemeofwork.module.scss";
import { GetLessons } from "../../shared/redux/slices/GetLessons.slices";
import { useAppSelector, useAppDispatch } from "../../shared/redux/reduxHooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SchemeOfWork = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const studentLessons = useAppSelector(
    (state) => state?.studentLesson?.studentLessons
  );

  useEffect(() => {
    const studentToken = sessionStorage.getItem("studentData");
    if (studentToken) {
      dispatch(GetLessons())
        .unwrap()
        .then(() => {
          setLoading(false);
        })
        .catch((err) => {
          const errorMessage = err.message;
          toast.error(errorMessage);
          setLoading(false);
        });
    }
  }, [dispatch]);

  return (
    <div>
      <h2>All Contents</h2>
      <div className={styles.schemeOfWorkTable}>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Term</th>
              <th>Subject</th>
              <th>Title</th>
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
              studentLessons?.data?.map((lesson, index) => (
                <tr key={index}>
                  <td>{lesson?.class_name}</td>
                  <td>{lesson?.term}</td>
                  <td>{lesson?.subject_name}</td>
                  <td>{lesson?.title}</td>
                  <td>{lesson?.description}</td>
                  <td>{lesson?.content}</td>
                  <td>{lesson?.text_content}</td>
                  <td>{lesson?.video_url}</td>
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
