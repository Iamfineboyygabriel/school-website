import React, { useEffect, useState } from "react";
import styles from "../student/schemeofwork.module.scss";
import { useAppSelector, useAppDispatch } from "../../shared/redux/reduxHooks";
import { GetLessonsAdmin, GetUploaded } from "../../shared/redux/slices/AdminGetLessons.slices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";

const AllLesson = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const lessonsData = useAppSelector((state) => state?.admin?.details);
  const uploadedData = useAppSelector((state) => state?.admin?.uploaded);
  console.log("uploaded", uploadedData);

  useEffect(() => {
    getLessons();
    getUploadedItems('video_1714339263046_ivvyhouse follow clip.MP4'); // Dispatch the thunk with the file name
  }, []);

  const getUploadedItems = (filename) => {
    setLoading(true);
    dispatch(GetUploaded(filename))
      .unwrap()
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        const errorMessage = err.message;
        toast.error(errorMessage);
        setLoading(false);
      });
  };

  const getLessons = () => {
    setLoading(true);
    dispatch(GetLessonsAdmin())
      .unwrap()
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        const errorMessage = err.message;
        toast.error(errorMessage);
        setLoading(false);
      });
  };
  useEffect(() => {
    getLessons();
  }, []);

  return (
    <div>
      <h2>Get All Lessons</h2>

      {loading ? (
        <div className="loading-indicator">
          <ReactLoading type="spin" color="#064e3b" />
        </div>
      ) : (
        <div className={styles.schemeOfWorkTable}>
          <table>
            <thead>
              <tr>
                <th>Lesson Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Content</th>
                <th>Document</th>
                <th>Video</th>
                <th>Term</th>
                <th>Subject</th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              {lessonsData &&
                lessonsData.data &&
                lessonsData.data.map((lesson) => (
                  <tr key={lesson.lesson_id}>
                    <td>{lesson.lesson_id}</td>
                    <td>{lesson.title}</td>
                    <td>{lesson.description}</td>
                    <td>{lesson.content}</td>
                    <td>{lesson.text_content}</td>
                    <td>{lesson.video_url}</td>
                    <td>{lesson.term}</td>
                    <td>{lesson.subject_name}</td>
                    <td>{lesson.class_name}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default AllLesson;
