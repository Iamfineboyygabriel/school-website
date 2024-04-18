import styles from "./forgetpasswordmodal.module.scss";
import React, { useState } from "react";
import modalimg from "../../../assets/png/modalimg.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import { useAppDispatch, useAppSelector } from "../../shared/redux/reduxHooks";
import { ForgetPassword } from "../../shared/redux/slices/auth.slices";

const ForgetPasswordModal = ({ handleModalShow }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useAppDispatch();

  const forgetPassword = useAppSelector((state) => state.auth.forgetPassword);
  const [data] = useState(forgetPassword);

  const forgetStudentPassword = () => {
    setLoading(true);
    let body = {
      email,
    };
    dispatch(ForgetPassword(body))
      .unwrap()
      .then(() => {
        setLoading(false);
        // setShowModal(false);
      })
      .catch((err) => {
        const errorMessage = err.message;
        toast.error(errorMessage);
        setLoading(false);
      });
  };

  const validate = () => {
    return !email;
  };
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.content1}>
        {emailSent ? (
          <div className={styles.contentholder}>
            <img src={modalimg} alt="" />
            <h2 className={styles.modalhead}>Reset password</h2>
            <p className={styles.modalpara}>
              Recover your password by providing correctly the details below.
            </p>
          </div>
        ) : (
          <div className={styles.contentholder}>
            <img src={modalimg} alt="" />
            <h2 className={styles.modalhead}>Forgot password?</h2>
            <p className={styles.modalpara}>
              A password recovery link has been sent to your email address.
              Kindly check your email.
            </p>
            <h2 className={styles.rowname}>Email address</h2>
            <input
              className={styles.calculatorinput}
              type="email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className={styles.requestbut}>
              <button
                className={styles.btnrequest}
                disabled={validate()}
                onClick={forgetStudentPassword}
                style={{
                  backgroundColor: validate() ? "#627d6e" : " ",
                }}
              >
                {loading ? (
                  <ReactLoading
                    color="white"
                    width={25}
                    height={25}
                    type="spin"
                  />
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </div>
        )}
      </div>
      {!emailSent ? (
        ""
      ) : (
        <p className={styles.donthave}>
          Already have an account?{" "}
          <span>
            <Link to="/login">Signin here</Link>
          </span>
        </p>
      )}
      <ToastContainer />
    </>
  );
};

export default ForgetPasswordModal;
