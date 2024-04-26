import React, { useState } from "react";
import styles from "./addlesson.module.scss";
import { useAppDispatch, useAppSelector } from "../../shared/redux/reduxHooks";
import { AddLesson } from "../../shared/redux/slices/addlesson.slices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddStudentLesson = () => {
  const [term, setTerm] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState([]);
  const [downloadDoc, setDownloadDoc] = useState(null); // Change to hold file object
  const [downloadVideo, setDownloadVideo] = useState(null); // Change to hold file object
  const [subjectId, setSubjectId] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const addLesson = useAppSelector((state) => state?.lesson?.addLesson);

  const addStudentData = () => {
    setLoading(true);
    let body = {
      topic,
      term,
      description,
      content: [],
      text_content: downloadDoc,
      video_url: downloadVideo,
    };
    console.log("bodys", body);

    dispatch(AddLesson(body))
      .unwrap()
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoading(false);
      },[]);
  };

  const handleInputChange = (event) => {
    sessionStorage.setItem("subjectId", event.target.value);
    setSubjectId(event.target.value);
  };

  const validate = () => {
    // return (
    //   !term ||
    //   !topic ||
    //   !description ||
    //   !content ||
    //   !base64DownloadDoc ||
    // );
  };

  return (
    <div className={styles.addLessonContainer}>
      <h2>Add Lesson</h2>
      <form>
        <div>
          <label htmlFor="topic">Topic:</label>
          <input
            className={styles.calculatorinput}
            type="text"
            placeholder="Enter Topic"
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div>
          <label>Content </label>
          <input
            type="text"
            name="content"
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="term">Term:</label>
          <input
            className={styles.calculatorinput}
            type="text"
            placeholder="Enter your first name"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            className={styles.calculatorinput}
            type="text"
            placeholder="Enter your first name"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="text_content">Text Content (PDF/Document):</label>
          <input
            className={styles.calculatorinput}
            type="text"
            placeholder="Enter your document name"
            onChange={(e) => setDownloadDoc(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="video_file">Video File:</label>
          <input
            className={styles.calculatorinput}
            type="text"
            placeholder="Enter your video url"
            onChange={(e) => setDownloadVideo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="student_id">Subject ID:</label>{" "}
          <input
            className={styles.calculatorinput}
            type="text"
            placeholder="Enter your subject id"
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          disabled={loading || validate()}
          onClick={addStudentData}
          style={{
            backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " ",
          }}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddStudentLesson;
