import React, { useState } from "react";
import styles from "./adminlogin.module.scss";
import { AdminLogin } from "../../shared/redux/slices/auth.slices";
import { useAppDispatch, useAppSelector } from "../../shared/redux/reduxHooks";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import ReactLoading from "react-loading";
import "react-toastify/dist/ReactToastify.css";
import arrow from "../../../assets/png/arrowright.png";

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
        console.log(err);
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        ) {
          toast.error(err.message);
        } else {
          toast.error("Invalid Credentials.");
        }
        setLoading(false);
      });
  };

  const validate = () => {
    return !email || !password;
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
              {/* <div
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
                    paddingRight: "40px",
                    position: "absolute",
                    outline: "none",
                  }}
                />
                <button
                  className={styles.visibility}
                  onClick={togglePassword}
                  style={{
                    right: "5px",
                    position: "relative",
                    // top: "50%",
                    // transform: "translateY(-50%)",
                    cursor: "pointer",
                    border: "none",
                    backgroundColor: "black",
                  }}
                >
                  {passwordType === "password" ? (
                    <MdOutlineVisibilityOff />
                  ) : (
                    <MdOutlineVisibility />
                  )}
                </button>
              </div> */}
              <div
                className={styles.passwordContainer}
                style={{ position: "relative" }}
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
                    borderRadius: "8px",
                    border: "1px solid var(--grey-50, #ccc)",
                    background: "var(--white-full, #fff)",
                    padding: "0.5em",
                    paddingRight: "40px", // Increased paddingRight to accommodate the icon
                    outline: "none",
                  }}
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
                  to="/admina-reset-password"
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
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default AdminLoginPage;
