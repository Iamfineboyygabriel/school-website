import React, { useState } from "react";
import styles from "../addsubject.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/redux/reduxHooks";
import {
  UploadLesson,
  AddLesson,
} from "../../../shared/redux/slices/addlesson.slices";
import { lessonsliceAction } from "../../../shared/redux/slices/addlesson.slices";
import { clearMessage } from "../../../shared/redux/slices/message.slices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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
  const { addLessonStatus, status } = useAppSelector((state) => state?.lesson);
  const { message } = useAppSelector((state) => state?.message);

  const reset = () => {
    setTerm("");
    setTopic("");
    setDescription("");
    setContent([]);
    setDownloadDoc(null);
    setDownloadVideo(null);
    setLessonId("");
    setLoading(false);
    dispatch(clearMessage());
    dispatch(lessonsliceAction.reset());
  };
  const uploadLessonData = async (e) => {
    e.preventDefault();

    if (
      status === "isLoading" ||
      addLessonStatus === "isLoading" ||
      topic.trim() === "" ||
      term === "" ||
      description.trim() === "" ||
      content === null ||
      downloadDoc === null ||
      downloadVideo === null
    ) {
      toast.error("Please fill all the fields", {
        position: "top-right",
      });
      return;
    }
    dispatch(lessonsliceAction.addLessonStatusReset());
    dispatch(clearMessage());
    // setLoading(true);
    let body = {
      topic,
      term,
      description,
      content: ["hhdhdh"],
      text_content: downloadDoc,
      video_url: downloadVideo,
    };
    console.log("mybody", body);

    try {
      const res = await dispatch(AddLesson(body)).unwrap();

      console.log(res);
      if (res.lesson.status === "Created") {
        toast.success(res.lesson.message, {
          position: "top-right",
        });

        reset();
      }

      dispatch(lessonsliceAction.addLessonStatusReset());
    } catch (error) {
      console.log("error adding lesson", error);
      toast.error(message, {
        position: "top-right",
      });
    }
  };

  const handleInputChange = (event) => {
    sessionStorage.setItem("subjectId", event.target.value);
    setLessonId(event.target.value);
  };

  const handleTextContentChange = async (e) => {
    dispatch(lessonsliceAction.reset());
    dispatch(clearMessage());
    const data = e.currentTarget.files[0];
    const file = new FormData();
    file.append("file", data);

    try {
      //uploaing the file to thee endpoint to collect it corresponding url to be submitted with the addlesson form
      const res = await dispatch(UploadLesson(file)).unwrap();

      const { files } = res.lesson.data;
      if (files?.text_content) {
        setDownloadDoc(files.text_content);
        toast.success(res.lesson.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      dispatch(lessonsliceAction.reset());
    } catch (error) {
      toast.error(message, {
        position: "top-right",
      });
    }
    // .then(() => {
    //   if (uploadFileUrl !== null) {
    //     console.log("yes", uploadFileUrl);
    //     setDownloadDoc(uploadFileUrl?.files.text_content);
    //   }
    // })
    // .catch((err) => {
    //   console.log("error", err);
    //   // toast.error(err, {
    //   //   position: toast.POSITION.TOP_RIGHT,
    //   // });
    // });
  };

  const handleVideoFileChange = async (e) => {
    dispatch(lessonsliceAction.reset());
    dispatch(clearMessage());
    const data = e.currentTarget.files[0];
    const file = new FormData();
    file.append("file", data);

    try {
      //uploaing the file to thee endpoint to collect it corresponding url to be submitted with the addlesson form
      const res = await dispatch(UploadLesson(file)).unwrap();
      console.log(res.lesson.data, "main res");
      const { files } = res.lesson.data;
      if (files?.video_url) {
        setDownloadVideo(files?.video_url);
        toast.success(res.lesson.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      // dispatch(lessonsliceAction.reset());
    } catch (error) {
      toast.error(message, {
        position: "top-right",
      });
    }

    // .then(() => {
    //   if (uploadFileUrl !== null) {
    //     console.log("now", uploadFileUrl);
    //     // setDownloadDoc(uploadFileUrl?.files);
    //   }
    // })
    // .catch((err) => {
    //   console.log("error", err);
    //   // toast.error(err, {
    //   //   position: toast.POSITION.TOP_RIGHT,
    //   // });
    // });
  };

  return (
    <div className={styles.addLessonContainer}>
      <h2>Add Lesson</h2>
      {status === "isLoading" ? (
        <h5>Uploading file...</h5>
      ) : status === "isError" ? (
        <h5>error uploading file try again...</h5>
      ) : null}
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
            onChange={(e) => handleTextContentChange(e)}
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

        <button
          type="submit"
          disabled={addLessonStatus === "isLoading" ? true : false}
          onClick={uploadLessonData}
        >
          {addLessonStatus === "isLoading" ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default UploadLessonComponent;
