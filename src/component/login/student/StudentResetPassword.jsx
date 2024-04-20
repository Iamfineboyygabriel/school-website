import React, { useState } from "react";
import styles from "./changepassword.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector, useAppDispatch } from "../../shared/redux/reduxHooks";
import { ForgetPassword } from "../../shared/redux/slices/auth.slices";
import ReactLoading from "react-loading";

const StudentResetPassword = () => {
  const [admissionNumber, setAdmissionNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const forgetPassword = useAppSelector((state) => state.auth.forgetPassword);

  const forgetPasswordData = () => {
    setLoading(true);
    let body = {
      admissionNumber,
    };
    dispatch(ForgetPassword(body))
      .unwrap()
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        const errorMessage = err.errorMessage;
        toast.error(errorMessage);
        setLoading(false);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Admission Number</label>
          <input
            type="string"
            onChange={(e) => setAdmissionNumber(e.target.value)}
            placeholder="Kindly input your admission number"
          />
        </div>

        <button onClick={forgetPasswordData} className={styles.submitButton}>
          {loading ? (
            <ReactLoading color="#064e3b" width={25} height={25} type="spin" />
          ) : (
            "Submit"
          )}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default StudentResetPassword;
