import React, { useState } from "react";
import styles from "./addsubject.module.scss";
import { useAppDispatch, useAppSelector } from "../../shared/redux/reduxHooks";
import { ToastContainer, toast } from "react-toastify";
import ReactLoading from "react-loading";
import { CreateSubject } from "../../shared/redux/slices/auth.slices";
import { useNavigate } from "react-router-dom";

const AddSubject = () => {
  const [subject_name, setSubject_name] = useState("");
  const [class_name, setClass_name] = useState("JSS1");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const createSubject = useAppSelector((state) => state.auth.CreateSubject);
  const [data] = useState(createSubject);

  const submitFormData = (e) => {
    e.preventDefault(); 
    setLoading(true);
    let body = {
      subject_name,
      class_name,
    };
    dispatch(CreateSubject(body))
      .unwrap()
      .then(() => {
        setLoading(false);
        toast.success("Subject created successfully");
        navigate("/admin");
      })
      .catch((err) => {
        // console.log(err);
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        ) {
          toast.error(err.response.data.message);
        } else {
          toast.error("Subject already exist in class.");
        }
        setLoading(false);
      });
  };

  const validate = () => {
    return !subject_name || class_name;
  };

  return (
    <div className={styles.parent}>
      <div className={styles.addSubjectContainer}>
        <h2>Add Subject</h2>
        <form onSubmit={submitFormData}>
          <div className={styles.formGroup}>
            <label htmlFor="subjectName">Subject Name:</label>
            <input
              type="text"
              id="subjectName"
              value={subject_name}
              onChange={(e) => setSubject_name(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="className">Class Name:</label>
            <select
              id="className"
              value={class_name}
              onChange={(e) => setClass_name(e.target.value)}
              required
            >
              <option value="JSS1">JSS1</option>
              <option value="JSS2">JSS2</option>
              <option value="JSS3">JSS3</option>
              <option value="SSS1">SSS1</option>
              <option value="SSS2">SSS2</option>
              <option value="SSS3">SSS3</option>
            </select>
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddSubject;
