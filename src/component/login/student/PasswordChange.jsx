import React, { useState } from "react";
import styles from "./changepassword.module.scss"; // Assuming you have CSS file for styling
import { toast } from "react-toastify";

const PasswordChange = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = () => {
    // Logic to check if passwords match and contain required characters
    if (password !== confirmPassword) {
      // Passwords don't match
      toast.error("Passwords do not match");
    } else if (
      !/[a-z]/.test(password) ||
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[^a-zA-Z0-9]/.test(password)
    ) {
      // Password does not contain required characters
      toast.error(
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
      );
    } else {
      // Password change logic here
      // You can make an API call to update the password
      toast.success("Password changed successfully");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Kindly Change Your Password</h2>
      <div className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="input your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            placeholder="confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className={styles.submitButton} onClick={handleChangePassword}>
          Submit
        </button>
      </div>
      <p className={styles.passwordAdvice}>
        Kindly choose a password that contains at least one lowercase letter,
        one uppercase letter, one number, and one special character.
      </p>
    </div>
  );
};

export default PasswordChange;
