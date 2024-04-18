import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import { useAppDispatch, useAppSelector } from "../../shared/redux/reduxHooks";
import { ForgetAdminPassword } from "../../shared/redux/slices/auth.slices";
import styles from "./adminforgetpasswod.module.scss";

const AdminForgetPassword = ({ handleModalShow }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const dispatch = useAppDispatch();

  const forgetAdminPassword = useAppSelector(
    (state) => state.auth.forgetAdminPassword
  );

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const retrieveAdminPassword = () => {
    setLoading(true);
    if (!validateEmail(email)) {
      toast.error("Please input a valid email address");
      setLoading(false);
      return;
    }
    let body = {
      email,
    };
    dispatch(ForgetAdminPassword(body))
      .unwrap()
      .then(() => {
        setLoading(false);
        setEmailSent(true);
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

  return (
    <>
      <div className={styles.content1}>
        {emailSent ? (
          <div className={styles.contentholder}>
            <h2 className={styles.modalhead}>Reset password</h2>
            <p className={styles.modalpara}>
              Recover your password by providing correctly the details below.
            </p>
          </div>
        ) : (
          <div className={styles.contentholder}>
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
                onClick={retrieveAdminPassword}
                style={{
                  backgroundColor: validate() ? "#627d6e" : "",
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
      {emailSent && (
        <p className={styles.donthave}>
          Already have an account?{" "}
          <span>
            <Link to="/login">Sign in here</Link>
          </span>
        </p>
      )}
      <ToastContainer />
    </>
  );
};

export default AdminForgetPassword;
