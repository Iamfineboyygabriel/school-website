import React, { useState } from "react";
import styles from "./student.module.scss";
import arrow from "../../../assets/png/arrowright.png";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import ReactLoading from "react-loading";
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
        navigate("/student-dashboard");
        toast.success("Login successful");
      })
      .catch((err) => {
        if (err && err.data && err.data.error) {
          toast.error(err.data.error); 
        } else {
          toast.error("Invalid Credentials."); 
        }
        setLoading(false);
      });
  };

  const validate = () => {
    return !admissionNumber || !password;
  };

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
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
                type="string"
                placeholder="Enter your Admission number"
              />

              <h2 className={styles.rowname}>Password</h2>

              {/* <div className={styles.passwordContainer}>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100% ",
                    height: "50px",
                    position: "relative",
                    borderRadius: "8px",
                    border: "1px solid var(--grey-50, #ccc)",
                    background: "var(--white-full, #fff)",
                    padding: "0.5em",
                    paddingRight: "10px",
                    outline: "none",
                  }}
                  type={passwordType}
                  placeholder="Enter password"
                  value={password}
                  name="password"
                />
                <div
                  className={styles.visibility}
                  onClick={togglePassword}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "auto",
                    background: "transparent",
                    border: "none",
                    position: "absolute",
                    cursor: "pointer",
                  }}
                >
                  {passwordType === "password" ? (
                    <MdOutlineVisibilityOff
                      style={{
                        color: "black",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    />
                  ) : (
                    <MdOutlineVisibility style={{ color: "black" }} />
                  )}
                </div>
              </div> */}

              <div
                className={styles.passwordContainer}
                style={{ position: "relative" }}
              >
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                    height: "50px",
                    borderRadius: "8px",
                    border: "1px solid var(--grey-50, #ccc)",
                    background: "var(--white-full, #fff)",
                    padding: "0.5em",
                    paddingRight: "40px",
                    outline: "none",
                  }}
                  type={passwordType}
                  placeholder="Enter password"
                  value={password}
                  name="password"
                />
                <div
                  className={styles.visibility}
                  onClick={togglePassword}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                  }}
                >
                  {passwordType === "password" ? (
                    <MdOutlineVisibilityOff style={{ color: "black" }} />
                  ) : (
                    <MdOutlineVisibility style={{ color: "black" }} />
                  )}
                </div>
              </div>

              <p className={styles.forget}>
                <Link
                  to="/student-reset-password"
                  style={{
                    textDecoration: "none",
                    fontFamily: "sans-serif",
                    color: "#052e16",
                  }}
                >
                  Reset Password?
                </Link>
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
                      color="#064e3b"
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
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default StudentLogin;
