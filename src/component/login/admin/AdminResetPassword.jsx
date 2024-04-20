import React, { useState } from "react";
import styles from "../student/changepassword.module.scss";
import { ToastContainer, toast } from "react-toastify";
import ReactLoading from "react-loading";
import { useAppDispatch } from "../../shared/redux/reduxHooks";
import { AdminReset } from "../../shared/redux/slices/auth.slices";

const AdminResetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const resetAdminData = () => {
    setLoading(true);
    const body = {
      email,
    };
    dispatch(AdminReset(body))
      .unwrap()
      .then(() => {
        setLoading(false);
        toast.success("Password reset email sent successfully!");
      })
      .catch((err) => {
        const errorMessage = err.message || "Failed to send reset email";
        toast.error(errorMessage);
        setLoading(false);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Kindly input your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button onClick={resetAdminData} className={styles.submitButton}>
          {loading ? (
            <ReactLoading color="white" width={25} height={25} type="spin" />
          ) : (
            "Submit"
          )}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminResetPassword;
