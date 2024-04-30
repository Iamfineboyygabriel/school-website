import React, { useState } from "react";
import styles from "../upload/upload.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/redux/reduxHooks";
import { UploadLesson } from "../../../shared/redux/slices/addlesson.slices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadLessonComponent = () => {
  const [term, setTerm] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState([]);
  const [downloadDoc, setDownloadDoc] = useState(null);
  const [downloadVideo, setDownloadVideo] = useState(null);
  const [lessonId, setLessonId] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const uploadLesson = useAppSelector((state) => state?.lesson?.uploadLesson);

  const uploadLessonData = () => {
    setLoading(true);
    let body = {
      topic,
      term,
      description,
      content: [],
      text_content: downloadDoc,
      video_url: downloadVideo,
    };
    console.log("mybody", body);

    dispatch(UploadLesson(body))
      .unwrap()
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoading(false);
      });
  };

  const handleInputChange = (event) => {
    sessionStorage.setItem("lessonId", event.target.value);
    setLessonId(event.target.value);
  };

  const handleTextContentChange = (e) => {
    setDownloadDoc(e.target.files[0]);
  };

  const handleVideoFileChange = (e) => {
    setDownloadVideo(e.target.files[0]);
  };

  return (
    <div className={styles.addLessonContainer}>
      <h2>Add Lesson</h2>
      <form>
        <div>
          <label htmlFor="term">Topic:</label>
          <input
            className={styles.calculatorinput}
            type="text"
            placeholder="Enter your topic"
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="term">Term:</label>
          <input
            className={styles.calculatorinput}
            type="number"
            placeholder="Enter your term"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <input
            className={styles.calculatorinput}
            type="text"
            placeholder="Enter your description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Content:</label>
          <input
            className={styles.calculatorinput}
            type="string"
            placeholder="Enter your content"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Subject Id:</label>
          <input
            className={styles.calculatorinput}
            type="string"
            placeholder="Enter your subject id"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="text_content">
            Download Document (PDF/Document):
          </label>
          <input
            type="file"
            id="text_content"
            name="text_content"
            accept=".pdf"
            onChange={handleTextContentChange}
          />
        </div>
        <div>
          <label htmlFor="video_url">Video File:</label>
          <input
            type="file"
            id="video_file"
            name="video_file"
            accept="video/*"
            onChange={handleVideoFileChange}
          />
        </div>

        <button type="submit" disabled={loading} onClick={uploadLessonData}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UploadLessonComponent;

