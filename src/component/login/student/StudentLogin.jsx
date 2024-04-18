import React, { useState } from "react";
import styles from "./student.module.scss";
import arrow from "../../../assets/png/arrowright.png";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import ReactLoading from "react-loading";
import Modal from "../../classes/modal/Modal";
import ForgetPasswordModal from "./forgetPasswordModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from "../../shared/redux/reduxHooks";
import { LoginStudent } from "../../shared/redux/slices/auth.slices";
import { useDispatch } from "react-redux";

const StudentLogin = () => {
  const [password, setPassword] = useState("");
  const [admissionNumber, setadmissionNumber] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginStudent = useAppSelector((state) => state.auth.loginStudent);

  const loginStudentData = () => {
    setLoading(true);
    let body = {
      admissionNumber,
      password,
    };
    dispatch(LoginStudent(body))
      .unwrap()
      .then(() => {
        setLoading(false);
        navigate("/dashboard");
      })
      .catch((err) => {
        const errorMessage = err.message;
        toast.error(errorMessage); // Display the error message obtained from the backend
        setLoading(false);
      });
  };

  const validate = () => {
    return !admissionNumber || !password;
  };

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.parent}>
      <div className={styles.content}>
        <div className={styles.disctwo}>
          <div className={styles.insideDisc}>
            <h2 className={styles.headwelcome}>Welcome Back!</h2>
            <div className={styles.arrowstyle}>
              <img src={arrow} alt="arrow" />
            </div>
            <div className={styles.inputted}>
              <h2 className={styles.rowname}>Admission Number</h2>
              <input
                onChange={(e) => setadmissionNumber(e.target.value)}
                className={styles.calculatorinput}
                type="number"
                placeholder="Enter your Admission number"
              />

              <h2 className={styles.rowname}>Password</h2>
              <div className={styles.group}>
                <input
                  className={styles.calculatorinputgroup}
                  type={passwordType}
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  name="password"
                />
                <div className="input-group-btn">
                  <button
                    className={styles.visibility}
                    onClick={togglePassword}
                  >
                    {passwordType === "password" ? (
                      <MdOutlineVisibilityOff />
                    ) : (
                      <MdOutlineVisibility />
                    )}
                  </button>
                </div>
              </div>

              <p className={styles.forget}>
                <span onClick={openModal} className={styles.resetPassword}>
                  Reset Password?
                </span>
              </p>
              <div className={styles.requestbut}>
                <button
                  className={styles.btnrequest}
                  disabled={validate()}
                  onClick={loginStudentData} // Corrected the onClick handler
                  style={{
                    backgroundColor: validate() ? "#a7f3d0" : " ",
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
                    "Sign In"
                  )}
                </button>
              </div>
            </div>
            <p className={styles.donthave}>
              Don’t have an account?{" "}
              <span>
                <Link
                  style={{ textDecoration: "none", color: "#627d6e" }}
                  to="/register"
                >
                  Register here
                </Link>
              </span>
            </p>
          </div>
          <p className={styles.donthave} style={{ marginTop: "1em" }}>
            By clicking sign in, you agree to our{" "}
            <span>Terms & Conditions </span>and <span>Privacy Policy</span>
          </p>
        </div>
      </div>
      <Modal isOpen={showModal} onClose={closeModal}>
        <ForgetPasswordModal />
      </Modal>
    </div>
  );
};

export default StudentLogin;
