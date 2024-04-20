import styles from "./adminlogin.module.scss";
import arrow from "../../../assets/png/arrowright.png";
import { useNavigate } from "react-router-dom";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import React, { useState } from "react";
import { AdminLogin } from "../../shared/redux/slices/auth.slices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "../../shared/redux/reduxHooks";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

const AdminLoginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginAdmin = useAppSelector((state) => state.auth.loginAdmin);
  const [data] = useState(loginAdmin);

  const loginAdminData = () => {
    setLoading(true);
    // Validate email format
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      toast.error("Please enter a valid email address");
      setLoading(false);
      return;
    }

    let body = {
      email: email,
      password: password,
    };
    dispatch(AdminLogin(body))
      .unwrap()
      .then(() => {
        setLoading(false);
        navigate("/admin");
        toast.success("Login successful");
      })
      .catch((err) => {
        const errorMessage = err.message;
        toast.error(errorMessage);
        setLoading(false);
      });
  };

  const validate = () => {
    return !email || !password; // Check for empty email and password
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
              <h2 className={styles.rowname}>Email address</h2>
              <input
                className={styles.calculatorinput}
                type="email"
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <h2 className={styles.rowname}>Password</h2>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  type={passwordType}
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  name="password"
                  style={{
                    width: "100%",
                    height: "50px",
                    marginTop: "0.4em",
                    borderRadius: "8px",
                    border: "1px solid var(--grey-50, #ccc)",
                    background: "var(--white-full, #fff)",
                    padding: "0.5em",
                    paddingRight: "40px", // Space for the button
                    outline: "none", // Remove default focus outline
                  }}
                />
                <button
                  className={styles.visibility}
                  onClick={togglePassword}
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  {passwordType === "password" ? (
                    <MdOutlineVisibilityOff />
                  ) : (
                    <MdOutlineVisibility />
                  )}
                </button>
              </div>

              <p className={styles.forget}>
                <Link
                  to="/student-reset-password"
                  style={{
                    textDecoration: "none",
                    fontFamily: "sans-serif",
                    color: "#052e16",
                    fontWeight: "normal",
                  }}
                >
                  Reset Password?
                </Link>
              </p>
              <div className={styles.requestbut}>
                <button
                  className={styles.btnrequest}
                  disabled={validate()}
                  style={{
                    backgroundColor: validate() ? "#a7f3d0" : " ",
                  }}
                  onClick={loginAdminData}
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
          </div>
          <div>
            <p className={styles.donthave} style={{ marginTop: "1em" }}>
              By clicking sign in, you agree to our{" "}
              <span>Terms & Conditions </span>and <span>Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default AdminLoginPage;
