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
import AdminForgetPassword from "./adminForgetPassword";
import Modal from "../../classes/modal/Modal";

const AdminLoginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [showModal, setShowModal] = useState(false);
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
      // adminData: adminData,
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

  console.log("here", AdminLogin);
  const validate = () => {
    return !email || !password; // Check for empty email and password
  };

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
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
              <h2 className={styles.rowname}>Email address</h2>
              <input
                className={styles.calculatorinput}
                type="email"
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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

              <p className={styles.forget} onClick={handleModalShow}>
                Reset Password?
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
      {/* Render the AdminForgetPassword component */}
      <ToastContainer position="top-center" />
      <Modal isOpen={showModal} onClose={handleModalClose}>
        <AdminForgetPassword handleModalShow={handleModalShow} />
      </Modal>
    </div>
  );
};

export default AdminLoginPage;
